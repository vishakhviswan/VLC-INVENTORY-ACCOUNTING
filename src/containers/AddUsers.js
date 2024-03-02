
import React, { useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// fire base related###abcd####################################################
import { FirebaseContext } from "../store/Context";
import { collection, setDoc, doc } from "firebase/firestore";

function AddUsers() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [id] = useState()

  // fire base related#######################################################
  const auth = getAuth();
  const { db } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
           const usersRef = collection(db, "users");
          setDoc(doc(usersRef, result.user.uid), {
             id: result.user.uid,
            username: userName,
            designation: designation,
            company: company,
            email: email,
            mobile: mobile,
           });

        })
        .then((result) => {
          updateProfile(auth.currentUser, { displayName: userName });
          console.log("result", id);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, "Message:", errorMessage);
          console.log(errorMessage, errorCode);
        })
        .then(() => {
          navigate("/userslist");
        });
    } else {
      alert("Password and Confirm Password not Same");
    }
  };

  return (
    <div className="addUsers_ParentDiv">
      <div className="addUsers_ChildDiv">
        <Container>
          <div className="signupFormDiv">
            <div className="formHeading">
              <h3>Add Users</h3>
              <hr />
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of the User</Form.Label>
                <Form.Control
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Designation</Form.Label>
                <Form.Select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  size="sm"
                >
                  <option>Select One</option>
                  <option>Factory Manager</option>
                  <option>Factory Clerk</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Company</Form.Label>
                <Form.Select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  size="sm"
                >
                  <option>Select One</option>
                  <option>Diwancheruvu</option>
                  <option>Namavaram</option>
                  <option>Vadisaleru</option>
                  <option>Tuni</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile #</Form.Label>
                <Form.Control
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  placeholder="Enter Mobile Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  type="text"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default AddUsers;
