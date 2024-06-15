import React from 'react';
import image from './bgg.jpeg';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
  const handleClick =()=>{
    navigate("/hangman");
  }
  return (
    <div style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Arial, sans-serif"
    }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
      }}></div>
      <button
        style={{
          padding: "10px 20px",
          marginTop: "40px",
          fontSize: "1.2rem",
          backgroundColor: "white",
          color: "black",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          zIndex:"10",
        }}
        onClick={handleClick}
      >
        Play Now!
      </button>
    </div>
  );
};

export default Welcome;
