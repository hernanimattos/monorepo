const gulp = require('gulp');
const { exec } = require('child_process');
const logger = require('gulp-logger');
const run = require('gulp-run-command').default;

const task = gulp.task;
const paralels = gulp.parallel;

const callback = (cb) => {
  task(copyLib);
  cb();
};

const copyLib = (done) => {
  return exec('yarn add gulp-sass', (err, std, sto) => {
    console.log(err, std, sto);
  });
  done();
};

// const updateLib = (cb) => {
//   cb();
// };
// const updateLib = async () => {
//   return await Promise.resolve(
//     exec('yarn add gulp-sass', async (err, std, sto) => {
//       console.log(err, std, sto);
//     })
//   );
// };

task('updateLib', async (done) => {
  return exec('yarn add gulp-sass', async (err, std, sto) => {
    if (err) {
      console.log(err);
      throw new Error('Deu ruim no update da lib');
    }

    if (std) {
      console.log(std, 'A lib foi atualizada');
    }
  });
  done();
});

task('updateTheme', async () => {
  return exec('yarn add gulp-sass', (err, std, sto) => {
    console.log(err, std, sto);
  });
});

gulp.watch(['../library/*.*', ''], callback);
