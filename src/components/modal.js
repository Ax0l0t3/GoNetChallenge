import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../stylesheets/modal-container.css';

function ModalDetails(props) {
    const isFav = (show) => {
        const movie = props?.favourites.some(element => element.name === show.name);
        if(movie)
            return  <Button variant="primary" className='add' onClick={() => props?.removeFavourites(show)}>Remove</Button>
        
        return  <Button variant="primary" className='add' onClick={() => props?.addFavourites(show)}>Add</Button>
    };

    return (
      <Modal className='modal-container'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props?.info?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props?.info?.image?.original} className='image-original-container'/>
          <p dangerouslySetInnerHTML={{__html: props?.info?.summary}}>
          </p>
          {
              props?.info?.url ? <small onClick={() =>  window.open(props?.info?.url, '_blank')}>{props?.info?.externals?.imdb}</small> : ''
          }
          {isFav(props?.info)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalDetails;