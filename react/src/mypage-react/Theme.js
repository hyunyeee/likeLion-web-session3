import React, {useState, useContext} from 'react';
import {ThemeContext} from "./ThemeContext";
import sun from "../img/sun.png"
import moon from "../img/full-moon.png"


const Theme = () => {

    // const {setDark, isDark} = props
    // const onClick = () => {
    //     setDark((isDark) => !isDark)
    // }

        const { dark, toggle } = useContext(ThemeContext);


        return (
            <div id="themeBox">
                <img
                    id="sunNmoon"
                    onClick={toggle}
                    src={dark ? moon : sun}
                    alt={dark ? 'moon' : 'sun'}
                />
            </div>
        );
};

export default Theme;
