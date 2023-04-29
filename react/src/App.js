import Main from "./pages/Main";
import MainPage from "./mypage-react/MainPage";
import Login from "./mypage-react/Login";
import {useState} from "react";
import {UserInfo} from "./mypage-react/UserInfo";
import {ThemeProvider} from "./mypage-react/ThemeProvider";


function App() {
    window.localStorage.setItem('login', JSON.stringify(UserInfo));

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log(isLoggedIn)


    const LoginLogic = () => {
        setIsLoggedIn((current) => !current);
        console.log(isLoggedIn)
    }


    return (
        <>
            <ThemeProvider>
                {isLoggedIn ? <MainPage /> : <Login login={LoginLogic}/>}
            </ThemeProvider>

        </>
    )

}

export default App;