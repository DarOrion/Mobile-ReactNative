import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View>
       
        <Image
          source={{ uri: 'https://siga.cps.sp.gov.br/image//N4Y9ZJZ38Y8E4S5TESCDT3SWJIEV9U.TMB.JPG'}}
          style={{ width: 300, height: 300}}
        />

       <Text style={{color: 'black', fontSize: 35, margin: 15}}>DADOS PESSOAIS: </Text>
       
       <Text style={{color: 'blue', fontSize: 25, margin: 1}}>NOME:</Text> 
       
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>Marcelo Felicio Pereira </Text>
       
       <Text style={{color: 'blue', fontSize: 25, margin: 1}}>RA: </Text>
       
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>1290482023002 </Text>
       
       <Text style={{color: 'blue', fontSize: 25, margin: 1}}>FORMAÇÃO: </Text>
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>Adminstração; </Text>
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>Logística; </Text>
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>Logística e Planejamento Portuário; </Text>
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>Logística de Petroleo, Gás e BioCombustível </Text>
       
       <Text style={{color: 'blue', fontSize: 25, margin: 1}}>Expriência:</Text>
       <Text style={{color: 'black', fontSize: 15, margin: 1}}> Na area a Programação e Dev nenhuma</Text>
       
       <Text style={{color: 'blue', fontSize: 25, margin: 1}}>Projetou: </Text>
       <Text style={{color: 'black', fontSize: 15, margin: 1}}>Só dentro da Fatec com TPs  </Text>

        
        <Text style={{color: '#FF0000', fontSize: 35, margin: 15}}>
         
        </Text>


      </View>
    )
  }
}
 
export default App;
