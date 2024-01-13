import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


Modal.setAppElement('#root');

const ModalPopup = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }



    useEffect(() => {
        openModal();
    }, [])

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="w-1/2 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 outline-none drop-shadow-xl border-gray-200  p-4 rounded-2xl"
            >

                <div className="flex justify-end">
                    <button className="text-3xl " onClick={() => closeModal()}><IoIosCloseCircle /></button>
                </div>

                <div className="mt-4">
                    <h2 className="text-3xl text-center">Please Enter Your Data</h2>
                </div>

                <form>
                   <textarea className="mt-4 border-2 w-full h-36" ></textarea>
                  <div className="flex justify-center mt-4">
                  <button className="btn bg-green-600 text-white">Submit <FaArrowRight /></button>
                  </div>
                </form>
            </Modal>
        </div>
    );
};

export default ModalPopup;