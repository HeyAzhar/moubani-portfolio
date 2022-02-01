import dottedBackground from "../../../Assets/dottedBackground.jpg";
import "./styles.css";

const DottedBackground = () => {
  return (
    <div className="dottedbackground" style={{ 
        backgroundImage: "url(" + dottedBackground + ")"
      }} />
    );
};

export default DottedBackground;