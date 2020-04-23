import React,{useState} from 'react';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaCadastro from './telas/TelaCadastro';
import TelaUsuario from './telas/TelaUsuario';

export default function App() {
  
  const[idUsuario, setIdUsuario] = useState();
  const[nomeUsuario, setNomeUsuario] = useState();
  const[telefoneUsuario, setTelefoneUsuario] = useState();

  const selecionaUsuarioId = (idUsuario) => {
    setIdUsuario(idUsuario);
  }

  const selecionaUsuarioNome = (nomeUsuario) => {
    setNomeUsuario(nomeUsuario);
  }

  const selecionaUsuarioTelefone = (telefoneUsuario) => {
    setTelefoneUsuario(telefoneUsuario);
  }

  let conteudo = <TelaCadastro 
                  onSelecionaUsuarioId={selecionaUsuarioId}
                  onSelecionaUsuarioNome={selecionaUsuarioNome}  
                  onSelecionaUsuarioTelefone={selecionaUsuarioTelefone}
                />
  //let conteudo = <TelaUsuario/>
  


  if(idUsuario){
    conteudo = <TelaUsuario id={idUsuario} nome={nomeUsuario} telefone={telefoneUsuario}/>
  }

  return (
    
    <View>
      <Cabecalho titulo={'Cadastro de usuario'}/>
      {conteudo}
    </View>
   
  );
}