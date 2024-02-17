import React, { useEffect } from 'react';

const Header = () => {
useEffect(() => {
    console.log('This will run after every render');

    return () => {  
        console.log('This will run on unmount');
    }
}
, [])



    return (
        <>
        <h1>Header</h1>

        </>
    )
    }

export default Header;
