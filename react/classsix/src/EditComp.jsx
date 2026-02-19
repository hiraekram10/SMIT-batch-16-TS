import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBookReader } from "react-icons/fa";

function EditComp({open,setOpen}) {
    console.log(open);
    
  return (
    <Modal
    show={open}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setOpen(false)}><FaBookReader /></Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default EditComp;