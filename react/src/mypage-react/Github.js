import React from 'react';


const Github = (props) => {
    const {link, period, title, linkTitle, content} = props.data;


    return (
        <>
            {(props.idx % 2) === 0 ?
                (
                    <a href={link}>
                        <p className="period">
                            {period}
                        </p>
                        <b> {title} <br/> </b>
                        <b className="link_title"> {linkTitle}</b>
                    </a>
                ) :
                (
                    <p id="contentTxt">
                        {content} <br/>
                    </p>
                )
            }
        </>
    );
};

export default Github;