// ********New**********
import React from "react";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

import "./Components.css";
function InventorySideBar() {
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2 inventorySideBtn">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <div className="inventorySideBar_Pd">
      <div className="inventorySideBar_Cd">
        <OffCanvasExample placement="end" name="Vouchers" />
      </div>
    </div>
  );
}

export default InventorySideBar;
