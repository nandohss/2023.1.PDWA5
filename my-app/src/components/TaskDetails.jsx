import React from "react";
import Button from './Button'
import { useParams } from 'react-router-dom';

const TaskDetails = () => {

    const params = useParams();

    console.log(params);

    return (
        <>
        <div classNAme="back-button-container">
            <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint tempora, hic numquam obcaecati beatae facilis nisi quidem quaerat dicta delectus facere ad expedita a quo ut ratione amet iure.
                </p>
            </div>
        </>
    );
};

export default TaskDetails;