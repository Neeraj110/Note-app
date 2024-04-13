import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import ErrorMessage from "../../components/Error/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import "./login.css";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //  userInfo = localStorage.getItem("userInfo");
  
  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };
  //     setLoading(true);
  //     const { data } = await axios.post(
  //       "/api/users/login",
  //       {
  //         email,
  //         password,
  //       },
  //       config
  //     );
  //     localStorage.setItem("userInfo", JSON.stringify(data));
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.response.data.message);
  //     setLoading(false);
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ?{" "}
            <Link style={{ color: "red" }} to="/register">
              Register Here
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default LoginScreen;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function LoginScreen() {
//   const [notes, setNotes] = useState([]);

//   const fetchData = async () => {
//     await axios.get("/api/notes").then((res) => {
//       setNotes(res.data);
//     });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>hello</h1>
//       {notes.map((note) =>
//       (
//         <ul key={note._id}>
//           <li>{note.title}</li>
//           <li>{note.content}</li>
//           <li>{note.category}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default LoginScreen;
