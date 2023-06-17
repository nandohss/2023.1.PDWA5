import React from "react";
import Button from './Button';
import { useHistory, useParams } from 'react-router-dom';


import './TaskDetails.css'

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};

    return (
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint tempora, hic numquam obcaecati beatae facilis nisi quidem quaerat dicta delectus facere ad expedita a quo ut ratione amet iure.
                </p>
            </div>
        </>
    );
};

export default TaskDetails;