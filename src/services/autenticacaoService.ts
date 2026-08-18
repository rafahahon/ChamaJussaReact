import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login, LoginResponse } from "../@types/autenticacao"
import { api } from "./api.js"

export const autenticacaoService = {

    async login(dados : Login) : Promise<LoginResponse>{

        // com a {} em data -> ele muda o tipo da constante para LoginResponse e consegue retornar os dados dessa interface
        const {data} = await api.post<LoginResponse>("Autenticacao/login", dados);

        if(data.token){
            // pegar o token e salvar no "localstorage" do react native
            await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY, data.token);
        }

        return data;
    }
}