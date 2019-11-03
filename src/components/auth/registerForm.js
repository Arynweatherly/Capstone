import React, { Component} from "react"
import AuthManager from "../../modules/AuthManager"
import './login.css';
import Header from '../nav/header'

export default class UserForm extends Component {
    state = {
        username: "",
        password: "",
        name: "",
        users: []
    }
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    newUser = (e) => {
        e.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name
        }
        AuthManager.post("users", user).then(() => this.handleLogin())
     }



    render() {
        return (
<>
<Header />
<div className="box container login">
          <section className="is-centered">
            <p className="title is-4">Join Pass A Note:</p>
          </section>
          <form>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFieldChange}
                  type="text"
                  id="username"
                  placeholder="Username"
                  required=""
                  autoFocus=""
                />
                 </div>
            </div>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFieldChange}
                  type="password"
                  id="password"
                  placeholder="Password"
                  required=""
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input className="remember checkbox" type="checkbox"/>
                   Remember Me
                </label>
              </div>
            </div>

            <button type="button" className="button is-primary" onClick={this.newUser}>
              Sign In
            </button>
          </form>
        </div>
      </>
      )
    }
  }
