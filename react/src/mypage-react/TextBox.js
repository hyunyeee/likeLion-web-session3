import React from 'react';

const TextBox = (props) => {
    const {textBox} = props.data;


    return (
        <>
            <div id="textBox" className="contentWrap">
                <p id="text">
                    {textBox}
                </p>
            </div>
        </>
    );
};

export default TextBox;