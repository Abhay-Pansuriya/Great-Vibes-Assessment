import React, { useState } from 'react'
import Modal from '../Common/Modal';
import DeleteAlert from '../Common/DeleteAlert';
const Card = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className='font-poppins font-medium'>
            <button className='bg-error' onClick={() => setModal(true)}>Delete</button>
            <Modal isOpen={modal} setIsOpen={setModal}>
                <DeleteAlert setIsOpen={setModal} />
            </Modal>
        </div>
    )
}

export default Card