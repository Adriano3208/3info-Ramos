import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarAnimal() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarAnimal() {
        const produtoRef = collection(db, 'animal'); // o nome da coleção lá no Firestore
        const buscaAnimal = query(produtoRef, where('NomeDoAnimal', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaAnimal);
        const listaAnimal = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaAnimal);
        setResultado(listaAnimal);
    }
    useEffect(
        () => {
            buscarAnimal();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar  Animal </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome do Animal: <Text key={item.id}>{item.NomeDoAnimal}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Especie do Animal: <Text key={item.id}>{item.EspecieDoAnimal}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Cor do Animal: <Text key={item.id}>{item.CorDoAnimal}</Text></Text>}
                
            />
        </View>
    )
}