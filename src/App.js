import React, { useState, useEffect} from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Form from './components/Form'
import axios from 'axios'
import './App.css'
import * as yup from 'yup'
import Home from './components/Home'
import Navigating from './components/Navigating'
import Confirmation from './components/Confirmation'




const defaultForm ={
  name: '',
  size: '',
  pepperoni: '',
  sausage: '',
  Pineapple: '',
  Mushroom: '',
  specialInstructions: '',
}


const App = () => {
  const [form,setForm]= useState();
  const [pizza,setPizza] = useState([]);
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(defaultForm)

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>THIS IS WHERE I NEED TO START PASTING THINGS</p>
        <div>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/pizza">
                <Form
                  values={formValues}
                  change={handleChange}
                  submit={formSubmit}
                  disabled={disabled}
                  errors={errors} />
              </Route>

              <Route exact path="/confirmation">
                {pizza.map(confirmation => {
                  return (
                    <Confirmation key={confirmation.id} details={confirmation} />
                      )
                    })}
              </Route>
            </Switch>
          </Router>

        </div>
    </>
  );
};
export default App;
