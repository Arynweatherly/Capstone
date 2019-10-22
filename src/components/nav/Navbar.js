import React, { Component } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import './Navbar.css'

class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  };

  render(){

    return (
      <header>
        <h1 className="site-title">Pass A Note<br />
          <small>The easiest way to share notes online</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/notebooks">Notebooks</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/tasks">Tasks</Link></li>
            <li>Dates</li>
            <li>Friends</li>
            <li className='nav-item'>
							<button size='small' onClick={this.handleLogout}>Logout</button>
						</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter (NavBar);

// import React, { Component } from "react";
// import { Link, withRouter, Redirect } from "react-router-dom";
// import "./Navbar.css";

// class NavBar extends Component {
//   handleLogout = () => {
//     this.props.clearUser();
//     this.props.history.push("/");
//   };

//   render() {
//     return (
//       <header>
//         <div id="headerimage">
//           <h1 className="site-title">
//             Pass A Note
//             <br />
//             <small>Share your classnotes!</small>
//           </h1>
//         </div>

//         <nav>
//           <ul className="container">
//             {this.props.user ? (
//               <li>
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//             ) : (
//               <Redirect to="/auth" />
//             )}
//             {this.props.user ? (
//               <li>
//                 <Link className="nav-link" to="/friends">Classmates</Link>
//               </li>
//             ) : (
//               <Redirect to="/auth" />
//             )}
//             {this.props.user ? (
//               <>
//                <li>
//                   <Link className="nav-link" to="/notebooks">Notebooks</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/dueDates">Due-Dates</Link>
//                 </li>

//                 <li>
//                   <Link className="nav-link" to="/tasks">Tasks</Link>
//                 </li>

//               	<li className='nav-item'>
// 							<button size='small' onClick={this.handleLogout}>
// 								Logout
// 							</button>
// 						</li>
//               </>
//             ) : null}
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }

// export default withRouter(NavBar);
