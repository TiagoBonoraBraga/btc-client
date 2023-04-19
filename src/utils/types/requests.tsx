export type LoginRequest = {
    email: string;
    password: string;
};

export type CreateProductRequest = {
    name: string;
    description: string;
    score: string;
};

export type UpdateProductRequest = {
    id?: string;
    name: string;
    description: string;
    score: string;
}