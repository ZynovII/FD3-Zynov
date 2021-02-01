import React from 'react';
import PropTypes from 'prop-types';

import { EditTableEvents } from './events';
import './ClientCardEdit.scss';


class ClientCardEdit extends React.PureComponent {
    static propTypes = {
        client: PropTypes.object,
        cardmode: PropTypes.number.isRequired,
    };
    state = {
        firstName: this.props.client.firstName || '',
        lastName: this.props.client.lastName || '',
        patronymic: this.props.client.patronymic || '',
        balance: this.props.client.balance || '',
        id: this.props.client.id,
        errorFirstName: null,
        errorLastName: null,
        errorPatronymic: null,
        errorBalance: null,
        isValide: this.props.cardmode == 1 ? true : false,
    };

    firstNameRef = null;
    lastNameRef = null;
    patronymicRef = null;
    balanceRef = null;

    setFirstNameRef = (ref) => this.firstNameRef = ref;
    setLastNameRef = (ref) => this.lastNameRef = ref;
    setPatronymicRef = (ref) => this.patronymicRef = ref;
    setBalanceRef = (ref) => this.balanceRef = ref;

    _setValide = () => {
        if(
            this.firstNameRef.value&&
            this.lastNameRef.value&&
            this.patronymicRef.value&&
            this.balanceRef.value
        ) {
            this.setState({isValide: true});
        }
    }
    validateFirstName = () => {
        if(this.firstNameRef.value.length == 0) {
            this.setState({errorFirstName: 'fill the field', isValide: false});
        } else {
            this.setState({errorFirstName: ''})
        }
        this._setValide();
    }
    validateLastName = () => {
        if(this.lastNameRef.value.length == 0) {
            this.setState({errorLastName: 'fill the field', isValide: false});
        } else {
            this.setState({errorLastName: ''})
        }
        this._setValide();
    }
    validatePatronymic = () => {
        if(this.patronymicRef.value.length == 0) {
            this.setState({errorPatronymic: 'fill the field', isValide: false});
        } else {
            this.setState({errorPatronymic: ''})
        }
        this._setValide();
    }
    validateBalance = () => {
        if(this.balanceRef.value.length == 0) {
            this.setState({errorBalance: 'fill the field', isValide: false});
        } else {
            this.setState({errorBalance: ''})
        }
        this._setValide();
    }
    
    cancel=()=>EditTableEvents.emit('ECancelChanges');

    save = () => {
        let newStatus = this.balanceRef.value > 0 ? 'active' : 'blocked';
        EditTableEvents.emit('ESaveChanges',
            {
                ...this.props.client, 
                firstName: this.firstNameRef.value,
                lastName: this.lastNameRef.value,
                patronymic: this.patronymicRef.value,
                balance: this.balanceRef.value,
                status: newStatus
            }
        );
        EditTableEvents.emit('ESetValid', true);
    }
    
    validateAllFields = () => {
        let textError = 'fill the field';
        (this.firstNameRef.value.length == 0) 
        ? this.setState({errorFirstName: textError, isValide: false}) 
        : this.setState({errorFirstName: ''});
        (this.lastNameRef.value.length == 0) 
        ? this.setState({errorLastName: textError, isValide: false}) 
        : this.setState({errorLastName: ''});
        (this.patronymicRef.value.length == 0) 
        ? this.setState({errorPatronymic: textError, isValide: false}) 
        : this.setState({errorPatronymic: ''});
        (this.balanceRef.value.length == 0) 
        ? this.setState({errorBalance: textError, isValide: false}) 
        : this.setState({errorBalance: ''});
        if(
            !this.state.errorFirstName,
            !this.state.errorLastName,
            !this.state.errorPatronymic,
            !this.state.errorBalance
        ) {
            this.setState({isValide: true});
            this.save();
        }
    }

    render() {
        
        console.log('Компонент ClientCardEdit render');
        return (
            <div className='client-card'>
                <div className='client-card__title'>
                    {
                        (this.props.cardmode == 1) 
                        ?'Edit existed client'
                        :'Create new client'
                    }
                </div>
                <div className='client-card__body'>
                    <div className='client-card__field'>
                        <span className='client-card__form-article'>ID:</span>{this.state.id}
                    </div>
                    <div className='client-card__field'>
                        <span className='client-card__form-article'>First Name:</span>
                        <input className='client-card__input' 
                            type='text' defaultValue={this.state.firstName} 
                            ref={this.setFirstNameRef}
                            onBlur={this.validateFirstName}
                        />
                        <span className='client-card__error'>{this.state.errorFirstName}</span>
                    </div>
                    <div className='client-card__field'>
                        <span className='client-card__form-article'>Last Name:</span>
                        <input className='client-card__input' 
                            type='text' defaultValue={this.state.lastName} 
                            ref={this.setLastNameRef} 
                            onBlur={this.validateLastName}
                        />
                        <span className='client-card__error'>{this.state.errorLastName}</span>
                    </div>
                    <div className='client-card__field'>
                        <span className='client-card__form-article'>Patronymic:</span>
                        <input className='client-card__input' 
                            type='text' defaultValue={this.state.patronymic} 
                            ref={this.setPatronymicRef} 
                            onBlur={this.changePatronymic}
                        />
                        <span className='client-card__error'>{this.state.errorPatronymic}</span>
                    </div>
                    <div className='client-card__field'>
                        <span className='client-card__form-article'>Balance:</span>
                        <input className='client-card__input' 
                            type='text' defaultValue={this.state.balance} 
                            ref={this.setBalanceRef} 
                            onBlur={this.validateBalance}
                        />
                        <span className='client-card__error'>{this.state.errorBalance}</span>
                    </div>
                    <div className='client-card__field'>
                        <input type='button' value='Save' 
                            disabled={!this.state.isValide} 
                            onClick={this.validateAllFields}
                        />
                        <input type='button' value='Cancel' onClick={this.cancel}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientCardEdit;