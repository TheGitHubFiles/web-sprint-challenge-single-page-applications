import React, { useState, } from 'react';
import axios from 'axios';
import './App.css';
import Form from './form.js'
import HomePage from './home.js'
import { Route } from 'react-router-dom'

function App() {
  const [order, setOrder] = useState([])



  const submit = e => {

    axios
      .post('https://reqres.in/api/users', e)
      .then(res => {
        setOrder([...order, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Route path='/pizza' >
          <Form submit={submit}></Form>
        </Route>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
      </div>
    </>

  )
}
export default App;