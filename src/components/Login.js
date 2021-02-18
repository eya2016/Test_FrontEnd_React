import React, { useState, useEffect  } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = ({logged}) => {

  //utilisation des hooks pour la aj des variables d'accès
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  let history = useHistory();

  // Traiter l'évènement login
  const handleSubmit = async e => {
    e.preventDefault();
    // recuper les donner (username and password)
    let userInput = { username, password };

    // set the state of the user
    setUser(userInput);

    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    
    if(username=="test@test.com" && password=="test"){
      logged= true;
      history.push("/"); 
    }
  };


  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
             type="password"
             value={password}
             placeholder="enter a password"
             onChange={({ target }) => setPassword(target.value)}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
      </Form>
    </div>
  )
}

export default Login;
