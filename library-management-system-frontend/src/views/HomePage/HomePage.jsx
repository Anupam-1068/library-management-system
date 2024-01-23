import Image1 from '../../assets/Image1.jpg';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
    return (
        <div>
            <div className="blurryImageContainer">
                <img className="blurryImage" src={Image1} alt="Image1" />
            </div>
            <div className="centerText">
                <p>Library Management System</p>
            </div>
            <div className="blurryImageContainer">
                <img className="blurryImage" src={Image1} alt="Image1" />
            </div>
        </div>
    );
};

export default HomePage;


