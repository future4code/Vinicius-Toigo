import { User } from "../../types/user"

    test("Testing balance greater than purchase", () => {
    	const user: User = {
    		name: "Astrodev",
    		balance: 100
    	}
    
    	const result = performPurchase(user, 40)
    	
    	expect(result).toEqual({
    		name: "Astrodev",
    		balance: 60
    	})
    })
    
    
    test("Testing balance equal purchase", () => {
    	const user: User = {
    		name: "Astrodev",
    		balance: 50
    	}
    
    	const result = performPurchase(user, 50)
    	
    	expect(result).toEqual({
    		...user,
    		balance: 0
    	})
    })
 
    test("Testing balance lesser than purchase", () => {
    	const user: User = {
    		name: "Astrodev",
    		balance: 30
    	}
    
    	const result = performPurchase(user, 50)
    	
    	expect(result).not.toBeDefined()
    })

function performPurchase(user: User, arg1: number) {
    throw new Error("Function not implemented.")
}
    