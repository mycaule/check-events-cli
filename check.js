#!/usr/bin/env node

const app = require('caporal');
const chalk = require('chalk');
const axios = require('axios');

const SERVICE_URL = require('./config.json').url;

app.version('1.0.0')
  .command('events')
  .option('--city <city>', 'City', ['paris', 'lyon'], 'paris')
  .option('--exclude <excludeL>', 'Exclude', app.LIST, [])
  .option('--days <daysL>', 'Days', app.LIST, ['samedi', 'dimanche'])
  .option('--summary <sum>', 'Summary', app.BOOL, true)
  .action((args, options) => {
    axios.post(SERVICE_URL, options)
      .then(resp => {
        Object.entries(resp.data.list).forEach(([key, val]) => {
            console.log(chalk.cyanBright(key));

            let events = val.events ? val.events : [];
            events.map(e => console.log(`  ${e}`));
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  });

app.parse(process.argv);
