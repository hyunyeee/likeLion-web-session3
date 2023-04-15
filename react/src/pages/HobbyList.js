import Hobby from "./Hobby";

const HobbyList = (props) => {
    const {hobby} = props.data;

    console.log(hobby)


    return (

        <>
            <h3>HOBBY</h3>
            <div className="wrapHobby">
                {hobby.map((data, index) => (
                    <Hobby data={data} key={index} dark={props.dark}/>
                ))}
            </div>

        </>
    );
};

export default HobbyList;
