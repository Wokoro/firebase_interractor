import { populate, getMovies } from './controller'

export default [
    {
        path: '/populate',
        method:'get', 
        handler: [populate]
    },
    {
        path: '/getmovies',
        method: 'get',
        handler: [getMovies ]
    }
]