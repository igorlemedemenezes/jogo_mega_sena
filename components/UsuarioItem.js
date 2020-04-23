import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Cartao from './Cartao';
import TelaUsuario from '../telas/TelaUsuario'

const UsuarioItem = (props) => {
    
    //const[retornaUsuario, setRetornarUsuario] = useState(false);

    const confirmaDelete = () => {

        let retorno = false;

        Alert.alert(
            'Excluir!',
            'Tem deseja que quer excluir o usuario ' + props.nome,
            [
                {
                    text: 'OK',
                    style: 'default',
                    onPress: deletaUsuario
                },
                {
                    text: 'CANCEL',
                    style: 'default',
                    
                }
            ]
        );
    }

    const deletaUsuario = () => {
        console.log("props.chave " + props.chave)
        props.onDelete.bind(this, props.chave)()
    }

    return (
        <Cartao>
            <TouchableOpacity 
            onLongPress={//() => {
                   // if(confirmaDelete)
                  //  {
                  //  } 
                    //props.onDelete.bind(this, props.chave)()
                    confirmaDelete
                //}
            }
            onPress={() => {
                    props.onSelecionaUsuarioId(props.chave);
                    props.onSelecionaUsuarioNome(props.nome);
                    props.onSelecionaUsuarioTelefone(props.telefone);
                } 
            }
            >
                <View style={styles.itemNaLista}  >
                    <Text>Nome: {props.nome}</Text>
                </View>
            </TouchableOpacity>        
        </Cartao>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        borderRadius: 8,
        marginBottom: 8,
        color: 'green'
    }
});

export default UsuarioItem;