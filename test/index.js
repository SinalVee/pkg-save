const test = require('ava');
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

let pkgStr;

test.cb.before(t => {
  fs.readFile(path.resolve(__dirname, 'package.json'), function (err, data) {
    if (err) {
      t.end(err);
    }

    pkgStr = data;

    cp.exec('npm install koa@2.0.0', t.end);
  });
});

test.cb.after(t => {
  fs.writeFile(path.resolve(__dirname, 'package.json'), pkgStr, function (err) {
    if (err) {
      t.end(err);
    }

    rimraf(path.resolve(__dirname, 'node_modules'), t.end);
  });
});

test.cb('pkg-save should save dependencies', t => {
  cp.exec('../bin/pkg-save koa', {
    cwd: __dirname
  }, function (err, stderr) {
    if (err) {
      t.end(err);
    }

    fs.readFile(path.resolve(__dirname, 'package.json'), function (err, data) {
      if (err) {
        t.end(err);
      }

      const pkg = JSON.parse(data);

      t.is(pkg.dependencies.koa, '^2.0.0');
      t.end();
    });
  });
});

test.cb('pkg-save should save devDependencies', t => {
  cp.exec('../bin/pkg-save koa --dev', {
    cwd: __dirname
  }, function (err, stderr) {
    if (err) {
      t.end(err);
    }

    fs.readFile(path.resolve(__dirname, 'package.json'), function (err, data) {
      if (err) {
        t.end(err);
      }

      const pkg = JSON.parse(data);

      t.is(pkg.devDependencies.koa, '^2.0.0');
      t.end();
    });
  });
});
