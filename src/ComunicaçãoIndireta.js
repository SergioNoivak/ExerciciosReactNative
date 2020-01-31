import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import estilo from './../estilos/estilo';

export const Entrada = props => 
<View>
    <TextInput value={props.texto} style={estilo.input} onChangeText={props.chamarQuandoMudar}/>

</View>;


export class TextoSincronizado extends Component{

    state = {

        texto:""

    }

    alterarTexto  =(texto)=>{
        this.setState({texto})

    }

    render(){

        return (
            <View>
                <Text style={estilo.fonte40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto} chamarQuandoMudar={this.alterarTexto}></Entrada>
            </View>
        )

    }

}