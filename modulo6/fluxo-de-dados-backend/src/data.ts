import { v4 as generateId } from "uuid";
type Produto={
	id:number,
	name:string,
	price:number
}
export const Produtos:Produto[]=[
	{id:Number(generateId()),
	name:"Camisa",
	price:200.00},
	{id:Number(generateId()),
	name:"Calça",
	price:100.00},
	{id:Number(generateId()),
	name:"Tenis",
	price:100.00}
] 