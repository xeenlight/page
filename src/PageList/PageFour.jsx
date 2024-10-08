import React from 'react';
import Button from '../Components/Button'; 
import { Header } from '../Components/Header';


const PageFour = () => {


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgoldenrodyellow', height: '100vh' }}>
            <Header 
            HeaderText="Page Four"
            />
            <Button 
             path="/page-five"
             label="Page Five"
            />
        </div>
    );
};

export default PageFour;
