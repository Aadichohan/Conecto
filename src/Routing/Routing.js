// import {Routes as AppRoutes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/authpages/Login';
import Signup from '../pages/authpages/Signup';
import Home from '../pages/teamplate/Home/Home';
import { AuthProvider, useAuth } from '../authContext/AuthContext';
import PrivateRoute from './PrivateRoute';
// import ProtectedRoute from './ProtectedRoute';

const Routing = () =>{
  // const a = useAuth();
  const {isLoggedIn} = useAuth();
  console.log('A ',isLoggedIn)
  // let CUser = (a != undefined) ? a.currentUser : null; 

    //   const NavLogin = () => {
    // return <Navigate to="/login" />
    //   };
 return(
    <BrowserRouter>
    <AuthProvider >
       <Switch>
         {/* <Route path="/" element={CUser != null ? Home :<NavLogin/>} /> */}
         <PrivateRoute exact  path="/" component={Home}/>
         {/* <ProtectedRoute exact  path="/login" component={Login}/> */}
         {/* <Route exact path="/" component={Home} /> */}
         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
       </Switch>
     </AuthProvider>
     </BrowserRouter>
 )
}
export default Routing;