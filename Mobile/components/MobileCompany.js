﻿import React, { Fragment } from 'react';

import { EditTableEvents } from './events';
import CompanyTitle from './CompanyTitle';
import ClientsTable from './ClientsTable';
import ClientCardEdit from './ClientCardEdit';

import './MobileCompany.scss';

class MobileCompany extends React.PureComponent {

  state = {
    dataReady: false,
    clientsArr : null,
    filteredClientsArr: null,
    filterMode: 0, //0-standart view, 1-when it filtered
    companyes : ['Velcom', 'MTS'],
    selectedClient: null, //selected client id
    cardmode: 0, //0-no card, 1-card edit, 2-card add
    isValid: true,
  }

  componentDidMount = () => {
      EditTableEvents.addListener('EDeliteClient', this.deliteClient);
      EditTableEvents.addListener('EEditClient', this.editClient);
      EditTableEvents.addListener('ESetValid', this.setValid);
      EditTableEvents.addListener('ESaveChanges', this.saveClientChanges);
      EditTableEvents.addListener('ECancelChanges', this.cancelChanges);
      this.loadData();
  };

  componentWillUnmount = () => {
      EditTableEvents.removeListener('EDeliteClient', this.deliteClient);
      EditTableEvents.removeListener('EEditClient', this.editClient);
      EditTableEvents.removeListener('ESetValid', this.setValid);
      EditTableEvents.removeListener('ESaveChanges', this.saveClientChanges);
      EditTableEvents.removeListener('ECancelChanges', this.cancelChanges);
  };

  loadData = () => {
    fetch( 'http://localhost:3000/' )
    .then( (response) => response.json() )
    .then( (result) => this.setState( {clientsArr: result, dataReady: true} ));
  }

  deliteClient = (id) => {
    let newClientsArr = this.state.clientsArr.filter( v => v.id != id);
    this.setState({clientsArr: newClientsArr});
  }

  editClient = (id) => {
    this.setState({cardmode: 1, selectedClient: id});
  }
  
  setValid = (bool) => this.setState( {isValid: bool} );

  addNewClient = () => {
    this.setState({cardmode: 2, selectedClient: null});
  }

  saveClientChanges = (client) => {
    let newClientArr = this.state.clientsArr.map(i => i.id == client.id ? client : i);
        if(client.id !== this.state.selectedClient) {
            newClientArr.push(client);
        }
        this.setState({clientsArr: newClientArr, cardmode: 0});
  }

  cancelChanges = () => this.setState({cardmode: 0, selectedClient: 0, isValid: true});

  showAllClients = () => this.setState( {filterMode: 0} );
  showActiveClients = () => {
    let newList = this.state.clientsArr.filter( v => v.status == 'active')
    this.setState( { filteredClientsArr: newList, filterMode: 1 } );
  };
  showBlockedClients = () => {
    let newList = this.state.clientsArr.filter( v => v.status == 'blocked')
    this.setState( { filteredClientsArr: newList, filterMode: 1 } );
  };

  render() {
    if(this.state.dataReady) {
      let newClientId = this.state.clientsArr.length + 1;
      var selectedClient = this.state.clientsArr.find( (v) => v.id === this.state.selectedClient ) ||
      {id: newClientId};
    }
    console.log('Компонент MobileCompany render');
    return (
      <div className='mobile-company'>
        <CompanyTitle companyes={this.state.companyes}/>
        <hr />
        <button onClick={this.showAllClients}>All</button>
        <button onClick={this.showActiveClients}>Active</button>
        <button onClick={this.showBlockedClients}>Blocked</button>
        <hr />
        {
          !this.state.dataReady 
          ? <div className='loading'>Data loading...</div>
          : [
              <ClientsTable key={'a'} users={ !this.state.filterMode
                ? this.state.clientsArr 
                : this.state.filteredClientsArr }
              />,
              <button key={'b'} onClick={this.addNewClient}>Add client</button>
            ]
        }
        {
          this.state.cardmode !==0 && 
          <ClientCardEdit 
              key={selectedClient.id}
              client={selectedClient}
              cardmode={this.state.cardmode}
          />
        }
      </div>
    );
  }

}

export default MobileCompany;
