// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../utils/firebase';
import { Button, Form, Input } from 'semantic-ui-react'

//import { Button, TextInput } from 'react-desktop/macOs';
import styles from './Mymenu.css';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;
  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.email.value, this.pw.value).catch(error => {
      this.setState({loginMessage: 'Invalid username/password.'})
    })
  }
  render() {
    console.log('[Login.js]','render', this, this.props);
    return (
      <div className={styles.login}>
         <h1> Login </h1>
         <form onSubmit={this.handleSubmit}>
           <div>
             <label>ID &nbsp;&nbsp;</label>
             <input ref={(email) => this.email = email} placeholder="Email"/>
           </div>
           <div>
             <label>PW &nbsp;&nbsp;</label>
             <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
           </div>
           <button type="submit">Login</button>
         </form>
       </div>  
    );
  }
}

{/** 
<TextInput
            placeholder="email"
            defaultValue=""
            width = "300px"
            ref={(email) => this.email = email}
            onChange={this.handleChange}
             />
          </div>
            Type in your password
            <TextInput
            type="password"
            placeholder="password"
            defaultValue=""
            width = "300px"
            ref={(pw) => this.pw= pw}
          />

          <Button color="gray" onClick={() => console.log('Clicked!')} size="20" paddingLeft="20px" paddingRight="20px" margin="20px" type="submit">
          Log in
          </Button>
<input ref={(email) => this.email = email} placeholder="Email"/>
<input type="password" placeholder="Password" ref={(pw) => this.pw = pw} /> */}
