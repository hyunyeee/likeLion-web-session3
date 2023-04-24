import React from 'react';

const TextBox = (props) => {
    const {textBox} = props.data;
    const {isDark} = props;

    return (
        <>
            <div id="textBox" className={isDark ? "dark_contentWrap" : "contentWrap"}>
                <p className={isDark ? "dark_text" : "text"}>
                    {textBox}
                </p>
            </div>
        </>
    );
};

export default TextBox;