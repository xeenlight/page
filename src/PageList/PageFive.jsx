import React from 'react';
import Button from '../Components/Button'; 
import { Header } from '../Components/Header';

const PageFive = () => {


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray', height: '100vh' }}>
            <Header 
            HeaderText="Page Five"
            />
            <Button 
             path="/"
             label="Page One"
            />
        </div>
    );
};

export default PageFive;
