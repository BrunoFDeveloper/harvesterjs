var Mocha = require('mocha'),
    path = require('path'),
    fs = require('fs'),
    location = path.normalize(__dirname);

require('longjohn');

var mocha = new Mocha()
    .reporter('spec')
    .ui('bdd');

mocha.addFile(path.join(location, 'harvest/all.js'));
mocha.addFile(path.join(location, 'harvest/events-reader.js'));


mocha.run(function (failures) {
    process.exit(failures);
});

