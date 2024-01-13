import { useState } from "react";
import ModalPopup from "../components/ModalPopup";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from "react-icons/md";
import { element } from "prop-types";

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const [randomValue, setRandomValue] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

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

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        if (!isChecked) {
            const valueWithSerial = randomValue.map((currValue, index) => {
                if (!currValue.includes(`${index + 1}`)) {
                    return `${index + 1}. ${currValue}`;
                }
                return currValue;
            }
            );
            setRandomValue(valueWithSerial);
        } else {
            const valueWithOutSerial = randomValue.map((currValue, index) => {
                if (currValue.includes(`${index + 1}`)) {
                    return `${currValue.split('. ')[1]}`;
                }
                return currValue;
            }
            );
            setRandomValue(valueWithOutSerial);
        }
    }

    return (
        <div className="mx-10 overflow-y-auto">
            <div className="flex justify-center mt-10">
                <button onClick={openModal} className="btn bg-green-600 text-white">Enter Data</button>
            </div>
            {
                value.length > 0 &&
                <div className="bg-yellow-100 p-2 mt-6">
                    <p className="text-center">{value}</p>
                </div>
            }

            {
                randomValue.length > 0 &&

                <div className="drop-shadow-lg bg-orange-50 rounded-3xl p-6 w-1/2 mx-auto mt-6">
                    <div className="flex justify-between">
                        <div className="flex  gap-2 items-center">
                            <label htmlFor="checkbox">Add Serial Number</label>
                            <input name="serial" checked={isChecked} onChange={handleCheckboxChange} type="checkbox" id="checkbox" />
                        </div>
                        <div className="flex">
                            <CopyToClipboard text={randomValue}>
                                <button className="text-2xl "><MdContentCopy /></button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="divider"></div>
                    {
                        randomValue.map((data, index) => <div key={index}>{data}</div>)
                    }
                </div>
            }

            {
                value.length > 0 &&
                <div className="flex justify-center mt-6">
                    <button onClick={handleRandomize} className="btn bg-green-600 text-white">Randomize</button>
                </div>

            }

            <ModalPopup
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                setValue={setValue}
            />
        </div>
    );
};

export default Home;