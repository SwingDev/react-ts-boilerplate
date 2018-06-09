#!/usr/bin/env node

// @see: https://github.com/react-boilerplate/react-boilerplate/blob/master/internals/scripts/setup.js

'use strict';

const rimraf = require('rimraf');
const exec = require('child_process').exec;

const { addCheckMark } = require('./helpers');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let clearRepo = true;

cleanRepo(() => {
  process.stdout.write('\nInstalling dependencies... (This might take a while)');

  installDependencies();
});

function cleanRepo(callback) {
  fs.readFile('.git/config', 'utf8', (err, data) => {
    if (!err) {
      const isClonedRepo = typeof data === 'string'
        && (data.match(/url\s*=/g) || []).length === 1
        && /react-ts-boilerplate\/react-ts-boilerplate\.git/.test(data);

      if (isClonedRepo) {
        process.stdout.write('\nDo you want to clear old repository? [Y/n] ');
        process.stdin.resume();
        process.stdin.on('data', (data) => {
          const val = data.toString().trim();
          if (val === 'y' || val === 'Y' || val === '') {
            process.stdout.write('Removing old repository');
            rimraf('.git/');
            addCheckMark(callback);
          } else {
            dontClearRepo('', callback);
          }
        });
      } else {
        dontClearRepo('\n', callback);
      }
    } else {
      callback();
    }
  });
}

function dontClearRepo(nl, callback) {
  clearRepo = false;
  process.stdout.write(nl + 'Leaving your repository untouched');
  addCheckMark(callback);
}

function installDependencies() {
  exec('yarn --version', function (err, stdout, stderr) {
    if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
      exec('npm install', () => addCheckMark.bind(null, handleDepsInstall));
    } else {
      exec('yarn install', () => addCheckMark.bind(null, handleDepsInstall));
    }
  });
}

function deleteInternals(directory) {
  rimraf(directory, callback);
}

function handleDepsInstall() {
  process.stdout.write('\n\n');

  if (error) {
    process.stderr.write(error);
    process.stdout.write('\n');
    process.exit(1);
  }

  deleteInternals('./internals', () => {
    if (clearRepo) {
      process.stdout.write('Initialising new repository');
      initGit();
    }

    process.stdout.write('\nDone!');
    process.exit(0);
  });
}

function initGit(callback) {
  exec('git init && git add . && git commit -m "Initial commit"', () => addCheckMark(callback));
}
