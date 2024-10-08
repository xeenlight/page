import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ label, path }) => {
    const navigate = useNavigate();

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150px', 
        height: '40px', 
        backgroundColor: '#ffff',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: "20px",
        marginLeft: "10px"
    };

    return (
        <button style={buttonStyle} onClick={() => navigate(path)}>
            {label}
        </button>
    );
};

export default Button;
