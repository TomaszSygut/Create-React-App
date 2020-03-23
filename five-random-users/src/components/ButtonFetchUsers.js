import React from 'react'
import './App.css';

const ButtonFetchUsers = props => {
    return (
        <button style={{

            padding: '10px 20px',
            border: '2px solid black',
            backgroundColor: 'white',
            margin: 20
        }} onClick={props.click}>Dodaj użytkownika</button>
    )
}

export default ButtonFetchUsers;
