const _ = require('underscore');
const argv = require('minimist')(process.argv.slice(2));
const gulp = require('gulp');
const $if = require('gulp-if');
const $sourcemaps = require('gulp-sourcemaps');
const $uglify = require('gulp-uglify');
const $cssnano = require('gulp-cssnano');

module.exports = function (options) {
    return new Utils(options);
};

/**
 * @param {Object} options
 * @option {String} dest
 * @option {Object} alias
 * @option {Object} sourcemaps
 * @option {Object} uglify
 * @option {Object} cssnano
 * @returns {Object}
 * @constructor
 */
function Utils(options) {
    return {
        argv: argv,
        src: src,
        dest: dest,
        isNoJs: isNoJs,
        isNoCss: isNoCss,
        isNoWatch: isNoWatch,
        isMinify: isMinify,
        isSourceMaps: isSourceMaps,
        isNotify: isNotify,
        initSourceMap: initSourceMap,
        writeSourceMap: writeSourceMap,
        minifyJs: minifyJs,
        minifyCss: minifyCss
    };


    // FUNCTIONS:

    function src(list) {
        _.isArray(list) || (list = [list]);
        let out = [];
        list.forEach(function (it) {
            if (_.has(options.alias, it)) {
                it = options.alias[it];
            }
            _.isArray(it) || (it = [it]);
            it.forEach(function (module) {
                out.push(require.resolve(module))
            });
        });
        return gulp.src(out);
    }

    function dest() {
        return gulp.dest(options.dest);
    }

    function isNoJs() {
        return _.has(argv, 'J');
    }

    function isNoCss() {
        return _.has(argv, 'C');
    }

    function isNoWatch() {
        return _.has(argv, 'W');
    }

    function isMinify() {
        return _.has(argv, 'minify') || _.has(argv, 'min');
    }

    function isSourceMaps() {
        return _.has(argv, 'sourcemaps');
    }

    function isNotify() {
        return _.has(argv, 'notify') && argv.notify;
    }

    function initSourceMap() {
        return $if(isSourceMaps, $sourcemaps.init(options.sourcemaps));
    }

    function writeSourceMap() {
        return $if(isSourceMaps, $sourcemaps.write('.'));
    }

    function minifyJs() {
        return $if(isMinify, $uglify(options.uglify));
    }

    function minifyCss() {
        return $if(isMinify, $cssnano(options.cssnano));
    }
}
