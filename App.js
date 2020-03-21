
import React, { Component } from 'react';
 
import { StyleSheet, View, Button, Text } from 'react-native';
 
export default class MyProject extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      // This is our Default number value
      NumberHolder : 0,
      NumberHolder2 : 0,
      NumberHolder3 : 0,
      NumberHolder4 : 0,
      NumberHolder5 : 0,
      NumberHolder6 : 0
 
    }
  }


  GerarNumeroAleatorio=()=>
{
 
  var RandomNumber = Math.floor(Math.random() * 60) + 1 ;
  var RandomNumber2 = Math.floor(Math.random() * 60) + 1 ;
  var RandomNumber3 = Math.floor(Math.random() * 60) + 1 ;
  var RandomNumber4 = Math.floor(Math.random() * 60) + 1 ;
  var RandomNumber5 = Math.floor(Math.random() * 60) + 1 ;
  var RandomNumber6 = Math.floor(Math.random() * 60) + 1 ;
 
this.setState({
 
  NumberHolder : RandomNumber,
  NumberHolder2 : RandomNumber2,
  NumberHolder3 : RandomNumber3,
  NumberHolder4 : RandomNumber4,
  NumberHolder5 : RandomNumber5,
  NumberHolder6 : RandomNumber6
 
})
}
  
  render() {
    return (
   
      <View style={styles.MainContainer} >
 
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder2}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder3}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder4}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder5}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder6}</Text>
       <Button title="Pressione o botão!" onPress={this.GerarNumeroAleatorio} />
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});