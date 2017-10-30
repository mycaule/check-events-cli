#!/usr/bin/env node

const app = require('caporal');
const chalk = require('chalk');
const axios = require('axios');

const SERVICE_URL = require('./config.json').url;

app.version('1.0.0')
  .command('events')
  .option('--city <name>', 'City', ['paris', 'lyon'], 'paris')
  .option('--exclude <list>', 'Exclude', app.LIST, [])
  .option('--days <list>', 'Days', app.LIST, ['samedi', 'dimanche'])
  .option('--summary <boolean>', 'Summary', app.BOOL, true)
  .action((args, options) => {
    axios.post(SERVICE_URL, options)
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

app.parse(process.argv);
