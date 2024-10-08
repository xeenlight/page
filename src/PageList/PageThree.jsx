import React from 'react';
import Button from '../Components/Button'; 
import { Header } from '../Components/Header';

const PageThree = () => {


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightcoral', height: '100vh' }}>
            <Header 
            HeaderText="Page Three"
            />
            <Button 
             path="/page-four"
             label="Page Four"
            />
        </div>
    );
};

export default PageThree;
