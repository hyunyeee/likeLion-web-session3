import Main from "./pages/Main";
import MainPage from "./mypage-react/MainPage";
import Login from "./mypage-react/Login";
import {useState} from "react";
import {UserInfo} from "./mypage-react/UserInfo";


function App() {
    window.localStorage.setItem('login', JSON.stringify(UserInfo));

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log(isLoggedIn)


    const LoginLogic = () => {
        setIsLoggedIn((current) => !current);
        console.log(isLoggedIn)
    }

    // todo isLoggedin true로 만드는 함수 Login으로 전달

    return (
        <>
            {isLoggedIn ? <MainPage /> : <Login login={LoginLogic}/>}
        </>

    )

}

export default App;
