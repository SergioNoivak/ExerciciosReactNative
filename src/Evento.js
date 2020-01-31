import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import estilo from './../estilos/estilo';

export default class Evento extends Component {
  state = {
    texto: '',
  };
  alterarTexto = texto => {
    this.setState({texto});
  };

  render() {
    return (
      <View>
        <Text style={estilo.font40}>{this.state.texto}</Text>
        <TextInput
          value={this.state.texto}
          style={estilo.input}
          onChangeText={this.alterarTexto}></TextInput>
      </View>
    );
  }
}
