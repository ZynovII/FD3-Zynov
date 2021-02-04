import React from 'react';
import PropTypes from 'prop-types';

import {EditTableEvents} from './events';
import './User.scss';

class User extends React.PureComponent {
    static propTypes = {
        data: PropTypes.object,
    };

    delite = () => {
        EditTableEvents.emit('EDeliteClient', this.props.data.id);
    }
    edit = () => {
        EditTableEvents.emit('EEditClient', this.props.data.id);
    }

    render() {
        var userData = this.props.data;
        console.log('Компонент User с id: '+userData.id+' render');
        return (
            <tr className='client-row'>
                <td>{userData.firstName}</td>
                <td>{userData.lastName}</td>
                <td>{userData.patronymic}</td>
                <td>{userData.balance}</td>
                <td className={userData.status == 'active' ? 'active' : 'blocked'}>{userData.status}</td>
                <td><button dataTestId={'edit'+userData.id} onClick={this.edit}>Edit</button></td>
                <td><button dataTestId={'delite'+userData.id} onClick={this.delite}>Delite</button></td>
            </tr>
        );
    }
}

export default User;