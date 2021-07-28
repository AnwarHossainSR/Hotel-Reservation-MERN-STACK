import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

const Room = ({ room }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" key={room.id} />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <p>Max Count : {room.maxcount}</p>
        <p>Phone Number : {room.phonenumber}</p>
        <p>Type : {room.type}</p>
        <div style={{ float: "right" }}>
          <button className="btn btn-dark" style={{ marginRight: "8px" }}>
            Book Now
          </button>
          <button className="btn btn-dark" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='' nextLabel=''>
            {room.imageurls.map((url, i) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="slide"
                    Key={i}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
