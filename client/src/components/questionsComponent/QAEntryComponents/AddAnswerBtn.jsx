import React, { useRef } from 'react';
import Modal from '../Modal.jsx';
import AddAnswer from '../ModalViews/addAnswerView.jsx';

const AddAnswerBtn = ({productInfo, question }) => {
  const modal = useRef(null);
  const handleClose = (e) => {
    modal.current.close()
  }

  return (
    <>
     <span className="QA-entry-add-answer-btn"  onClick={e => modal.current.open()} role="button">Add Answer</span>
      <Modal ref={modal} >
        <AddAnswer productInfo={productInfo} question={question} close={() => {
          modal.current.close()
        }}/>
      </Modal>
    </>
  )
}

export default AddAnswerBtn;