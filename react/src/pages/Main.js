import "../Main.css";

import HobbyList from "./HobbyList";
import Info from "./Info";
import SpecialList from "./SpecialList";

import Data from "./Data.json"

const Main = () => {
    return (
        <>
            <Info data={Data} />
            <HobbyList data={Data} />
            <SpecialList data={Data} />
        </>
    );
};

export default Main;
