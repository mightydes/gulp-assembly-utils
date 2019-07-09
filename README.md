# gulp-assembly-utils

Collection of utility function for gulp-assembly package...

---

## Usage:

```js
const config = {
    dest: '/var/www/dest/assets',
    alias: {
        // ...
    },
    sourcemaps: {},
    uglify: {},
    cssnano: {}
};
const utils = $.assemblyUtils(config);
```

---

## Option list:

*   `dest` -- mandatory destination folder, for example: `/home/www/web/assets`.

*   `alias` -- optional collection of aliases for `utils.src` (`gulp.src`), for example:

    ```
    {
        // JS:
        'h5bp-plugins': 'html5-boilerplate/dist/js/plugins',
        'opentip': [
            'opentip/downloads/opentip-jquery',
            'opentip/lib/adapter-jquery'
        ],
        'jquery-ui-selectable': [
            'jquery-ui/ui/core',
            'jquery-ui/ui/widget',
            'jquery-ui/ui/mouse',
            'jquery-ui/ui/selectable'
        ],

        // CSS:
        'css-opentip': 'opentip/css/opentip.css',
        'css-sweetalert': 'sweetalert2/dist/sweetalert2.css',
        'css-ui-select': 'ui-select/dist/select.css',
        'css-angular-tree-control': [
            'angular-tree-control/css/tree-control.css',
            'angular-tree-control/css/tree-control-attribute.css',
        ]
    }
    ```

*   `sourcemaps` -- optional `gulp-sourcemaps` config object.

*   `uglify` -- optional `gulp-uglify` config object.

*   `cssnano` -- optional `gulp-cssnano` config object.

---

## Utils API:

*   `argv` -- [minimist](https://github.com/substack/minimist) results.

*   `src()` -- wrapper for `gulp.src()`.

*   `dest()` -- wrapper for `gulp.dest()`.

*   `isNoJs()` -- is used `-J` console option.

*   `isNoCss()` -- is used `-C` console option.

*   `isNoWatch()` -- is used `-W` console option.

*   `isMinify()` -- is used `--min` console option.
