import { useEffect } from "react";
import Modal from 'react-modal';
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const ModalPopup = ({setIsOpen, modalIsOpen, setValue}) => {

    let subtitle;


    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(e.target.inputData.value);
        setIsOpen(false);
    }

    useEffect(() => {
        setIsOpen(false);
    }, [setIsOpen])

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

                <form onSubmit={handleSubmit}>
                    <textarea placeholder="Ex :- Karim, John, Stracy (Separate with comma)" name="inputData" className="p-2 mt-4 border-2 w-full h-36" ></textarea>
                    <div className="flex justify-center mt-4">
                        <button className="btn bg-green-600 text-white">Submit <FaArrowRight /></button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

ModalPopup.propTypes = {
    modalIsOpen: PropTypes.bool,
    setIsOpen: PropTypes.bool,
    setValue: PropTypes.string
}

export default ModalPopup;