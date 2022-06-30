
export interface Recipe {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    authorId: string
}

export interface RecipeInputDTO {
    title: string,
    description: string,
    token: string
}
