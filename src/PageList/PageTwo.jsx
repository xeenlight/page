import React from 'react';
import Button from '../Components/Button'; 
import { Header } from '../Components/Header';

const PageTwo = () => {


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen', height: '100vh' }}>
            <Header 
            HeaderText="Page Two"
            />
            <Button 
             path="/page-three"
             label="Page Three"
            />
        </div>
    );
};

export default PageTwo;
