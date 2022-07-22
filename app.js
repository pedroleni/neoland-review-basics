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
        
            //los valores de categories los recorremos y los push en el array con todos los repetidos
            peliculas["categories"].forEach((categoria) =>{
                categoriasRepetidas.push(categoria);
            })
        
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
 ---------------**iteración #2:  Mix Fors-----------------------
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


//VARIABLE media --- para guardar la media aritmetica de todos los valores
let media;

let totalSum =[];
for (usuarios of users){
  for (key in usuarios.favoritesSounds){
    totalSum.push(usuarios.favoritesSounds[key].volume)
  }
}

console.log(totalSum)

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
media =average(totalSum);

console.log("La media de sonido de todos los usuarios total es: "+media);

/*------------------------------------------------------------------------
 ---------------**iteración #3: Mix Fors----------------------------------
 -----------------------------------------------------------------------*/

 /*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
  Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
 Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido 
 se repita como favorito en cada usuario.
 
 Este ejercicio es un poco complicado con los conocimientos actuales pero...
 a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.*/
 

 let users2 = [
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

// RECORREMOS .-----------
 let valoresVolume =[];
 for (usuarios of users){
   for (key in usuarios.favoritesSounds){
     valoresVolume.push(usuarios.favoritesSounds[key].volume)
   }
 }
 
 console.log(valoresVolume)
 

// ----------- SACO UN ARRAY CON LOS VALORES SIN REPETIR ----------------
const Duplicates = (mixed) =>  {
  const result = [];
  mixed.forEach ((item)=>{
    if(!result.includes(item)){
      result.push(item);}
  })

  return result;
}

// CREO UN ARRAY PARA SABER QUE DATOS SIN REPETIR HAY PARA LUEGO CONTAR LOS REPETIDOS QUE HAY EN ARRAY CON LOS VALORES REPETIDOS
let  noDuplicate =Duplicates(valoresVolume);

// CREO UN ARRAY PARA QUE ME GUARDE LOS VALORES DE CUANTAS VECES ESTA REPETIDO ESE VALOR
let contadorVolume = [];
// EL S ME SERVIRA PARA LUEGO PONER EL INDICE DE contadorVolume y asi guardar los valores
let s=-1
//me creo ccc que me servira para contar el numero de veces se repite el valor de volumen
let ccc

noDuplicate.forEach((volumenIndividual)=>{
  //contador lo incializo a 0 para que cuando coja otro valor de volumen empiece a contar de nuevo. 
  ccc=0;
  
  // s es el indice del array que almacena los resultados cada vez que pase por aqui le damos el valor +1 para que grabe en la siguiente posicion
  s++;
  valoresVolume.forEach((elementos)=>{
    if (volumenIndividual==elementos){
      ccc++
    }

  })
  // Almaceno los resultador en un array 
  contadorVolume [s]=  "Para el volumen "+volumenIndividual+": "+ccc;
})
console.log("Los valores a buscar son: ")
console.log(noDuplicate)
console.log("Los valores en total son: ")
console.log(valoresVolume)
console.log(contadorVolume);


/*------------------------------------------------------------------------
 --------------------**iteración #4: Mix Fors----------------------------
 -----------------------------------------------------------------------*/

 /*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos 
 y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del 
 texto que enviaste como parametro. Haz varios ejemplos y compruebalos.*/

 //const findArrayIndex =(array, text)=> {

  let animales= ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

  const findArrayIndex =(array, text)=>{
    array.forEach ((element, index)=>{
      element==text?
        console.log(`Esta en la posicion ${index}`)
        : "";
      })
  }
  findArrayIndex (animales, "Caracol")

  findArrayIndex(animales, "Mosqui")

  findArrayIndex (animales, "Salamandra")

/*------------------------------------------------------------------------
 --------------------**iteración #5 : Función rollDice-------------------
 -----------------------------------------------------------------------*/
 /*Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos 
 que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función 
 use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer 
 un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**/


//forma 1
const rollDice =(caras)=>{console.log(parseInt(Math.random()*caras))}


//forma 2

const rollDice2 =(caras)=>{console.log(Math.floor(Math.random()*caras)+1)




  //La función Math.random() nos proporciona un número aleatorio entre 0 y 1, incluido el cero y excluido el 1.
  //La función Math.floor toma la parte entera de un número. No redondea, sino que toma la parte entera.
}
rollDice(8)

rollDice2(6)



/*------------------------------------------------------------------------
 --------------------**iteración #6 : Función swap ------------------------
 -----------------------------------------------------------------------*/
/*Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los 
indices que hayamos enviado como parametro. Retorna el array resultante.*/



let arrays= ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
const swap =(array, indiceUno, indiceDos)=>{
//guardaos el valor del indiceUno ya que cuando le asignems el de indeceDos ya no trendremos acceso al valor inicial 
 let cambioUno = array[indiceUno];
 array[indiceUno]= array[indiceDos];
 array[indiceDos]= cambioUno;
  return array
 
}
//Se intercambia el 1 por el 2 y el 2 por el 1
console.log (swap(arrays, 1, 2));




  


 
 





 








 
 
 
 