import test from 'ava'
import execa from 'execa'

test('events --city', async t => {
  const {stdout} = await execa.shell('./check.js events --city paris')
  t.true(stdout.includes('samedi'))
  t.true(stdout.includes('dimanche'))
  t.true(stdout.includes('2017'))
})

test('events --days', async t => {
  const {stdout} = await execa.shell('./check.js events --days=lundi,mercredi')
  t.true(stdout.includes('lundi'))
  t.true(stdout.includes('mercredi'))
})
