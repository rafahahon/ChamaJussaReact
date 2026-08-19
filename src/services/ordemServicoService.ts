import { OrdemServico } from "../@types";
import { api } from "./api";

export const ordemServicoService = {
    async listar() : Promise<OrdemServico[]> {
        // requisicao
        const resposta = await api.get<OrdemServico[]>("/api/OrdemServico")
        return resposta.data;
    }
}