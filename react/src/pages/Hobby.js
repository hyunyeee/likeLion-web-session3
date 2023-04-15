import React from 'react';

const Hobby = (props) => {

    return (
        <>


             {/*<div className={props.dark ? "introContentDarkMode" : "introContent"}>*/}


            <div
                className={props.dark ? "hobbyContentDarkMode" : "hobbyContent"}>
                {props.data}
             </div>
        </>
    );
};

export default Hobby;


