import React from 'react';

const Special = (props) => {

    console.log(props)
    return (
        <>
            <div className="specialContent">
                <h3
                    className=
                        {props.dark ? "specialContentTitleDarkMode" : "specialContentTitle"}
                >
                    {props.data.title}
                </h3>
            </div>
            <div
                className="hideContent">
                {props.data.content}
            </div>
        </>
    );
};

export default Special;

