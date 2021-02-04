import React from 'react';
import renderer from 'react-test-renderer';
import ClientCardEdit from '../components/ClientCardEdit';

import MobileCompany from '../components/MobileCompany';

test('add button work', () => {

  const component = renderer.create(
    <MobileCompany clientsArr={[ 
      {id:1, firstName:"Иван", lastName: "Иванов", patronymic: "Иванович", balance:200, status: 'active'}, 
      {id:2, firstName:"Сидор", lastName: "Сидоров", patronymic: "Сидорович", balance:250, status: 'active'}, 
      {id:3, firstName:"Петр", lastName: "Петров", patronymic: "Петрович", balance:180, status: 'active'},
      {id:4, firstName:"Григорий", lastName: "Григорьев", patronymic: "Григорьевич", balance:-220, status: 'blocked'},
    ]}/>
  );
  const newTestClient = {
    id: 5,
    firstName: "Тест",
    lastName: "Тестов",
    patronymic: "Тестович",
    balance: -100,
    status: "blocked",
  };
  const addBtn = component.root.find( el => el.props.dataTestId == 'add' );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  addBtn.props.onClick();

  const editComponent = component.root.findByType(ClientCardEdit);
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  editComponent._fiber.stateNode.saveEmitter(newTestClient);//не нажимаем кнопку, а сразу вызываем
                                           //метод сохранения(так удобнее передать 
                                           //значения).
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});