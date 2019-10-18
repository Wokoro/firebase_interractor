import dbRef from '../../lib/firebase_storage';
import { randomIndex } from '../../utils'
import faker from 'faker';


// Populate this array with movie poster urls.
const movies_url = [
    '',
    '',
    '',
    '',
    ''
];

const genres = [
    'Drama', 
    'Crime',
    'Fantasy',
    'Historical',
    'Horror',
    'Mystery',
    'Political',
    'Romance',
    'Saga',
    'Social',
    'Speculative',
    'Thriller'
]

const countries = ['England', 'Holand', 'Nigeria', 'Ghana', 'Cameron'];

const language = ['English', 'French', 'Igbo', 'Yoroba']

const duration = ['1:00:00', '1:20:00', '1:30:00'];

const awards = ['AMA', 'Best Movie of the year', 'Best Script of the year', 'Best fiction of the year', 'Most downloaded']

export const populate = (req: any, res: any) => {
    let data: any = [];
    for(let i=1; i<=20; i ++){
        let data_template = {
            id: i,
            title: faker.lorem.sentence(randomIndex(3, 2)),
            producer: faker.name.findName(),
            rated: randomIndex(0, 5),
            released: faker.date.recent(),
            runtime: duration[randomIndex(0, 2)],
            genre: genres[randomIndex(0, 11)],
            director: faker.name.findName(),
            writer: faker.name.findName(),
            actors: [faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName()],
            plot: faker.lorem.sentences(randomIndex(3, 1)),
            language: language[randomIndex(3)],
            country: countries[randomIndex(4)],
            awards: awards[randomIndex(4)],
            summary: faker.lorem.paragraph(2),
            poster_url: movies_url[randomIndex(4)]
        }
        dbRef.push(data_template, (err) => {
            if(err){
               return res.status(400)
                .send({
                    status: 'error', 
                    message: 'Error initializing firebase db'
                });
            }else{
               return res.status(400)
                .send({
                    status: 'success', 
                    message: 'Success initializing firebase db'
                });
            }
        })
       data.push(data_template);
    }

   return res.status(200).send({status:"success", message: 'Population successful'});
}

export const getMovies = (req: any, res: any ) => {
    dbRef.once('value')
    .then( data => res.status(200).send(data) );
}