import { useEffect, useState } from "react";
import { Perfil } from "../@types/perfil";
import { perfilService } from "../services/perfilService";

export function usePerfil() {

    const [perfil, setPerfil] = useState<Perfil | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    async function buscarPerfil() {
        try {
            setCarregando(true);
            setErro(null);

            const dados = await perfilService.obterPerfil();
            setPerfil(dados);

        } catch {
            setErro("Não foi possível carregar o perfil.");
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        buscarPerfil();
    }, []);

    return {
        perfil,
        carregando,
        erro,
        atualizarPerfil: buscarPerfil
    };
}