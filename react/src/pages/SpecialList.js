import Special from "./Special";
import Hobby from "./Hobby";

const SpecialList = (props) => {
    const {special} = props.data

    console.log(special)
    return (
        <>
            <h3>특이점</h3>
            {special.map((data, index) => (
                <div className="wrapSpecial">
                    <Special data={data} key={index}/>
                </div>
            ))}
        </>
    );
};

export default SpecialList;