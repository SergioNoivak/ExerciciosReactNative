import React from 'react';
import { Text } from "react-native";
import estilo from '../estilos/estilo'
// import estilo from './../estilos/estilo'

export default function(props){

    return <Text style={[estilo.ex]}>Simples! editado com {props.texto}</Text>


}