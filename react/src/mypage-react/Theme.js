import React, {useState} from 'react';
import sun from "../img/sun.png"
import moon from "../img/full-moon.png"


const Theme = (props) => {
    const {setDark, isDark} = props

    const onClick = () => {
        setDark((isDark) => !isDark)
    }


    return (
        <div id="themeBox">
            <img id="sunNmoon"
                onClick={onClick}
                src={isDark ? moon : sun}
            />
        </div>
    );
};

export default Theme;