import './App.css';
import { Route} from "react-router-dom";
import { useState } from 'react';
import MainNavigation from './shared/Navigation/MainNavigation/MainNavigation';
import Users from './user/pages/Users';
import NewUser from './places/pages/New-User';
import UserPlaces from './places/pages/UserPlaces';
import AddPlace from './places/pages/AddPlace';
import AuthPage from './Auth/AuthPage/AuthPage';
import { AnimatePresence, motion } from 'framer-motion';
import PrivateRoute from './Auth/PrivateRoute';
import PageUnderContruction from './shared/components/PageUnderConstruction/PageUnderContruction';
import Internal from './shared/Navigation/Internal/Internal';
import { type } from 'os';


type ILogin = {
  isLogin: boolean
};

function App() {
 
  const [isLogin, setIsLogin] = useState<ILogin>({isLogin:false});

  const handlerLogin = () => {
    console.log("ACTIVADO")
    setIsLogin({isLogin:true})
  }


  return <div className="App">
    <AnimatePresence>
      <Route exact path="/"  >
        <Page isLogin={isLogin.isLogin}></Page>
      </Route>

      <Route exact path="/users" >
        <Page isLogin={isLogin.isLogin}> <Users/> </Page>
      </Route>
      
      <Route exact path="/internal">
        <Page isLogin={isLogin.isLogin}><Internal/></Page>
      </Route>

      <PrivateRoute exact path="/users/new" >
        <Page isLogin={isLogin.isLogin}> <NewUser /> </Page>
      </PrivateRoute>

      <PrivateRoute path="/:userId/places/new" >
        <Page isLogin={isLogin.isLogin}> <AddPlace /> </Page>
      </PrivateRoute>

      <Route path="/:userId/places/:placeId?" >
        <Page transparentMain isLogin={isLogin.isLogin}> <UserPlaces /></Page>
      </Route>

      <Route path="/auth" >
        <Page transparentMain isLogin={isLogin.isLogin}><AuthPage handlerLogin={handlerLogin}/></Page>
      </Route>
    </AnimatePresence>
    <PageUnderContruction/>
  </div>
}

const Page: React.FC<ILogin&{transparentMain?: boolean}> = (props) => {
  const {isLogin} = props
  

  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{height: '100vh'}}
  >

    {props.transparentMain ?
      <>
        <MainNavigation isLogin={isLogin} style={{ backgroundColor: 'rgba(30,30,30,0.5)' }} />
        {props.children}
      </> :
      <>
        <MainNavigation isLogin={isLogin}/>
        <main>
          {props.children}
        </main>
      </>
    }
    
  </motion.div>
}

export default App;
