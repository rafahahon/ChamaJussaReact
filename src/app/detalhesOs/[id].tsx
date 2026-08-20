import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './listaOs.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDetalheOs } from '../../hooks/useDetalheOs';
import { useLocalSearchParams } from 'expo-router';

export default function DetalheOS() {

    const {id} = useLocalSearchParams<{id: string}>();
    const os = useDetalheOs(id);

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Título Principal */}
            <Text style={styles.headerTitle}>Detalhes da OS-1001</Text>


            {/* Card Principal */}
            <View style={styles.card}>
                {/* Se você tentar aplicar um padding: 20 usando a propriedade style comum em um ScrollView, a barra de rolagem vai cortar visualmente ou o comportamento de scroll pode quebrar nas extremidades. */}
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>{os?.nomeItem}</Text>
                    <Text style={styles.date}>Criada em {os?.dtCriacao}</Text>

                    {/* Item: Máquina / Equipamento */}
                    <View style={styles.infoRow}>
                        <Entypo name="tools" size={24} color="#006FFF" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Máquina / Equipamento</Text>
                            <Text style={styles.value}>Tubulação/Sifão da Pia</Text>
                        </View>
                    </View>

                    {/* Item: Local / Setor */}
                    <View style={styles.infoRow}>
                        <Ionicons name="location-outline" size={22} color="#FF3B30" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Local / Setor</Text>
                            <Text style={styles.value}>{os?.localizacaoNome}</Text>
                        </View>
                    </View>

                    {/* Item: Solicitante */}
                    <View style={styles.infoRow}>
                        <Feather name="user" size={20} color="#34C759" style={styles.icon} />
                        <View>
                            <Text style={styles.label}>Solicitante</Text>
                            <Text style={styles.value}>{os?.solicitanteNome}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* Descrição */}
                    <Text style={styles.sectionTitle}>Descrição do Problema</Text>
                    <Text style={styles.descriptionText}>
                        {os?.descricao}
                    </Text>

                    {/* Foto */}
                    <Text style={styles.sectionTitle}>Foto do Problema</Text>
                    <Image
                        source={require('../../../assets/imgs/cadeiraquebrada.png')}
                        style={styles.problemImage}
                        resizeMode="cover"
                    />
                </ScrollView>
            </View>

            {/* Botão de Ação */}
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Editar Solicitação</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
}