import logo from './logo.svg';
import './App.css';
import TelaDeLogin from './views/LoginPage.js';
import NavBAr from './components/NavBar.js';
import Card from './components/Card.js'
import Grid from '@mui/material/Grid'


function App() {
  return (
    <>
    <TelaDeLogin/>
    </>
  );
}
/*
Aqui podem ser renderizados as telas, conforme as rotas
const routes = [{
  path: '/login',
    name: 'Login',
    component: LoginPage,
    layout: '/auth',
},...] 
    
          <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Route path="/admin" component={AdminLayout} />
            <Redirect from="*" to="/auth" />
          </Switch>
*/
export default App;
