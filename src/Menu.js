import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {MegaSena} from './MegaSena';
import ParImpar from './ParImpar';
import Simples from './Simples';
import Contador from "./Contador";
import Plataformas from "./Plataformas";
import Evento from "./Evento";
import {Avo} from "./ComunicaçãoDireta"

import {TextoSincronizado} from './ComunicaçãoIndireta'
export default createDrawerNavigator(
  {
    TextoSincronizado:{
      screen:()=><TextoSincronizado></TextoSincronizado>
    },
    Avo:{
      screen:()=><Avo nome="Joao" sobrenome="Silva"></Avo>
    }
,
    Evento: {

      screen:Evento
    },
    
    Avo:{
      screen:()=> <Avo nome="joao " sobrenome="Silva"></Avo>
    },
    
    MegaSena: {
      screen: () => <MegaSena numeros={6}></MegaSena>,
      navigationOptions: {title: 'Mega sena'},
    },
    ParImpar: {
      screen: () => <ParImpar numero={30}></ParImpar>,
      navigationOptions: {title: 'Par & Ímpar'},
    },
    Simples: {
      screen: () => <Simples texto="simples"></Simples>,
    },

    Contador:() => <Contador numero={30} ></Contador>,
    Plataformas:{
      screen:Plataformas
    }

  },
  {
    drawerWidth: 300,
  },
);
