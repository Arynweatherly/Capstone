import React, { Component} from "react"
import AuthManager from "../../modules/AuthManager"
import './login.css';

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


// getData = e => {
//     // console.log(this.state.users)
//     AuthManager.getAll("users").then(users => {
//         users.map(user=> {
//             if(user.username !== this.state.username){
//                 return false
//             } else {
//                 return true
//             }
//         })
//           this.setState({
//             users: users
//           });
//         })
//       };
    
//       componentDidMount() {
//         this.getData();
//       }

    render() {
        return (

            <form>
                <div className="box">
                    <fieldset className="bod">
                    <h3 className="loginHeader">Join Pass A Note:</h3>
                    <div className="formgrid">
                        <input className="username" onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                        <label htmlFor="inputUsername"></label>

                        <input className="password" onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword"></label>
                        <button type="button" className="signIn" onClick={this.newUser}>
                            Sign Up
                        </button>
                    </div>
            </fieldset>
            </div>
            </form>

)}}