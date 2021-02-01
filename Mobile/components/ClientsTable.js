import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import './ClientsTable.scss';

class ClientsTable extends React.PureComponent {

    static propTypes = {
        users: PropTypes.array,
    }

    render() {
        let users = this.props.users.map( v => 
            <User key={v.id} data={v} />
        );
        console.log('Компонент ClientTable render');

        return(
            <table className='clients-table'>
                <tbody>
                    <tr className='table__head'>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Patronymic</td>
                        <td>Balance</td>
                        <td>Status</td>
                        <td>Edit</td>
                        <td>Delite</td>
                    </tr>
                    {users}
                </tbody>
            </table>
        )
    }
}

export default ClientsTable;