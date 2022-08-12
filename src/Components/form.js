import React from 'react';

const Center = () => {
    return (
        <>
        <h1> <i>This is a basic form</i></h1>
        <form>
            <label>First name:</label><br></br>
            <input type="text" id="fname" name="fname"></input><br></br>
            <label>Email:</label><br></br>
            <input type="text" id="email" name="email"></input><br></br>
            <label>Password:</label><br></br>
            <input type="text" id="password" name="password"></input><br></br>
            <input type="Submit" value="Submit"></input>
        </form>
        </>
    )
};

export default Center;