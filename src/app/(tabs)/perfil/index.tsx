import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "./perfil.styles"
import { ActivityIndicator } from "react-native";
import { usePerfil } from "../../../hooks/usePerfil";
import { useRouter } from "expo-router";
import { autenticacaoService } from "../../../services/autenticacaoService";

export default function Perfil() {

  const { perfil, carregando, erro } = usePerfil();
  const router = useRouter();

  async function fazerLogout() {
    Alert.alert("Sair", "Deseja realmente sair?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            await autenticacaoService.logout();

            router.replace("/login");
          },
        },
      ]
    );
  }

  if (carregando) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, { justifyContent: "center" }]}>
          <ActivityIndicator size="large" color="#004AAD" />
        </View>
      </SafeAreaView>
    )
  }

  if (erro) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Text>{erro}</Text>
        </View>
      </SafeAreaView>
    );
  }

  // funcao para gerar a imagem de perfil com as iniciais do usuario
  function obterIniciais(nomeCompleto?: string) {
    if (!nomeCompleto) return "";

    const nomes = nomeCompleto.trim().split(" ");

    const primeira = nomes[0][0];
    const ultima = nomes.length > 1
      ? nomes[nomes.length - 1][0]
      : "";

    return (primeira + ultima).toUpperCase();
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        {/* Título Principal */}
        <Text style={styles.headerTitle}>Perfil</Text>

        {/* Card de Informações do Usuário */}
        <View style={styles.card}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {obterIniciais(perfil?.nome)}
            </Text>
          </View>

          <Text style={styles.userName}>{perfil?.nome}</Text>
          <Text style={styles.userEmail}>{perfil?.email}</Text>
        </View>

        {/* Botão de Sair da Conta */}
        <TouchableOpacity
          onPress={fazerLogout}
          style={styles.logoutButton}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}