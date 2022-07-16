/*------------------------------------------------------------------------
 ---------------**iteración #1: Mix for e includes -----------------------
 -----------------------------------------------------------------------*/

 /*Dado el siguiente javascript usa forof para recorrer el array de películas, 
 genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
 Ten en cuenta que las categorías no deberían repetirse. 
 Para filtrar las categorías puedes ayudarte de la función **.includes()**/


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categorias =[];
//creamos un array para meter todo el contenido de los valores de categories de los diferentes objetos 
let categoriasRepetidas=[];
//recorremos el array de los objetos 
for (peliculas of movies){
    //recorremos el objeto dentro del array 
    for (key in peliculas ){
        //cuando la key sea categories nos metemos dentro solo en estas keys
        if (key=="categories"){
            //los valores de categories los recorremos y los push en el array con todos los repetidos
            peliculas[key].forEach((categoria) =>{
                categoriasRepetidas.push(categoria);
            })
        }
    }
}
//creamos funcion para los valores repetidos
const emoveDuplicates = (mixed) =>  {
    const result = [];
    mixed.forEach ((item)=>{
      if(!result.includes(item)){
        result.push(item);}
    })
  
    return result;
  }

//llamamos a la funcion y quitamos repetidos y guardamos en categories 
categorias= emoveDuplicates(categoriasRepetidas);

console.log(categorias);

