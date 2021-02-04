import React from 'react';
import renderer from 'react-test-renderer';

const fetch = require('node-fetch');

import MobileCompany from '../components/MobileCompany';

test('filter buttons work', () => {

  const component = renderer.create(
    <MobileCompany clientsArr={[ 
      {id:1, firstName:"Иван", lastName: "Иванов", patronymic: "Иванович", balance:200, status: 'active'}, 
      {id:2, firstName:"Сидор", lastName: "Сидоров", patronymic: "Сидорович", balance:250, status: 'active'}, 
      {id:3, firstName:"Петр", lastName: "Петров", patronymic: "Петрович", balance:180, status: 'active'},
      {id:4, firstName:"Григорий", lastName: "Григорьев", patronymic: "Григорьевич", balance:-220, status: 'blocked'},
    ]}/>
  );
  const filterBtnActive = component.root.find( el => el.props.dataTestId == 'filterActiv');
  const filterBtnBlocked = component.root.find( el => el.props.dataTestId == 'filterBlock');
  const filterBtnAll = component.root.find( el => el.props.dataTestId == 'filterAll' );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  filterBtnActive.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  filterBtnBlocked.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  filterBtnAll.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
