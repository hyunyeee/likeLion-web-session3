import React from 'react';


const Github = (props) => {
    const {link, period, title, linkTitle, content} = props.data;
    const {isDark} = props;

    return (
        <>
            {(props.idx % 2) === 0 ?
                (
                    <a href={link}>
                        <p className={isDark ? "dark_period" : "period"}>
                            {period}
                        </p>
                        <b className={isDark ? "dark_period" : "period"}>
                            {title} <br/>
                        </b>
                        <b className={isDark ? "dark_link_title" : "link_title"}>
                            {linkTitle}
                        </b>
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