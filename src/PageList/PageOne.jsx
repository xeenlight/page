import React from 'react';
import Button from '../Components/Button'; 
import { Header } from '../Components/Header';

const PageOne = () => {


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', height: '100vh' }}>
            <Header 
            HeaderText="Page One"
            />
            <Button 
             path="/page-two"
             label="Page Two"
            />

        </div>
    );
};

export default PageOne;
