//login
export type LoginRequest = {
    email: string;
    password: string;
};

//crud
export type CreateProductRequest = {
    name: string;
    description: string; 
    commission: number  
    score: number;
    price: number;
};

export type UpdateProductRequest = {
    id: string;
    name: string;
    description: string;
    commission: number 
    score: number;
    price: number;
}

export type CreateClientRequest = {
    id: string; //external id
    name: string;
    adress: string;
    cep: string;
    cpf: string;
    fone: string;
}

export type CreateFranchisedRequest = {
    id: string;
    name: string;
    adress: string;
    cep: string;
    cnpj: string;
    fone: string;
}