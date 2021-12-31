import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from './components/SideNavbar';
import { Provider } from 'react-redux';
import store from './redux/store'
// import Login from './Pages/Login';
import CreateRole from './Pages/CreateRole';
import ListRoles from './Pages/ListRoles';
import UsersRole from './Pages/UsersRole';
import ViewAsset from './Pages/ViewAsset'
import UsersList from './Pages/UsersList'
import AddUserForm from './Pages/AddUserForm';
import EditUserForm from './Pages/EditUserForm';
import CreateAsset from './Pages/CreateAsset'
import SuccessSnackbar from './components/SuccessSnackbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <SuccessSnackbar />
            <Routes>
              <Route path="/" element={<><SideNavbar /><UsersList /> </>} />
              <Route path="/user" element={<><SideNavbar /><UsersList /> </>} />
              <Route path="/user/create" element={<><SideNavbar /><AddUserForm /> </>} />
              <Route path="/user/edit" element={<><SideNavbar /><EditUserForm /> </>} />
              <Route path="/asset" element={<><SideNavbar /><ViewAsset /></>} />
              <Route exact path="/asset/create" element={<><SideNavbar /><CreateAsset /></>} />
              <Route path="/roles" element={<><SideNavbar /> <ListRoles/></>} />
              <Route exact path="/roles/create" element={<><SideNavbar /> <CreateRole /></>} />
              <Route exact path="/roles/users" element={<><SideNavbar /> <UsersRole /></>} />
            </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
