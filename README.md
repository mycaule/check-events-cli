Check events from your favorite website using command line interface.

This package is still in beta.

[![NPM](https://nodei.co/npm/check-events-cli.png)](https://nodei.co/npm/check-events-cli/)

You must first code a serverless function to fetch the data from your favorite website and expose them with the standard described in this document.
Code samples are given in this [events-searcher](https://github.com/mycaule/events-searcher) project

## Setup

```
npm install -g check-events-cli
```

## Configuration

Create `config.json` file and fill a webservice URL.

## Usage
First time configuration

```bash
$ check config
Please provide some information here.
? Events microservice URL: https://us-central1-project-name.cloudfunctions.net/events
Perfect ! Changes have been written locally !
/Users/mycaule/Library/Preferences/check-events-cli-nodejs/config.json
```

Getting help `check help`.
```bash
$ check help

check.js 1.0.0

USAGE
  check.js <command> [options]

COMMANDS
  events              List latest events from the API with filters
  config              Configure the service
  help <command>      Display help for a specific command

GLOBAL OPTIONS
  -h, --help         Display help
  -V, --version      Display version
  --no-color         Disable colors
  --quiet            Quiet mode - only displays warn and error messages
  -v, --verbose      Verbose mode - will also output debug messages
```

Listing events from the command line.
```bash
$ check events --city paris --exclude='toto','titi' --days=samedi,dimanche --summary true

samedi 4 novembre 2017
  Event 1
  Event 2
  Event 3
  ...
dimanche 5 novembre 2017
  Event 1
  Event 2
  Event 3
  ...
```

## Contributing

If you feel like helping with a pull request, I will be more than happy to review this!

### Roadmap

#### Backlog
- [ ] Document webservice contract for `events`. Read about the standards and check good practices:
     - [Google Events](https://developers.google.com/google-apps/calendar/v3/reference/events)
     - [Facebook Events](https://developers.facebook.com/docs/graph-api/reference/event/)
     - [Meetup Events](https://www.meetup.com/meetup_api/docs/2/events/))
- [ ] Support for English language
- [ ] Add a `check values` command (*eg.* stock values, ticket prices, announcement)
- [ ] Provide samples with actually working events microservices hosted on Google Cloud.

#### Package management
- [ ] Better naming of the tool than just `check`?

### Publishing on NPM
```
npm version [patch, minor, major]
npm publish
```

MIT License - Michel Hua
