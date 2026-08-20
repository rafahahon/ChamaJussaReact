import { useEffect, useState } from "react";
import { OrdemServico } from "../@types";
import { ordemServicoService } from "../services/ordemServicoService";

export function useDetalheOs(id: string) {
    // estados, funcoes que chamam as funcoes que fazem as requisicoes, useEffect
                             // vem de types
    const[os, setOs] = useState<OrdemServico | null>(null);

    async function carregarOs() {
        try {
            const dados = await ordemServicoService.buscarPorId(id);
            setOs(dados)
        } catch (error) {
            console.log("Erro ao carregar os detalhes da ordem de serviço.")
        }
    }

    useEffect(() => {
        carregarOs();
    }, [])

    return os;
}