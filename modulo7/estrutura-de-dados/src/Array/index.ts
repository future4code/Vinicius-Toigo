const hogwartsHouses = new Array(
   "Grifinória",
   "Lufa-Lufa",
   "Sonserina",
   "Corvinal"
)
//hogwartsHouses lenght = 4
// index [ 0, 1, 2, 3]


//push
hogwartsHouses[hogwartsHouses.length] = "Casa Secreta"


//insert into specified position 
// function insert(array: Array<any>, index: number){
// }


//pop
hogwartsHouses.length = hogwartsHouses.length - 1 

//Remove last element from array and return it
function removeLastElement(array: Array<any>):any{
   const removedElement  = hogwartsHouses[hogwartsHouses.length - 1]
   hogwartsHouses.length = hogwartsHouses.length - 1 
   return(removedElement)
}


const splice = (array:Array<any>, index: number) => {
   const removedItem = array[index]
   for (let i = index; i < array.length; i++){
      array[i] = array[i + 1]   
   }
   array.length = array.length - 1
   return (removedItem)  
}


//const hogwartsHouses = ["Grifinória", "Lufa-lufa", "Sonserina", "Corvinal"]
//console.log( removeLastElement(hogwartsHouses))
console.log( splice(hogwartsHouses,3))
console.log(hogwartsHouses)