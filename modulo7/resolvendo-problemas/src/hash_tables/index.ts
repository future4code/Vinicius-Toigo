// interface Character {
//    name: string;
//    cartoon: string;
//    phrase?: string;
// }

interface CharacterCartoon {
   [index: string]: string;
}

// const homer: Character = {
//    name: "Homer Simpson",
//    cartoon: "The Simpsons"
// }

const homer: CharacterCartoon = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

homer.phrase = "Moe, me vê mais uma Duff Beer!"

console.log(homer);