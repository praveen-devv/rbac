import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from './components/SideNavbar';
import { Provider } from 'react-redux';
import store from './redux/store'
import Login from './Pages/Login';
import CreateRole from './Pages/CreateRole';
import ListRoles from './Pages/ListRoles';
import UsersRole from './Pages/UsersRole';
import ViewAsset from './Pages/ViewAsset'
import CreateAsset from './Pages/CreateAsset'
import TableComponent from './components/TableComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <Routes>
              <Route path="/" element={<><TableComponent /> </>} />
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
