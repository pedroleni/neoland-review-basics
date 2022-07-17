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

/*------------------------------------------------------------------------
 ---------------**iteración #2: Iteración #2: Mix Fors-----------------------
 -----------------------------------------------------------------------*/

 /**Dado el siguiente javascript usa forof y forin para hacer la media del volumen 
   de todos los sonidos favoritos que tienen los usuarios.*/
 
 
 const users = [
   {
     name: "Manolo el del bombo",
     favoritesSounds: {
       waves: { format: "mp3", volume: 50 },
       rain: { format: "ogg", volume: 60 },
       firecamp: { format: "mp3", volume: 80 },
     },
   },
   {
     name: "Mortadelo",
     favoritesSounds: {
       waves: { format: "mp3", volume: 30 },
       shower: { format: "ogg", volume: 55 },
       train: { format: "mp3", volume: 60 },
     },
   },
   {
     name: "Super Lopez",
     favoritesSounds: {
       shower: { format: "mp3", volume: 50 },
       train: { format: "ogg", volume: 60 },
       firecamp: { format: "mp3", volume: 80 },
     },
   },
   {
     name: "El culebra",
     favoritesSounds: {
       waves: { format: "mp3", volume: 67 },
       wind: { format: "ogg", volume: 35 },
       firecamp: { format: "mp3", volume: 60 },
     },
   },
 ];




//ARRAY reduccion --como hay anidados varios objetos lo voy a reducir para comprender mejor el codigo
let reducion=[];

//ARRAY valores2 --aqui guardare todos los valores de los volumenes
let valores2=[];


//VARIABLE volumeValor --- para almacenar el valor leido del bucle y lo utilizare para guardarlo luego en valores2 
let volumeValor

//VARIABLE media --- para guardar la media aritmetica de todos los valores
let media;

//VARIABLE i --- se utlizara para referenciar la posicion de array valores2
let i=-1

//----------------ARRAY COMPLETO ----------------------
//recorremos los usuarios
 for (let usuarios of users){
    //recorremos los objetos
    // tiene las propiedades de favoritesSounds y name
    for ( let key in usuarios){ 
        //nos paramos en el objeto favoritesSounds
            reducion.push(usuarios[key]) ;      
    }
}

// ----------------ARRAY REDUCCIDO --------------------
for (let usuariosDos of reducion){
    for ( caracteristicas in usuariosDos){
        for (let valores in usuariosDos[caracteristicas] ){
            if (valores =="volume"){
                i++;
                //LE DAMOS LOS VALUES DE VOLUME a una variable 
                let volumeValor=(usuariosDos[caracteristicas][valores]);

                //Añadir valor a la posicion [i] de valores2
                // i se ira incrementando cada vez pase por el if
                // i esta inicializada en -1 para cuando se incremente por primera vez coja el valor 0
                //VALOR 0 siendo la primera posicion del array
                
                valores2 [i] = volumeValor;
            }
        }
    }
}
// ------------ FUNCION DE SUMAR TODOS------------------
const sumAll = (listNumbers) => {
 
    let contador = 0;
   
    for (let value of listNumbers) {
      contador += value;
    }
    // Retornamos el total
    return contador;
  }



// -------------FUNCION DE LA MEDIA DE TODOS LOS VALORES -----
const average = (listN) => {
    //Reutilizamos la función del ejercicio anterior 
    return sumAll(listN) / listN.length;
}

// ------------ LANZAMOS LA FUNCION average, con los valores de array valores2
media =average(valores2);


console.log("La media de sonido de todos los usuarios total es: "+media);








 
 
 
 