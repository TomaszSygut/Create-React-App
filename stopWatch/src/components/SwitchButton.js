import React from 'react';


const SwitchButton = props => (
    <button onClick={props.click}> {props.active ? "stop" : "start"}</button>
)

export default SwitchButton