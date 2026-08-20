import { OrdemServico } from "../@types";
import { api } from "./api";

export const ordemServicoService = {
    async listar() : Promise<OrdemServico[]> {
        // requisicao
        const resposta = await api.get<OrdemServico[]>("OrdemServico")
        return resposta.data;
    },

    // | -> cria um Union Type
    // GET: busca uma ordem de servico por ID
    async buscarPorId(id: number | string): Promise<OrdemServico> {
        const resposta = await api.get<OrdemServico>(`OrdemServico/${id}`)
        return resposta.data;
    },
}