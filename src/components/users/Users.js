import './Users.css';
import {useEffect, useState} from 'react';
import {getUsers} from '../../services/user.api';
import User from '../user/User';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    return (
        <div className={'main-container primary_color'}>
            <div className={'wrap header'}>
                <div>username</div>
                <div>first name</div>
                <div>last name</div>
                <div>email</div>
                <div>type</div>
            </div>

            {users.map(value => <User key={value._id} user={value}/>)}
        </div>
    );
}