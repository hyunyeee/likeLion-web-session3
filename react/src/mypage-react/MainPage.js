import React, {useContext} from 'react';

import './myPage.css';
import Data from './MyData.json'
import Profile from "./Profile";
import TextBox from "./TextBox";
import Githubs from "./Githubs";
import Like from "./Like"
import Theme from "./Theme";
import {ThemeProvider} from "./ThemeProvider";
import {ThemeContext} from "./ThemeContext";


const MainPage = () => {

    // const [isDark, setIsDark] = useState(false);


    const { dark } = useContext(ThemeContext);
    console.log(dark)


    return (
        <>

                <div className={dark ? "darkWrapper" : "Wrapper"}>
                    <div id="top-wrapper">
                        <h1 className={dark ? "dark_title" : "title"}>
                            개발파트 - 웹 지원
                        </h1>
                        <div id="buttons">
                            <Theme />
                            <Like/>
                        </div>
                    </div>


                    <div className="Container">
                        <div id="top-wrap" className={dark ? "darkBorder" : ""}>
                            <Profile data={Data} isDark={dark}/>
                            <div id="right-box" className={dark ? "darkBorder" : ""}>
                                <TextBox data={Data} isDark={dark}/>
                            </div>
                        </div>
                        <div id="content" className={dark ? "dark_contentWrap" : "contentWrap"}>
                            <Githubs data={Data} isDark={dark}/>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default MainPage;