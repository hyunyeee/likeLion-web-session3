import React from 'react';
import {useState} from "react";

const Like = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true)
    }
    const onMouseLeave = () => {
        !isClicked ? setIsHovered(false) : setIsHovered(true)
    }
    const onClickHeart = () => {
        setIsClicked((current) => !current)

    }


    return (
        <div id="heartBox">
            <img id="heart"
                 onClick={() => {
                     // event.stopPropagation(); //이벤트 버블링 방지 자식 이벤트만 실행시키기
                     onClickHeart()
                 }}

                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}

                 src={isHovered ? `https://cdn-icons-png.flaticon.com/512/2589/2589175.png`
                     : `https://cdn-icons-png.flaticon.com/512/2589/2589197.png`}
            />
        </div>
    );
};

export default Like;