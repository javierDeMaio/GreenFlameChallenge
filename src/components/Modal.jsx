import {Button , Modal} from 'react-bootstrap';
import {useState} from 'react';
import rate from './Input';


    function ModalUp(props) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
      
        return (
          <>
            <a style={{color: '#FF0000'}} onClick={handleShow}>
              Rate Incluions
            </a>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> Rate Inclusions</Modal.Title>
              </Modal.Header>
              <Modal.Body><li className="list-group-item border-0">a brief description of the large benefits that this car posses, however its under construction. thanks for the interest!</li></Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    } export default ModalUp;