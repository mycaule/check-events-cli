Check events from your favorite website using command line interface.

This website must provide an API using a calendar standard.
See my [events-searcher](https://github.com/mycaule/events-searcher) project

## Configuration

Create `config.json` file and fill a webservice URL.

## Usage
```bash
mycaule$ ./check.js events --city paris --exclude='toto','titi' --days=samedi,dimanche --summary true

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
mycaule$ ./check.js help

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
## TODO list

- [ ] Install as global package, publish on NPM
- [ ] Document webservice contract
- [ ] Support for English language
- [ ] Local configuration file (see [HTTPie Config](https://httpie.org/doc#config)) for the design
