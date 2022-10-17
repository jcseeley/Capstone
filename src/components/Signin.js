import React from "react";
import firebase from "firebase/compat/app";
import { Route } from "react-router";

function Signin(){
  function signUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      <Route exact path="/">
        {}
      </Route>
    })
  }
}

export default Signin;