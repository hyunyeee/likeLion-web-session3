import React, {useState} from 'react';
import sun from "../img/sun.png"
import moon from "../img/full-moon.png"
const Theme = () => {


    const [isClicked, setIsClicked] = useState(false);

    const onClick = () => {
        setIsClicked((current) => !current)

    }


    return (
        <div id="themeBox">
            <img id="sunNmoon"
                onClick={onClick}
                src={isClicked ? moon : sun}
            />
        </div>
    );
};

export default Theme;