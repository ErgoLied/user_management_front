import {Link, Route, Switch} from 'react-router-dom';

import './App.css';
import Users from './components/users/Users';
import CreateUser from './components/createUser/CreateUser';
import UpdDelUser from './components/updDelUser/UpdDelUser';

function App() {
    return (
        <div>
            <Link to={'/create'}>
                <button className={'blue-bg blue-shadow mb16 ali-right'}>Create User</button>
            </Link>

            <div className={'wrap'}>
                <Users/>

                <Switch>
                    <Route path={'/create'} component={CreateUser}/>
                    <Route path={'/edit'} component={UpdDelUser}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
