import { useState } from "react";
import ModalPopup from "../components/ModalPopup";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState();
    const [randomValue, setRandomValue] = useState([]);

    function openModal() {
        setIsOpen(true);
    }



    const handleRandomize = () => {
        const randomizeValue = [];

        const valueInArray = value.split(",");
        const valueLength = valueInArray.length;

        while (randomizeValue.length < valueLength) {
            const randomNumber = Math.floor(Math.random() * valueLength);
            if (!randomizeValue.includes(valueInArray[randomNumber])) {
                randomizeValue.push(valueInArray[randomNumber]);
            }
        }
        console.log(randomizeValue);

        setRandomValue(randomizeValue);
    }

    return (
        <div className="mx-10">
            <div className="flex justify-center mt-10">
                <button onClick={openModal} className="btn bg-green-600 text-white">Enter Data</button>
            </div>
            <p className="text-center mt-4">Entered Data: {value}</p>

            <div className="bg-orange-200 rounded-3xl py-6 px-20 w-1/2 mx-auto mt-6">
                {
                    randomValue.map((data, index) => <div key={index}>{data}</div>)
                }
            </div>

            <div className="flex justify-center mt-6">
                <button onClick={handleRandomize} className="btn bg-green-600 text-white">Randomize</button>
            </div>
            {/* <CopyToClipboard text={value}>
                <button>Copy to clipboard with button</button>
            </CopyToClipboard> */}

            <ModalPopup
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                setValue={setValue}
            />
        </div>
    );
};

export default Home;