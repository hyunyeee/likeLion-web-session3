import React from 'react';

const Profile = (props) => {
    const {name, profileImg, src} = props.data;
    const {isDark} = props;

    return (
        <>
            <div id="profile" className={isDark ? "dark_contentWrap" : "contentWrap"}>
                <div id="pfImg" >
                    <img id="my_img" src={profileImg} alt="github_profileImg"/>
                </div>
                <b>{name}</b>

                <div id="icons" className={isDark ? "darkBorder" : ""}>
                    <div id="github" className="box">
                        <a href={src.githubLink}>
                            <img src={src.githubIcon} alt="github" />
                        </a>
                    </div>
                    <div id="instar" className="box">
                        <a href={src.instarLink}>
                            <img src={src.instarIcon} alt="Instar" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;