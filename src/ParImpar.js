import React from 'react';
import {Text,View} from 'react-native';
import estilo from '../estilos/estilo';
// import estilo from './../estilos/estilo'

export default props => (
  <View>
    {props.numero % 2 == 0 ? (
      <Text style={[estilo.ex]}>par</Text>
    ) : (
      <Text style={[estilo.ex]}>impar</Text>
    )}
  </View>
);
