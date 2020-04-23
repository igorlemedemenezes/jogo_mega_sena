import React, { useRef } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Cartao from '../components/Cartao';


const TelaUsuario = (props) => {

    const nomeAtual = useRef('');
    const telefoneAtual = useRef('');

    const editar = () => {

        nomeAtual.current = "Joaquin";
        telefoneAtual.current = "99999999";

        console.log("Rascunho do usuario iD: "+nomeAtual.current);
        console.log("Rascunho do usuario iD: "+telefoneAtual.current);
    }

    return (
        <View styles={estilos.telaView}>
            <Text style={estilos.titulo}>Perfil do usuario</Text>
                <Cartao estilos={estilos.telaView}>
                    <Text style={estilos.txtForm}>Id: {props.id}</Text>
                    <Text style={estilos.txtForm}>Nome: {props.nome}</Text>
                    <Text style={estilos.txtForm}>Telefone: {props.telefone}</Text>
                </Cartao>
                <Button
                    title="Editar"
                    onPress={editar}
                />
        </View>
    );
}


const estilos = StyleSheet.create({
    txtForm:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        marginVertical: 10
    },
    telaView:{
        width: '100%',
        alignItems:'center',
        justifyContent: 'center'
    },
    titulo:{
        fontSize: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default TelaUsuario;