import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Platform } from "react-native";

// definindo o host local conforme plataforma(expo, web, ios, etc)
const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const porta = process.env.EXPO_PUBLIC_PORTA;

// dessa forma, conseguimos rodar tanto na web quanto no emulador
const enderecoApi = process.env.EXPO_PUBLIC_API || `http://${host}:${porta}`;

export const api = axios.create({
    baseURL: enderecoApi,
    timeout: 10000
})

// SOLICITACAO/REQUISICAO -- PRIMEIRO O TOKEN --> OK
// interceptar/impedir toda requisicao feita pela api (async obrigatorio)
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY);

    if(token) {
        //configurar o Bearer
        config.headers.Authorization = "Bearer " + token;
    }

    return config;
})