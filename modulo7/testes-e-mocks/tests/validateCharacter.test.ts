import { Characters } from "../src/model/characters";
import { performAttack, validateCharacter } from "../src/validateCharacter";

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for negative value", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: -1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  
  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  //sucesso
  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

  //falha 
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});

test("Should perform attack", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Characters = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Characters = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  performAttack(attacker, defender, validatorMock as any);

  expect(defender.life).toEqual(1300);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});

test("Should return invalid character error", () => {
  expect.assertions(4);
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Characters = {
    name: "",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Characters = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack(attacker, defender, validatorMock as any);
  } catch (error: any) {
    expect(error.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});