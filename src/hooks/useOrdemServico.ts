// src/hooks/useOrdensServico.ts
import { useState, useEffect } from 'react';
import { OrdemServico } from '../@types';
import { ordemServicoService } from '../services/ordemServicoService';

export function useOrdemServico() {

  const [ordens, setOrdens] = useState<OrdemServico[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function carregarOrdens() {
    try {
      setLoading(true);
      setError(null);

      const dados = await ordemServicoService.listar();
      setOrdens(dados);
    } catch (err: any) {
      setError('Não foi possível carregar as ordens de serviço.');
    } finally {
      setLoading(false);
    }
  }

    useEffect(() => {
    carregarOrdens();
  }, []);

  return {
    ordens,
    loading,
    error,
    recarregar: carregarOrdens,
  };
}

export default useOrdemServico;