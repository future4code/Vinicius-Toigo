import { BaseError } from "./BaseError";

export class invalidRecipe extends BaseError {
    constructor() {
        super(404, "Has no recipes")
    }
}
