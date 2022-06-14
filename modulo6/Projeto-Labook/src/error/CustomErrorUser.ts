import { BaseError } from "./BaseError"

export class invalidName extends BaseError{
    constructor() {
        super(415, "Invalid name, full name is required")
    }
}
export class invalidEmail extends BaseError{
    constructor() {
        super(415, "invalid email is required to have '@'")
    }
}
export class invalidPassword extends BaseError{
    constructor() {
        super(415, "Invalid password must be longer than 6 characters")
    }
}

export class invalidUserEmail extends BaseError{
    constructor() {
        super(404, "This email is already registered")
    }
}
