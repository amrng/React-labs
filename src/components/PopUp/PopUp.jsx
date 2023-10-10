import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PopUp(props) {
  const { sharelink } = props;
    return (
     <>
      <Modal {...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			top>

        <Modal.Header className="bg-dark border-3 border-black">
          <Modal.Title id="contained-modal-title-vcenter" className='text-white mx-auto'>Share Link</Modal.Title>
        </Modal.Header>

        <Modal.Body className='text-white bg-dark py-4 text-center '>
          <h5 className='pb-3'>Heeey, share link with your friends and have fun !</h5>
          <p>{ sharelink }</p></Modal.Body>

        <Modal.Footer className='bg-dark border-3  border-black'>
          <Button className="btn btn-info fw-bold mx-auto" onClick={props.onHide}>
					Close
				</Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
