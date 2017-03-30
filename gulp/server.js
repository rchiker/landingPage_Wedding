'use strict';

const browserSync = require('browser-sync'),
    gulp = require('gulp'),
    path = require('path'),
    util = require('util');

const conf = require('./conf');


function browserSyncInit(baseDir, browser) {
    if (!browser) {
        browser = 'default';
    }

    let routes = null;
    if (baseDir === conf.paths.src || util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1) {
        routes = {'/node_modules': 'node_modules'};
    }

    const server = {baseDir, routes};

    browserSync.instance = browserSync.init({
        startPath: '/',
        server,
        port: 3000,
        browser,
    });
}

gulp.task('serve', ['watch'], () => {
    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});
