#!/usr/bin/env node

const app = require('caporal');
const inquirer = require('inquirer');
const chalk = require('chalk');
const axios = require('axios');
const config = new (require('conf'))();

app.version(require('./package.json').version);

app.command('events')
  .description('List latest events from the API with filters')
  .option('--city <name>', 'City', ['paris', 'lyon'], 'paris')
  .option('--exclude <list>', 'Exclude', app.LIST, [])
  .option('--days <list>', 'Days', app.LIST, ['samedi', 'dimanche'])
  .option('--summary <boolean>', 'Summary', app.BOOL, true)
  .action((args, options) => {
    axios.post(config.get('url'), options)
      .then(resp => {
        Object.keys(resp.data.list).forEach(key => {
          console.log(chalk.cyanBright(key));

          const events = resp.data.list[key].events ? resp.data.list[key].events : [];
          events.map(e => console.log(`  ${e}`));
        });
      })
      .catch(err => {
        console.log(err);
      });
  });

app.command('config')
  .description('Configure the service')
  .action(() => {
    console.log('Please provide some information here.');

    const questions = [
      {
        type: 'input',
        name: 'url',
        message: 'Events microservice URL:'
      }
    ];

    inquirer.prompt(questions).then(answers => {
      config.set(answers);
      console.log('Perfect ! Changes have been written locally !');
      console.log(config.path);
    });
  });

app.parse(process.argv);
