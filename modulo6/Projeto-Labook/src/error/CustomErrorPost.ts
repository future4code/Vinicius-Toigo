import { BaseError } from "./BaseError";

export class invalidPost extends BaseError{
    constructor() {
        super(404, "There is no post")
    }
}