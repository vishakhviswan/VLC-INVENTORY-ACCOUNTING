import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/Context";

function NavbarHeader() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const auth = getAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Prakash Exports</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              alert("Coming Soon (Work on Progress)");
            } }>Accounting</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/inventory')
            }}>Inventory</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
            <Nav.Link
              value="Login"
              onClick={() => {
                if (user) {
                } else {
                  navigate("/");
                }
              }}
            >
              {user ? `Hello, ${user.displayName}` : "Login"}
            </Nav.Link>
            {user && (
              <Nav.Link
                href="#pricing"
                onClick={() => {
                  signOut(auth).then(() => {
                    navigate("/");
                  });
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
