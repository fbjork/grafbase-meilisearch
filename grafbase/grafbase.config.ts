import { g, config } from '@grafbase/sdk'

const movie = g.type('Movie', {
  id: g.int(),
  title: g.string(),
  overview: g.string(),
  genres: g.string().list()
})

g.query('movies', {
  returns: g.ref(movie).list(),
  resolver: 'movies'
})

export default config({ schema: g })
