export class Posts {
    constructor(
        private id: string,
        private photo:string,
        private description: string,
        private creationData: string,
        private type: TYPE,
        private userId: string
    ){}

    public getId () {
        return this.id
    }
    public getPhoto () {
        return this.photo
    }
    public getDescription () {
        return this.description
    }
    public getCreationData () {
        return this.creationData
    }
    public getType () {
        return this.type
    }
    public getUserId () {
        return this.userId
    }

}

export enum TYPE {
    NORMAL = "Normal",
    EVENT = "Event"
}

export interface PostInputDTO {
    photo:string
    description: string,
    creationData: string,
    type: TYPE,
    userId: string
}


 export type Post = {
    id: string,
    photo:string
    description: string,
    creationData: string,
    type: TYPE,
    userId: string
}