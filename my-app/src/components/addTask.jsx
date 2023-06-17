import React, { useState } from 'react';
import "./AddTask.css";
import Button from './Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = ({ handleTaskAddition }) => {


    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        if (inputData.trim() !== "") {
            handleTaskAddition(inputData);
            setInputData("");
        } else {
            toast.info("O campo não pode estar vazio!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>

        </div>
    );
};

export default AddTask;