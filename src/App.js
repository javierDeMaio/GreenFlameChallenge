import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NabVar/NabVar';
import ItemListContainer from './components/NabVar/ItemListContainer';

import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <>
    <NabVar/>
    <div>
    <Switch>
          <Route exact path='/'>   
            <ItemListContainer/>   
          </Route>
          <Route exact path='/categories/:idGroup' component={ItemListContainer}/>
    </Switch>
    </div>
    </>
    </BrowserRouter>
  )
  }
export default App;
