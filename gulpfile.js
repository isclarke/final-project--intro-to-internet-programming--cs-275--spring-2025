const { src, dest, series, watch } = require(`gulp`);
const fs = require(`fs`);
const babel = require(`gulp-babel`);
const htmlmin = require(`gulp-htmlmin`);
const cleanCSS = require(`gulp-clean-css`);
const uglify = require(`gulp-uglify`);
const eslint = require(`gulp-eslint`);
const stylelint = require(`gulp-stylelint`);
const browserSync = require(`browser-sync`).create();
const htmlhint = require(`gulp-htmlhint`);

let paths = {
    js: `app/**/*.js`,
    css: `app/**/*.css`,
    html: `app/html/index.html`,
    prod: `prod`,
    temp: `temp`
};

let createDirs = (done) => {
    [
        `prod/js`,
        `prod/css`,
        `prod/html`,
        `temp/js`,
        `temp/css`,
    ].forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
    done();
};

// DEV TASKS
let validateHTML = () => {
    return src(paths.html)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(dest(`temp`));
};

let validateCSS = () => {
    return src(paths.css)
        .pipe(stylelint({
            reporters: [{ formatter: `string`, console: true }]
        }))
        .pipe(dest(`temp/css`));
};

let transpileJSForDev = () => {
    return src(paths.js)
        .pipe(babel({ presets: [`@babel/preset-env`] }))
        .pipe(dest(`temp/js`));
};

let validateJS = () => {
    return src(paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(dest(`temp/js`));
};

// PROD TASKS
let compressHTML = () => {
    return src(paths.html)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(`prod/html`));
};

let transpileJSForProd = () => {
    return src(paths.js)
        .pipe(babel({ presets: [`@babel/preset-env`] }))
        .pipe(dest(`prod/js`));
};

let compressJS = () => {
    return src(paths.js)
        .pipe(uglify())
        .pipe(dest(`prod/js`));
};

let compressCSS = () => {
    return src(paths.css)
        .pipe(cleanCSS())
        .pipe(dest(`prod/css`));
};

// Serve function
let serve = () => {
    browserSync.init({
        server: {
            baseDir: [`temp`, `./`, `temp/js` ]
        }
    });
};

//Watch Files
watch(paths.js, series(validateJS, transpileJSForDev)).on(`change`,
    browserSync.reload);
watch(paths.css, series(validateCSS)).on(`change`, browserSync.reload);
watch(paths.html, series(validateHTML)).on(`change`, browserSync.reload);

// TASK EXPORTS
exports.serve = series(
    createDirs,
    validateHTML,
    transpileJSForDev,
    validateJS,
    validateCSS,
    serve
);

exports.build = series(
    createDirs,
    compressHTML,
    transpileJSForProd,
    compressJS,
    compressCSS
);

exports.default = exports.serve;
