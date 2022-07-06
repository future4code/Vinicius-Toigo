
import { Characters } from './model/characters';

export const validateCharacter = ( input:Characters): boolean =>{
    if(
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
    ){
        return false;
    }
    if (input.life <=0 ||input.strength <=0 ||input.defense <=0  ){
        return false;

    }
    return true;
}

export const performAttack = (attacker: Characters, defender: Characters) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };