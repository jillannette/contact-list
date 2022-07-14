import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import ViewContact from './ViewContact'
import AddContact from './AddContact'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Contact List App</h1>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/addContact'>Add Contact</a>
          </li>
          <li>
            <a href='/viewContact'>View Contact</a>
          </li>
        </ul>
         
      </div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/viewContact' component={ViewContact}/>
      <Route path='/addContact' component={AddContact}/>
      </Switch> 
      </BrowserRouter> 

      
     
        
    
     )
    }
    export default App   


 
   
        

  
    
    

