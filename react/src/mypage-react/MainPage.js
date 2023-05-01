import React, {useState} from 'react';

import './myPage.css';
import Data from './MyData.json'
import Profile from "./Profile";
import TextBox from "./TextBox";
import Githubs from "./Githubs";
import Like from "./Like"
import Theme from "./Theme";
import moon from "../img/full-moon.png";
import sun from "../img/sun.png";
import Darkmode from "../pages/Darkmode";

const MainPage = () => {

    const [isDark, setIsDark] = useState(false);


    return (
        <>
            <div className={isDark ? "darkWrapper" : "Wrapper"}>
                <div id="top-wrapper">
                    <h1 className={isDark ? "dark_title" : "title"}>
                        개발파트 - 웹 지원
                    </h1>
                    <div id="buttons">
                        <Theme setDark={setIsDark} isDark={isDark}/>
                        <Like />
                    </div>
                </div>


                <div className="Container" >
                    <div id="top-wrap" className={isDark ? "darkBorder" : ""}>
                        <Profile data={Data} isDark={isDark} />
                        <div id="right-box" className={isDark ? "darkBorder" : ""}>
                            <TextBox data={Data} isDark={isDark}/>
                        </div>
                    </div>
                    <div id="content" className={isDark ? "dark_contentWrap" : "contentWrap"}>
                        <Githubs data={Data} isDark={isDark} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;