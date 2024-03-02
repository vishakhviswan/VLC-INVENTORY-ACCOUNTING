// ********New**********
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SideBarContext } from "../store/SideMenuContext";

import "./Components.css";
function InventoryHomeMenu() {
  const { setShow } = useContext(SideBarContext);
  const { setCreate, setAlter, setList, setBook } = useContext(SideBarContext)
  const navigate = useNavigate()
  const handleAlert = () => alert("On Work Coming Soon");

  return (
    <div className="inventoryHomeMenu_Pd">
      <div className="inventoryHomeMenu_Cd">
        <Card
          bg="light"
          text="dark"
          style={{ width: "18rem", height: "max-content" }}
          className="mb-2"
        >
          <Card.Header style={{ textAlign: "center" }}>Go to</Card.Header>
          <Card.Body style={{ lineHeight: "10px" }}>
            <Card.Text className="text-Title">Master</Card.Text>
            <Card.Text
              className="text-items"
              onClick={() => {
                setCreate(true);
                setShow(true);
              }}
            >
              Create
            </Card.Text>
            <Card.Text
              className="text-items"
              onClick={() => {
                setAlter(true);
                setShow(true);
              }}
            >
              Alter
            </Card.Text>
            <Card.Text
              className="text-items"
              onClick={() => {
                setList(true);
                setShow(true);
              }}
            >
              List of Stock Items
            </Card.Text>
            <Card.Text className="text-Title">Transactions</Card.Text>
            {/* <Card.Text
              className="text-items"
              onClick={() => {
                navigate("/arrivedmaterials");
              }}
            >
              Arrivals
            </Card.Text>
            <Card.Text className="text-items">Despatch</Card.Text> */}

            <Card.Text
              className="text-items"
            >
              Materials In
            </Card.Text>

            <Card.Text
              className="text-items"
             
            >
              Materials Out
            </Card.Text>

            <Card.Text
              className="text-items"
            >
              Delivery Note
            </Card.Text>

            <Card.Text
              className="text-items"
            >
              Receipt Note
            </Card.Text>

            <Card.Text className="text-items" onClick={handleAlert}>
              Processing
            </Card.Text>
            <Card.Text className="text-Title">Reports</Card.Text>
            <Card.Text className="text-items" onClick={handleAlert}>
              Stock Summery
            </Card.Text>
            <Card.Text
              className="text-items"
              onClick={() => {
                setBook(true);
                setShow(true);
              }}
            >
              Inventory Books
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default InventoryHomeMenu;
