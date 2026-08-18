// essa parte e como uma dto do front-end

// os atributos da interface necessitam estar iguais a api (DTO)
export interface Login {
    email: string,
    senha: string
}

export interface LoginResponse {
    token: string
}