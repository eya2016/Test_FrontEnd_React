import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const Login = () =>  {
export default class Login extends React.Component {

//  handleSignIn(event) {
    
//     event.preventDefault();
//     let username = this.refs.username.value;
//     let password = this.refs.password.value;
//     this.props.onSignIn(username, password);
//     console.log(" ===> eail :",username,"  ===> password :", password);
//     // this.props.onSignIn(username, password);
//     // const emailPattern = new RegExp(/test@test.com/);
//     // if(!emailPattern.test(email)){
//     //         test1=false;
//     // }
//     // const passwordPattern = new RegExp(/test/);
//     // if(!passwordPattern.test(password)){
//     //         test2=false;
//     // }
    
//     // this.props.onSignIn(username, password)
//     // return email.length > 0 && password.length > 0 && test1 && test2;
//   }

//   render() {
//     return (
//       <div className="Login">
//         <Form onSubmit={this.handleSignIn.bind(this)}>
//           <h3>Sign in</h3>
//           <Form.Group size="lg" controlId="email"> 
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//                 autoFocus
//                 type="email"
//                 ref="username" placeholder="enter you email"
//                 />
//               </Form.Group>
//               <Form.Group size="lg" controlId="email"> 
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//                 autoFocus
//                 type="password"
//                 ref="password" placeholder="enter your password"
//                 />
//               </Form.Group>
//             {/* <input type="submit" value="Login" /> */}
//             <Button block size="lg" type="submit" >
//                 Login
//             </Button>
//         </Form>
//       </div>
//     )
//   }

handleSignIn(e) {
  e.preventDefault()
  let username = this.refs.username.value
  let password = this.refs.password.value
  this.props.onSignIn(username, password)
}

render() {
  return (
    <form onSubmit={this.handleSignIn.bind(this)}>
      <h3>Sign in</h3>
      <input type="text" ref="username" placeholder="enter you username" />
      <input type="password" ref="password" placeholder="enter password" />
      <input type="submit" value="Login" />
    </form>
  )
}


}
// render() {
//   return (
//     <div className="Login">
//       {/* <Form onSubmit={handleSubmit}> */}
//       <form onSubmit= {this.handleSignIn.bind(this)} >
//         <Form.Group size="lg" controlId="email"> 
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             ref="username" placeholder="enter you email"
//             // value={email}
//             // onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             ref="password" placeholder="enter password"
//             // value={password}
//             // onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <input type="submit" value="Login" />
//         {/* <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button> */}
//         {/* <span>  {errorMessage } </span> */}
//       </form>
//     </div>
//   )}
// }

//export default Login;
