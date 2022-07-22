import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";

// const musica: ListNode = new ListNode("Envolver")
// const proxMusica: ListNode = new ListNode("Times like these", musica)
// const proxproxMusica: ListNode = new ListNode("Master of the Puppets", proxMusica)

// console.log(proxproxMusica)


//Criação da lista encadeada.
const primeiro: ListNode = new ListNode("primeiro")
const lista: LinkedList = new LinkedList(primeiro)


lista.addToTail("segundo")
lista.addToTail("terceiro")
lista.addToTail("quarto")
lista.addToTail("quinto")

console.log(lista.find("terceiro"))

