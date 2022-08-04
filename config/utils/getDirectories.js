const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).filter(name => isDirectory(join(source, name)));

module.exports = getDirectories;
