import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarFruta() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function BuscarFruta() {
        const produtoRef = collection(db, 'fruta'); // o nome da coleção lá no Firestore
        const buscaFruta = query(produtoRef, where('NomeDaFruta', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaFruta);
        const listaFruta = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaFruta);
        setResultado(listaFruta);
    }
    useEffect(
        () => {
            BuscarFruta();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar  Frutaa </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome da Fruta: <Text key={item.id}>{item.NomeDaFruta}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Preço da Fruta: <Text key={item.id}>{item.PrecoDaFruta}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Quantidade da Fruta: <Text key={item.id}>{item.QuantidadeDaFruta}</Text></Text>}
                
            />
        </View>
    )
}