
import './App.css';
import UserForm from './components/UserForm/UserForm';
import {UserProvider} from './context/UserContext';

function App() {
  return (
    <>
    <UserProvider>
    <UserForm />
    </UserProvider>
    </>
  );
}

export default App;
