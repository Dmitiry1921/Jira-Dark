'use strict';

const fs = require('fs');
const path = require('path');
const pckg = require('./package.json');

const {setVariable} = require('./utils/general');

const lessFiles = fs.readdirSync('./styles');
const Styles = {};

lessFiles.forEach(file => {
    Styles[file.replace('.less', '')] = fs.readFileSync(path.join( './css', file.replace('.less', '.css')), "utf8");
});

let script = fs.readFileSync("src/script.js", "utf8");
let meta = fs.readFileSync("src/meta.js", "utf8");

const VARIABLES = {
    package: pckg,
    ...Styles,
}

meta = setVariable(meta, VARIABLES);
script = setVariable(script, VARIABLES);


fs.writeFileSync(`./${pckg.name}.user.js`, meta+script);
fs.writeFileSync(`./${pckg.name}.meta.js`, meta);


