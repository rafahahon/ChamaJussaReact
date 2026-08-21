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

    const formatarData = (dataStr?: string) => {
        if (!dataStr) return '';
            try {
                const data = new Date(dataStr);
                return isNaN(data.getTime()) ? dataStr : data.toLocaleString('pt-BR')
        } catch {
            return dataStr;
        }
    };

    return {
        os, 
        dataFormatada: formatarData(os?.dtCriacao)
    }
}