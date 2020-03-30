import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, MaskedInput} from 'react-native';

export default function App() {
  const[nome, setNome] = useState('')

  const[telefone, setTelefone] = useState('')

  const capturarNome = (nome) => {
    setNome(nome)
  }
  const capturaTelefone = (telefone) => {
    setTelefone(telefone)
  }

  const [lembretes, setLembretes] = useState([]);

  let[contadorLembretes, setContadorLembretes] = useState(10);

  const adicionarLembrete = () => {
    
    setLembretes (lembretes => {
      console.log(lembretes);
      if(contadorLembretes % 2 == 1){
        setContadorLembretes(contadorLembretes+1); 
      }else{
        setContadorLembretes(contadorLembretes+2); 
      }
      
      return [{
        
        id: contadorLembretes,
        valueNome: nome,
        valueTelefone: telefone
      }, ...lembretes];
    });
    
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.lembreteView}>
        <TextInput 
          placeholder="Nome..."
          style={styles.nomeTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput 
          placeholder="Telefone..."
          style={styles.telefoneTextInput}
          onChangeText={capturaTelefone}
          value={telefone}
        />
        <Button 
          title="+"
          onPress={adicionarLembrete}
        />
      </View>

      <FlatList
        data={lembretes}
        renderItem={
          ({item}) => (            
              <View style={styles.itemNaLista}>
                <Text>Id:{item.id}  Nome:{item.valueNome}  Telefone:{item.valueTelefone}</Text>
              </View>
          )
        }
      />
      {/*<ScrollView>
        {  
          for(Lembrete lembrete : lembretes)
          Após o => é onde vai exibir na tela
          lembretes.map((lembrete) => 
            <View 
              key={lembrete}
              style={styles.itemNaLista}><Text>{lembrete}</Text>
            </View>
          )
        }
      </ScrollView>*/}
    </View>
  );
}


const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  nomeTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  },
  telefoneTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: "#CCC",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});
