Check events from your favorite website using command line interface.

This package is still in beta.

[![NPM](https://nodei.co/npm/check-events-cli.png)](https://nodei.co/npm/check-events-cli/)

The website must provide an API using a calendar standard.
See my [events-searcher](https://github.com/mycaule/events-searcher) project

## Setup

```
npm install -g check-events-cli
```

## Configuration

Create `config.json` file and fill a webservice URL.

## Usage
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

Getting help
```bash
mycaule$ check help
   check.js 1.0.0

   USAGE
     check.js events

   OPTIONS
     --city <name>            City         optional      default: "paris"
     --exclude <list>         Exclude      optional      default: []
     --days <list>            Days         optional      default: ["samedi","dimanche"]
     --summary <boolean>      Summary      optional      default: true

   GLOBAL OPTIONS
     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
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
- [x] Install as global package, publish on NPM
- [ ] Better naming of the tool than just `check`?
- [ ] Local configuration file
  - [HTTPie Config](https://httpie.org/doc#config)) for the design of the file
  - [NConf in Ghost](https://dev.ghost.org/nconf/) for the user workflow
- [ ] Use [update-notifier](https://www.npmjs.com/package/update-notifier) to notify users of updates

### Publishing on NPM
```
npm version [patch, minor, major]
npm publish
```

MIT License - Michel Hua
