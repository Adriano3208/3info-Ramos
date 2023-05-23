import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarProduto() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarProdutos() {
        const produtoRef = collection(db, 'produtos'); // o nome da coleção lá no Firestore
        const buscaProdutos = query(produtoRef, where('NomeDoProduto', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaProdutos);
        const listaProdutos = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaProdutos);
        setResultado(listaProdutos);
    }
    useEffect(
        () => {
            buscarProdutos();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar Produto</Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome do Produto <Text key={item.id}>{item.NomeDoProduto}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Preço do Produto: <Text key={item.id}>{item.PrecoDoProduto}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Quantidade do Produto: <Text key={item.id}>{item.QuantidadeDoProduto}</Text></Text>}
                
            />
        </View>
    )
}