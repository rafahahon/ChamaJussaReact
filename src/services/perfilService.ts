import { Perfil } from "../@types/perfil";
import { api } from "./api";

export const perfilService = {
    async obterPerfil(): Promise<Perfil> {
                                                // nao precisa de id pq o token ja faz a funcao
        const { data } = await api.get<Perfil[]>("Usuario");

            // a api retorna uma lista de usuarios,
            // entao aqui pegamos o primeiro resultado (usuario logado)
        return data[0];
    }
};