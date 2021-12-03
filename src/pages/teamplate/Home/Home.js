
// import {AuthStateChange, LogOutHandler, AuthHandle} from '../../../authHandler/AuthHandler';
// import {auth} from '../../../fb_auth/firebase-config';
import { useHistory } from 'react-router';
import {useAuth} from '../../../authContext/AuthContext'
function Home() {
  const {logout} = useAuth();
  let history = useHistory();
const handleLogout = () =>{
  logout()
  history.push('/login')
}
    return (
      <div className="App">
     Home
      <button onClick={handleLogout}>Logout</button> 
      </div>
    );
  }
  
  export default Home;