import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { Button, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import { TopBarContext } from "../store/ArrivalsContext";
import { AuthContext, FirebaseContext } from "../store/Context";

function CkArrival() {
    const [bags, setBags] = useState("");
    const [value, setValue] = useState(0.00)
  const [currentValue, setCurrentValue] = useState(0);
  const [wholes, setWholes] = useState();
  
    const FindPound = (value) => {
        const Pound = (value * 2.2 )/ bags;
        setValue( parseFloat(Pound).toFixed(2)) 
    }
    
  
//   const wholesPound = (wholes * 2.2) / bags;
//   const wholesWithTwoDecimalPlaces = parseFloat(wholesPound).toFixed(2); 

    const [pieces, setPieces] = useState();
  const [pwl, setPwl] = useState();
  const [rej, setRej] = useState();
  const [impOrLoc, setImpOrLoc] = useState("");
  const [origin, setOrigin] = useState("");
  const { recived, date, lot, validated, setValidated,recivedFrom } =
    useContext(TopBarContext);
  const {db} = useContext(FirebaseContext)
  const {userDetails} = useContext(AuthContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) { 
      const StockItemRef = collection(db, "Stock Items");
       setDoc(doc(StockItemRef), {
         //,general
         arrivedFrom: recivedFrom,
         factory: userDetails.company,
         itemName: recived,
         Grades: [
           {
             grade: "Wholes",
             quantity: wholes,
             poundPerBag: parseFloat((wholes * 2.2) / bags).toFixed(2),
           },
           {
             grade: "Pieces",
             quantity: pieces,
             quantity: wholes,
             poundPerBag: parseFloat((pieces * 2.2) / bags).toFixed(2),
           },
           {
             grade: "Pwl",
             quantity: pwl,
             quantity: wholes,
             poundPerBag: parseFloat((pwl * 2.2) / bags).toFixed(2),
           },
           {
             grade: "Rej",
             quantity: rej,
             quantity: wholes,
             poundPerBag: parseFloat((rej * 2.2) / bags).toFixed(2),
           },
         ],
         lot: lot,
         importOrLocal: impOrLoc,
         origin: origin,
         cuttingBags: bags,
       }).catch((e) => {
         console.log(e);
         alert("error", e);
       })
    }

  }

  const [preview, setPreview] = useState([])
  const [show,setShow]= useState(false)
  const handlePreview = () => {
    setPreview([
      {
        title: "Recived Item",
        name: recived,
      },
      { title: "Recived From", name: recivedFrom },
      { title: "Lot #", name: lot },
      { title: "Date", name: date },
      { title: "Import/Local", name: impOrLoc },
      { title: "Origin", name: origin },
      { title: "Bags", name: bags },
      { title: "Wholes", name: wholes },
      { title: "Pieces", name: pieces },
      { title: "Total", name: wholes + pieces },
      { title: "Pwl", name: pwl },
      { title: "Rej", name: rej },
      { title: "Total", name: wholes + pieces + pwl +rej },
    ]);
    setShow(true)
  }
console.log(preview);
  return (
    <div>
      <div className="ck_ChildDiv">
        <Container className="rcnFormContainer">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Check
                  // value={impOrLoc}
                  required
                  value="local"
                  onChange={(e) => {
                    setImpOrLoc(e.target.value);
                  }}
                  name="group1"
                  type="radio"
                  id="radioBtn"
                  label="Local"
                />
                <Form.Check
                  required
                  // value={impOrLoc}
                  onChange={(e) => {
                    setImpOrLoc(e.target.value);
                  }}
                  value="imported"
                  name="group1"
                  type="radio"
                  id="radioBtn"
                  label="Imported"
                />
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridPlace">
                  <Form.Label>Orgin</Form.Label>
                  <Form.Control
                    required
                    value={origin}
                    onChange={(e) => {
                      setOrigin(e.target.value);
                    }}
                    type="place"
                    placeholder="Enter origin"
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Col} controlId="formGridPlace">
                  <Form.Label>Bags</Form.Label>
                  <Form.Control
                    required
                    value={bags}
                    onChange={(e) => {
                      setBags(parseInt(e.target.value));
                    }}
                    type="place"
                    placeholder="bags"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPlace">
                <Form.Label>Wholes</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => {
                    setWholes(parseFloat(e.target.value));
                  }}
                  type="place"
                  placeholder="Wholes in kgs"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInvoice">
                <Form.Label>Pound per bag</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  placeholder={
                    bags
                      ? parseFloat((wholes * 2.2) / bags).toFixed(2)
                      : "Enter Number Of bags for show pound!"
                  }
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPlace">
                <Form.Label>Pieces</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => {
                    setPieces(parseFloat(e.target.value));
                  }}
                  type="place"
                  placeholder="pieces in Kgs"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInvoice">
                <Form.Label>Pound per bag</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  placeholder={
                    bags
                      ? parseFloat((pieces * 2.2) / bags).toFixed(2)
                      : "Enter Number Of bags for show pound!"
                  }
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridOuturn">
                <Form.Label>Pwl</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => {
                    setPwl(parseFloat(e.target.value));
                  }}
                  placeholder="Pwl in Kgs"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridAddress2"
              >
                <Form.Label>Pound per bag</Form.Label>
                <Form.Control
                  disabled
                  placeholder={
                    bags
                      ? parseFloat((pwl * 2.2) / bags).toFixed(2)
                      : "Enter Number Of bags for show pound!"
                  }
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridOuturn">
                <Form.Label>Rej</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => {
                    setRej(parseFloat(e.target.value));
                  }}
                  placeholder="Rejection in Kgs"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridAddress2"
              >
                <Form.Label>Pound per bag</Form.Label>
                <Form.Control
                  disabled
                  placeholder={
                    bags
                      ? parseFloat((rej * 2.2) / bags).toFixed(2)
                      : "Enter Number Of bags for show pound!"
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox ">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button variant="warning" onClick={handlePreview}>
                Preview
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
        {/* ***************************modal***************************************** */}

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Please Check Your Details are Correct
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <tbody>
                {preview.map((obj) => (
                  <tr>
                    <th>{obj.title}</th>
                    <td>{obj.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default CkArrival;
