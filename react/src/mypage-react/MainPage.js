import React from 'react';

import './myPage.css';
import Data from './MyData.json'
import Profile from "./Profile";
import TextBox from "./TextBox";
import Githubs from "./Githubs";


const MainPage = () => {
    return (
        <>
            <div id="Wrapper">
                <h2 id="title">
                    개발파트 - 웹 지원
                </h2>

                <div id="Container">
                    <div id="top-wrap">
                        <Profile data={Data} />
                        <TextBox data={Data} />
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