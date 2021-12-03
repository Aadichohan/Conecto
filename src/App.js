
import './App.css';
import Routing from './Routing/Routing';
// import {FBAuthHandler} from './authHandler/AuthHandler'
//  import { AuthProvider } from './authContext/AuthContext';
 import 'antd/dist/antd.css';
// import Signup from './pages/authpages/Signup';
function App() {
  // let returnAuth = FBAuthHandler();
  // let isAuth = AuthStateChange();
  //  console.log('App Auth ',returnAuth);

   return (
    <>
   {/* <AuthProvider > */}
       {/* <Signup />
   </AuthProvider> */}
    <Routing/>
    
    </>
  );
}

export default App;
