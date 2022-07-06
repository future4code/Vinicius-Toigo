import { calculateEmployeeSalary, CalculateEmployeeSalaryInput } from "./calculateEmployeeSalary"
import { validateEmptyProperties, ValidateEmptyPropertiesOutput } from "./validateEmptyProperties"

const myEmployee: CalculateEmployeeSalaryInput = {
    employeeName: "João",
    baseSalary: 2000,
    benefits: [],
    extraHours: 200
}



const totalEmployeeSalary = calculateEmployeeSalary(myEmployee);
console.log(totalEmployeeSalary);