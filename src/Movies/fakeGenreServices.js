
export const genres=[
       
       { _id:'1' ,name:'Action'},
       { _id:'3' ,name:'Thriller'},
       { _id:'4' ,name:'Comedy'},
       { _id:'5' ,name:'Horrior'},
       { _id:'6' ,name:'Fight'}
    ];
    export function getGenres(){
        return genres.filter(g=>g);
    }

