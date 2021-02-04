import React, { Fragment } from 'react';

import { EditTableEvents } from './events';
import CompanyTitle from './CompanyTitle';
import ClientsTable from './ClientsTable';
import ClientCardEdit from './ClientCardEdit';

import './MobileCompany.scss';

const fetch = typeof window !== 'undefined' ? window.fetch : require('node-fetch');

class MobileCompany extends React.PureComponent {

  state = {
    dataReady: true,
    clientsArr : this.props.clientsArr,
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
      //this.loadData();
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
    this.setState({clientsArr: newClientsArr, selectedClient: null, cardmode: 0});
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
      let newClientId = this.state.clientsArr[this.state.clientsArr.length-1].id + 1;
      var selectedClient = this.state.clientsArr.find( (v) => v.id === this.state.selectedClient ) ||
      {id: newClientId};
    }
    console.log('Компонент MobileCompany render');
    return (
      <div className='mobile-company'>
        <CompanyTitle companyes={this.state.companyes}/>
        <hr />
        <button dataTestId='filterAll' onClick={this.showAllClients}>All</button>
        <button dataTestId='filterActiv' onClick={this.showActiveClients}>Active</button>
        <button dataTestId='filterBlock' onClick={this.showBlockedClients}>Blocked</button>
        <hr />
        {
          this.state.cardmode !==0 && 
          <ClientCardEdit 
              key={selectedClient.id}
              client={selectedClient}
              cardmode={this.state.cardmode}
          />
        }
        {
          !this.state.dataReady 
          ? <div className='loading'>Data loading...</div>
          : [
              <ClientsTable key={'a'} users={ !this.state.filterMode
                ? this.state.clientsArr 
                : this.state.filteredClientsArr }
              />,
              <button dataTestId='add' key={'b'} onClick={this.addNewClient}>Add client</button>
            ]
        }
      </div>
    );
  }

}

export default MobileCompany;
