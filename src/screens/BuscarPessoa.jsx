import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarPessoa() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function BuscarPessoa() {
        const produtoRef = collection(db, 'pessoa'); // o nome da coleção lá no Firestore
        const buscaPessoa = query(produtoRef, where('NomeDaPessoa', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaPessoa);
        const listaPessoa = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaPessoa);
        setResultado(listaPessoa);
    }
    useEffect(
        () => {
            BuscarPessoa();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar Pessoa </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome da Pessoa: <Text key={item.id}>{item.NomeDaPessoa}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Altura da Pessoa: <Text key={item.id}>{item.AlturaDaPessoa}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Trabalho da Pessoa: <Text key={item.id}>{item.TrabalhoDaPessoa}</Text></Text>}
                
            />
        </View>
    )
}