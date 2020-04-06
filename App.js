import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem'
import LembreteInput from './components/LembreteInput';

export default function App() {
  
  const [usuarios, setUsuarios] = useState([]);

  let [contadorUsuarios, setContadorUsuarios] = useState(10);

  const adicionarNome = (nome,telefone) => {
    //spread
    setUsuarios (usuarios => {
      console.log (usuarios);
      setContadorUsuarios(contadorUsuarios + 1);
      if(contadorUsuarios % 2 == 1){
        setContadorUsuarios(contadorUsuarios+1); 
      }else{
        setContadorUsuarios(contadorUsuarios+2); 
      }
      return [{key: contadorUsuarios, vNome: nome, vTelefone: telefone}, ...usuarios];
    });
    
    //console.log (lembrete);
  }

  const removerLembrete = (keyASerRemovida) => {
    setUsuarios(usuarios =>{
      return usuarios.filter(nome => nome.key !== keyASerRemovida);
    })
  }
  

  return (
    <View style={styles.telaPrincipalView}>
      <LembreteInput onAdicionarUsuario={adicionarNome}/>
      <FlatList
        data={usuarios}
        renderItem={
          ({item}) => (
            <LembreteItem 
              nome={item.vNome}
              telefone={item.vTelefone}
              chave={item.key}
              onDelete={removerLembrete}
            />
          )          
        }
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  }
});
