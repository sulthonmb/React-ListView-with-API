import React from 'react';

const status = props => {
    return <div>Hi, {props.isAuthenticated ? props.name : "User"}</div>;
}

export default status;