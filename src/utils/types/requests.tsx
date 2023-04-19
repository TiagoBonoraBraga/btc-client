export type LoginRequest = {
    email: string;
    password: string;
};

export type CreateProductRequest = {
    name: string;
    commission: string;
    score: string;
};

export type UpdateProductRequest = {
    id?: string;
    name: string;
    commission: string;
    score: string;
}