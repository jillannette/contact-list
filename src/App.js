import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import ViewContact from './ViewContact'
import AddContact from './AddContact'
import ContactList from './ContactList'




function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Contact List App</h1>
         
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


 
   
        

  
    
    

