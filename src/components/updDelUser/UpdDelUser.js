import {useEffect, useState} from 'react';
import {deleteUser, updateUser} from '../../services/user.api';

export default function UpdDelUser(props) {
    const {location: {state}} = props;
    const [user, setUser] = useState({...state});

    useEffect(()=>{
        setUser({...state});
    }, [state]);

    const onFormInputChange = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.value});
    }

    function selectUserType({target}) {
        setUser({...user, user_type: target.value});
    }

    const deleteSelectedUser = () => {
        deleteUser(user._id);
    }

    const updateSelectedUser = async () => {
        const {username, first_name, last_name, email, user_type, password} = user;
        const usr = await updateUser({username, first_name, last_name, email, user_type, password}, user._id);
        console.log(usr);
    }

    return (
        <div>
            <form onChange={onFormInputChange} className={'wrap-col main-container primary_color p26 w300'}>
                <h3>{user.first_name} {user.last_name}</h3>

                <label htmlFor="username">Username</label>
                <input type="text" id={'username'} name={'username'} className={'active'}
                       defaultValue={user.username}
                       value={onFormInputChange.username}
                       onChange={onFormInputChange}
                       minLength={2}
                       maxLength={20}
                />

                <label htmlFor="first_name">First name</label>
                <input type="text" id={'first_name'} name={'first_name'} className={'active'}
                       defaultValue={user.first_name}
                       value={onFormInputChange.first_name}
                       onChange={onFormInputChange}
                       minLength={2}
                       maxLength={20}
                />

                <label htmlFor="last_name">Last name</label>
                <input type="text" id={'last_name'} name={'last_name'} className={'active'}
                       defaultValue={user.last_name}
                       value={onFormInputChange.last_name}
                       onChange={onFormInputChange}
                       minLength={2}
                       maxLength={20}
                />

                <label htmlFor="email">Email</label>
                <input type="email" id={'email'} name={'email'} className={'active'}
                       defaultValue={user.email}
                       value={onFormInputChange.email}
                       onChange={onFormInputChange}
                />

                <label htmlFor="user_type">Type</label>
                <select name="user_type" id="user_type" defaultValue={'Driver'}  className={'active'} onChange={selectUserType}>
                    <option value={'Admin'}>Admin</option>
                    <option value={'Driver'}>Driver</option>
                </select>

                <label htmlFor="password">Password</label>
                <input type="password" id={'password'} name={'password'} className={'active'}
                       value={onFormInputChange.password}
                       onChange={onFormInputChange}
                />

                <div className={'wrap space-btw mt20'}>
                    <button onClick={deleteSelectedUser} className={'red-bg red-shadow-min'}>Delete</button>
                    <button onClick={updateSelectedUser} className={'blue-bg blue-shadow'}>Save</button>
                </div>
            </form>
        </div>
    );
}