import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarCarro() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function BuscarCarro() {
        const produtoRef = collection(db, 'carro'); // o nome da coleção lá no Firestore
        const buscaCarro = query(produtoRef, where('NomeDoCarro', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaCarro);
        const listaCarro = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaCarro);
        setResultado(listaCarro);
    }
    useEffect(
        () => {
            BuscarCarro();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar  Carro </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome do Carro: <Text key={item.id}>{item.NomeDoCarro}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Placa do Carro: <Text key={item.id}>{item.PlacaDoCarro}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Preco do Carro: <Text key={item.id}>{item.PrecoDoCarro}</Text></Text>}
                
            />
        </View>
    )
}import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarCarro() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function BuscarCarro() {
        const produtoRef = collection(db, 'carro'); // o nome da coleção lá no Firestore
        const buscaCarro = query(produtoRef, where('NomeDoCarro', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaCarro);
        const listaCarro = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaCarro);
        setResultado(listaCarro);
    }
    useEffect(
        () => {
            BuscarCarro();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar  Carro </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome do Carro: <Text key={item.id}>{item.NomeDoCarro}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Placa do Carro: <Text key={item.id}>{item.PlacaDoCarro}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Preco do Carro: <Text key={item.id}>{item.PrecoDoCarro}</Text></Text>}
                
            />
        </View>
    )
}import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from '../config/firebase';

export default function BuscarCarro() {
    const [busca, setBusca] = useState(''); // o useState é responsável por criar variáveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function BuscarCarro() {
        const produtoRef = collection(db, 'carro'); // o nome da coleção lá no Firestore
        const buscaCarro = query(produtoRef, where('NomeDoCarro', '==', busca))
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaCarro);
        const listaCarro = resultadoSnapshot.docs.map(doc => doc.data())
        console.log(listaCarro);
        setResultado(listaCarro);
    }
    useEffect(
        () => {
            BuscarCarro();
        }, [busca]
    )
    return (
        <View>
            <Text>Buscar  Carro </Text>
            <TextInput
                label="Faça sua busca"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                
                renderItem={({ item }) => <Text>Nome do Carro: <Text key={item.id}>{item.NomeDoCarro}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Placa do Carro: <Text key={item.id}>{item.PlacaDoCarro}</Text></Text>}
                
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => <Text>Preco do Carro: <Text key={item.id}>{item.PrecoDoCarro}</Text></Text>}
                
            />
        </View>
    )
}