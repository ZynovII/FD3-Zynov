"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

let companyName='Velcom';
let clientsArr=[ 
      {id:1, firstName:"Иван", lastName: "Иванов", patronymic: "Иванович", balance:200, status: 'active'}, 
      {id:2, firstName:"Сидор", lastName: "Сидоров", patronymic: "Сидорович", balance:250, status: 'active'}, 
      {id:3, firstName:"Петр", lastName: "Петров", patronymic: "Петрович", balance:180, status: 'active'},
      {id:4, firstName:"Григорий", lastName: "Григорьев", patronymic: "Григорьевич", balance:-220, status: 'blocked'},
    ];

ReactDOM.render( 
  <MobileCompany clientsArr={clientsArr} />
, document.getElementById('container') );
