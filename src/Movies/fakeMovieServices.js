 export const  movies=[{
    id:1,
    title:'Terminator',
    Genre:'Action',
    Stock:6,
    Rate:2.5,
    liked:true
   },
   {
   id:2,
    title:'Die had',
    Genre:'Action',
    Stock:5,
    Rate:2.5,
    liked:true
   },
   {
   id:3,
    title:'Get Out',
    Genre:'Thriller',
    Stock:8,
    Rate:3.5,
    liked:true
   },
   {
   id:4,
    title:'Trip To Itlay ',
    Genre:'Comedy',
    Stock:7,
    Rate:3.5,
    liked:true
   },
   {
    id:5,
     title:'Predator ',
     Genre:'Horrior',
     Stock:7,
     Rate:3.5,
     liked:false
    },
    {
        id:6,
         title:'Transport  ',
         Genre:'Fight',
         Stock:7,
         Rate:3.5,
         liked:false
        },
        {
            id:7,
            title:'Police Story ',
            Genre:'Fight',
            Stock:7,
            Rate:3.5,
            liked:true
            }
         ]
         export function getmovies(){
             return movies;
         }
         export const newMovie=[{
                    id:8,
                    title:'',
                    Genre:'',
                    Stock:'',
                    Rate:'',
                    Liked:true

         }]

         export function getnewMovie(){
             return movies.push(newMovie)
         }
        //  export function saveMovie(movie){
        //      let movieInDb=movies.find(m=>m._id=== movie._id)||{};
        //      movieInDb.title=movie.title;
        //      movieInDb.genre=movie.genres.find(g=>g._id===movie.genreId);
        //      movieInDb.Numberinstock=movie.Numberinstock;
        //      movieInDb.Rate=movie.Rate;

        //      if(!movieInDb._id){
        //          movieInDb._id=Date.now().toString();
        //          movies.push(movieInDb);
        //      }
        //      return movieInDb;
        //  }
   