import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/Header";
import  cartColor from './utils/Helper';
function App() {
  const [data, setData] = useState({ logo: "", features: [] });
  const [loader, setLoader] = useState(true);
  console.log(cartColor);
  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setLoader(false)
      } catch (error) {
        console.error("Error fetching data file:", error);
      }
    };

    fetchCsvData();
  }, []); // Removed setData from the dependency array

  const { logo, features } = data;

  return (
    <div className="App">
      {loader ? (
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Header logo={logo} />
          <div className="cards-list cards-container d-none d-lg-block">

            {features.map((card, index) => (
              <Card key={index} card={card} backgroundColor={cartColor[index % cartColor.length]} />
            ))}

          </div>
          <div className="carousel-container cards-container d-block d-lg-none">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
              {features.map((card, index) => (
                <div key={index} className="h-100">
                  <Card card={card} backgroundColor={cartColor[index % cartColor.length]} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
