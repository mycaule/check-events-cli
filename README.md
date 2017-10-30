Check events from your favorite website using command line interface.

This website must provide an API using a calendar standard.
See my [events-searcher](https://github.com/mycaule/events-searcher) project

Usage:
```bash
mycaule$ ./check events --city paris --exclude='toto','titi' --days=lundi,mardi --summary true
Make HTTP request here with this body:
{ city: 'paris',
  exclude: [ 'toto', 'titi' ],
  days: [ 'lundi', 'mardi' ],
  summary: true }
```
