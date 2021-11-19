import {Link} from 'react-router-dom';

import './User.css';

export default function User({user}) {
    return (
            <Link to={{pathname: '/edit', state: user}} className={'wrap secondary_color user-info active'}>
                <div>{user.username}</div>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.email}</div>
                <div>{user.user_type}</div>
            </Link>
    );
}