var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    stringFormHtml = 'form class=\"form',
    stringElemHtml = 'div class=\"form__search';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');
        if ((indexHtml.indexOf(stringFormHtml) > 0) && (indexHtml.indexOf(stringElemHtml) > 0)) {
            exercise.emit('pass', 'Блоки и элементы добавлены');
            callback(null, true);
        } else {
            exercise.emit('fail', 'Вам нужно добавить необходимые блоки в BEMJSON');
        }
    } else {
        exercise.emit('fail', 'index.html не существует. Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
