import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('edit buttons work', () => {

  const component = renderer.create(
    <MobileCompany clientsArr={[ 
      {id:1, firstName:"Иван", lastName: "Иванов", patronymic: "Иванович", balance:200, status: 'active'}, 
      {id:2, firstName:"Сидор", lastName: "Сидоров", patronymic: "Сидорович", balance:250, status: 'active'}, 
      {id:3, firstName:"Петр", lastName: "Петров", patronymic: "Петрович", balance:180, status: 'active'},
      {id:4, firstName:"Григорий", lastName: "Григорьев", patronymic: "Григорьевич", balance:-220, status: 'blocked'},
    ]}/>
  );
  const editBtn = component.root.find( el => el.props.dataTestId == 'edit1');

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  editBtn.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});