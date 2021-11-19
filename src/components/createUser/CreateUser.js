import {useState} from 'react';
import {createUser} from '../../services/user.api';

export default function CreateUser() {
    const [formState, setFormState] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        user_type: '',
        password: ''
    });

    const onFormInputChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value});
    }

    function selectUserType({target}) {
        setFormState({...formState, user_type: target.value});
    }

    const createNewUser = async () => {
            const user = formState;
            await createUser(user).then();
    }

    return (
        <div>
            <form className={'wrap-col main-container primary_color p26 w300'}>
                <h3>Create new user</h3>

                <label htmlFor="username">Username</label>
                <input type="text" id={'username'} name={'username'} className={'active'}
                       value={onFormInputChange.username}
                       onChange={onFormInputChange}
                       minLength={2}
                       maxLength={20}
                       required/>

                <label htmlFor="first_name">First name</label>
                <input type="text" id={'first_name'} name={'first_name'} className={'active'}
                       value={onFormInputChange.first_name}
                       onChange={onFormInputChange}
                       minLength={2}
                       maxLength={20}
                       required/>

                <label htmlFor="last_name">Last name</label>
                <input type="text" id={'last_name'} name={'last_name'} className={'active'}
                       value={onFormInputChange.last_name}
                       onChange={onFormInputChange}
                       minLength={2}
                       maxLength={20}
                       required/>

                <label htmlFor="email">Email</label>
                <input type="email" id={'email'} name={'email'} className={'active'}
                       value={onFormInputChange.email}
                       onChange={onFormInputChange}
                       required/>

                <label htmlFor="user_type">Type</label>
                <select name="user_type" id="user_type" defaultValue={'Driver'} onChange={selectUserType}
                        className={'active'} required>
                    <option value={'Admin'}>Admin</option>
                    <option value={'Driver'}>Driver</option>
                </select>

                <label htmlFor="password">Password</label>
                <input type="password" id={'password'} name={'password'} className={'active'}
                       value={onFormInputChange.password}
                       onChange={onFormInputChange}
                       required/>

                <div>
                    <button onClick={createNewUser} className={'blue-bg blue-shadow mt20'}>Create</button>
                </div>

            </form>
        </div>
    );
}