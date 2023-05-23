import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarCor() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarCor() {
        const produtoRef = collection(db, 'cor'); // o nome da coleção lá no Firestore
        const buscaCor = query(produtoRef, where('NomeDaCor', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaCor);
        const listaCor = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaCor);
        setResultado(listaCor);
    }
    useEffect(
        () => {
            buscarCor();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar corr </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome da Cor: <Text key={item.id}>{item.NomeDaCor}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Tipo da Cor: <Text key={item.id}>{item.TipoDaCor}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Tom da Cor: <Text key={item.id}>{item.TomDaCor}</Text></Text>}
                
            />
        </View>
    )
}