import React from 'react';

const Center = () => {
    return (
        <>
        <h1> <i>This is a basic form</i></h1>
        <form>
            <label>First name:</label><br></br>
            <input type="text" id="fname" name="fname" /><br/>
            <label>Email:</label><br/>
            <input type="text" id="email" name="email" /><br/>
            <label>Password:</label><br/>
            <input type="text" id="password" name="password" /><br/>
            <input type="Submit" value="Submit" />
        </form>
        </>
    )
};

export default Center;