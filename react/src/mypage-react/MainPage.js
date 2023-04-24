import React from 'react';

import './myPage.css';
import Data from './MyData.json'
import Profile from "./Profile";
import TextBox from "./TextBox";
import Githubs from "./Githubs";
import Like from "./Like"
import Theme from "./Theme";

const MainPage = () => {
    return (
        <>
            <div id="Wrapper">

                <div id="top-wrapper">
                    <h1 id="title">
                        개발파트 - 웹 지원
                    </h1>

                    <div id="buttons">
                        <Theme />

                        <Like />
                    </div>
                </div>


                <div className="Container">

                    <div id="top-wrap">
                        <Profile data={Data} />
                        <div id="right-box">
                            <TextBox data={Data} />
                        </div>
                    </div>
                    <div id="content" className="contentWrap">
                        <Githubs data={Data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;