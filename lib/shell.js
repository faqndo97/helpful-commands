'use strict'

const shellTool = require('shelljs')
const chalk = require('chalk')

module.exports = function shell (command) {
  if (command === 'Start solr') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Solr started successfully '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error starting solr '))
      shellTool.exit(1)
    }
  } else if (command === 'Stop solr') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Solr stopped successfully '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error stoping solr '))
      shellTool.exit(1)
    }
  } else if (command === 'Reindex solr') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Reindex of solr was successfull '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error reindexing solr '))
      shellTool.exit(1)
    }
  } else if (command === 'Start solr for test') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Solr for test started successfully '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error starting solr for test '))
      shellTool.exit(1)
    }
  } else if (command === 'Stop solr for test') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Solr for test stopped successfully '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error stopping solr for test '))
      shellTool.exit(1)
    }
  } else if (command === 'Start postgress') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Postgress started successfully '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error starting postgress '))
      shellTool.exit(1)
    }
  } else if (command === 'Stop postgress') {
    if (commandExec.code == 0) {
      console.log(chalk.bgGreen.bold(' Postgress stopped successfully '))
      shellTool.exit(0)
    } else {
      console.log(chalk.bgRed.bold(' Error stoppig postgress '))
      shellTool.exit(1)
    }
  }
}
