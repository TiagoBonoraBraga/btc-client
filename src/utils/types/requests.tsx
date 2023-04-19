export type LoginRequest = {
    email: string;
    password: string;
};

export type CreateProductRequest = {
    product: string;
    commission: string;
    ponctuation: string;
};

export type UpdateProductRequest = {
    id?: string;
    product: string;
    commission: string;
    ponctuation: string;
}