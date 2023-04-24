//Crea un archivo JS que contenga las siguientes líneas:
//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
console.log("---------Lista de compra---------");
const info= [
    {cosa: "leche", precio: "$22"},
    {cosa: "arroz", precio: "$12"},
    {cosa: "aceite", precio: "$32"},
    {cosa: "manzanas", precio: "$20"},
    {cosa: "pan", precio: "$22"} 
];
console.log(info);

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
console.log("Añádele \"Aceite de Girasol\"");
info.push({cosa:"Aceite de Girasol", precio:"$35"});
console.log(info)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
console.log("Eliminacion \"Aceite de Girasol\"");
info.pop({cosa: "Aceite de Girasol", precio:"$35"});
console.log(info);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
console.log("----------Peliculas-------------");
const peliculas=[
    {peli: "Rapidos y furiosos I", director: "Gary Scott Thompson", fecha: "2001"},
    {peli: "Mario Bros", director: "Aaron Horvath", fecha: "2023"},
    {peli: "El ultimo cazador de brujas", director: "Breck Eisner", fecha: "2015"}
]
console.log(peliculas);

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
console.log("Películas posteriores al 1 de enero de 2010 (utilizando filter)")
const post= peliculas.filter(v => v.fecha>2010)
console.log(post);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
console.log("Directores de la lista de películas original (utilizando map)")
const directores= peliculas.map(r=>r.director);
console.log(directores)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
console.log("Títulos de la lista de películas original (utilizando map)")
const title= peliculas.map(q=>q.peli);
console.log(title);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log("Lista de directores y la lista de los títulos (utilizando concat)")
const juntos= directores.concat(title);
console.log(juntos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log("Lista de directores y la lista de los títulos (utilizando el factor de propagación)")
const propa=[...directores, ...title];
console.log(propa);
