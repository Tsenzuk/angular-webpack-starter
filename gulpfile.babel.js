'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';

let reload = () => serve.reload();
let root = 'app';

let resolveTo = (type) => {
  type = type || '';
  return function (glob) {
    glob = glob || '';
    return path.join(root, type, glob);
  }
};

let toCamelCase = (val) => {
  val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  if (!!~val.indexOf('-')) {
    val = val.split('-').map(toCamelCase).join('');
  }
  return val;
};

let createComponent = (type) => {
  let name = yargs.argv.name.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveTo(type)(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: toCamelCase(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
};

// map of all paths
let paths = {
  js: resolveTo('components')('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveTo('app')('**/*(.styl|.scss|.sass|.css|.less)'), // stylesheets
  html: [
    resolveTo('app')('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app.js'),
  output: './dist',
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

let port = process.env.PORT || 3000;

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('serve', () => {
  serve({
    port,
    open: false,
    server: {baseDir: paths.output}
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('component', () => {
  return createComponent('components');
});

gulp.task('common', () => {
  return createComponent('common');
});

gulp.task('sync', (done) => {
  sync('webpack', 'serve', 'watch', done);
});

gulp.task('default', () => {
  console.log('Please choose one of other tasks:');
  console.log('webpack', 'to pack all components and place in ' + path.output);
  console.log('serve', 'to start this webapp on port ' + port);
  console.log('sync', 'to both webpack and serve in a row and rerun them on source changes');
  console.log('component', 'to create new component from template.', 'You can provide component name with --name="your-component-name".','And you can provide own path to component with --parent="your/parent/path"');
  console.log('common', 'to create new common component from template.', 'You can provide component name with --name="your-component-name".','And you can provide own path to component with --parent="your/parent/path"');
});
