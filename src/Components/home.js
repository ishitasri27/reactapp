
import React, {useState} from "react";

const Home = () => {
    const [name, setname] = useState("Kasie West");
    const [position, setposition] = useState("Author");
    const [profileviews, setprofileviews] = useState(100);
    let impressions;
  
  impressions = 90;

  const handleclick = () => {
    console.log("hello from the jsx");
    setname("Taylor Swift");
    setposition("Singer");
    setprofileviews("200");
  };

  return (
    <>
      {/* <h1 style={{ color: "red", backgroundColor: "blue" }}>
        Hello from the Inline CSS
      </h1>
      <h1 className="test">Hello from the file css</h1> */}
      <h1>{name} </h1>
      <p>{position}</p>
      <p>Who viewed your profile : {profileviews} </p>
      <p>Impressions on your post : {impressions} </p>
      <button
        onClick={() => {
          handleclick();
        }}
        className="btn btn-primary"
      >
        Change details
      </button>
    </>
  );
};
export default Home;