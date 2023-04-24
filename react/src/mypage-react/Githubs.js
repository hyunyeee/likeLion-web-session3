import React from 'react';
import Github from "./Github";

const Githubs = (props) => {
    const {contents} = props.data;
    const {isDark} = props;


    return (
        <>
            <ul>
                {contents && contents.map((content, index) => (
                    <li key={index} className={index % 2 === 0 ? "dark_li" : "memo"}>
                        <Github data={content} idx={index} isDark={isDark}/>
                    </li>
                ))}
                {/* React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행
                       즉 React는 return에서 user.map(...)을 반복실행할 때
                       첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며
                       당연히 그 데이터는 undefined로 정의되어 오류발생 -> &&로 해결 */}
            </ul>
        </>
    );
};

export default Githubs;