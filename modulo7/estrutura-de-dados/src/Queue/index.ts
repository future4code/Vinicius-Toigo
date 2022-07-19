class Queue{
   constructor(
      public items: any[] = [],
      public length: number = 0
   ){

   }

   public enqueue = (value: any)=> {
      let index = this.items.length
      this.items[index] = value
   }

   public dequeue = () => {
     const removedItem = this.items[0]
      for(let i = 0; i < this.items.length; i++){
         this.items[i] = this.items[i + 1]
      }
      this.items.length--
      return removedItem 
   }

   public front = ():any  => {
      return (this.items[0])  
   }
}

let fila:Queue = new Queue()
fila.enqueue("Elemento x")
fila.enqueue("Açucar")
fila.enqueue("Tempero")
fila.enqueue("Labenu")

console.log(fila.dequeue())
console.log(fila.front())