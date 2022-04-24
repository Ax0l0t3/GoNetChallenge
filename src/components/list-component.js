import React, {useEffect, useState} from 'react';
import '../stylesheets/list-component.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function clickMe() {
  console.log('Licked');
  // return (
    // <Modal
      // {...props}
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      // centered
    // >
      // <Modal.Header closeButton>
        // <Modal.Title id="contained-modal-title-vcenter">
          // Modal heading
        // </Modal.Title>
      // </Modal.Header>
      // <Modal.Body>
        // <h4>Centered Modal</h4>
        // <p>
          // Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          // dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          // consectetur ac, vestibulum at eros.
        // </p>
      // </Modal.Body>
      // <Modal.Footer>
        // <Button onClick={props.onHide}>Close</Button>
      // </Modal.Footer>
    // </Modal>
  // );
}

function List({addFavourites, removeFavourites, shows}){
  const [modalShow, setModalShow] = useState(false);
  return(
    <div className='list-container' >
      { !shows ? 'Cargando...' : shows.map(( show, index) => {
          return(
            <div key={index} className='show-container' >
              <img src={show.image.medium} />
              <Button variant="danger" onClick={clickMe}>{show.name}</Button>
              // <MyVerticallyCenteredModal
              // show={modalShow}
              // onHide={() => setModalShow(false)}
              // />
                {addFavourites ? <Button variant="primary" className='add' disabled={!addFavourites} onClick={() => addFavourites(show)}>Add</Button> :'' }
                {removeFavourites ? <Button variant="primary" className='add' onClick={() => removeFavourites(show)}>Remove</Button> :'' }
            </div>
          );
        })
      }
    </div>
  );
}

export default List;