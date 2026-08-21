import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Perfil } from "../@types/perfil";
import { perfilService } from "../services/perfilService";

interface AuthContextType {
        // puxa de types
  usuario: Perfil | null;
  carregando: boolean;
  atualizarUsuario: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Perfil | null>(null);
  const [carregando, setCarregando] = useState(true);

  async function atualizarUsuario() {
    try {
      const dados = await perfilService.obterPerfil();
      setUsuario(dados);
    } catch (error) {
      console.log("Erro ao carregar usuário:", error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    atualizarUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        atualizarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}