import { useState } from "react";
import ModalPopup from "../components/ModalPopup";

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState();

    function openModal() {
        setIsOpen(true);
    }


    
    return (
        <div className="">
            <div className="flex justify-center mt-10">
                <button onClick={openModal} className="btn bg-green-600 text-white">Enter Data</button>
            </div>
            <p>{value}</p>
            <ModalPopup
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                setValue={setValue}
            />
        </div>
    );
};

export default Home;