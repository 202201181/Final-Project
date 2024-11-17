import { useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import Banner from "./Movies/Banner";
import Footer from "./Movies/Footer";
import MoviesContainerPage from "./Movies/MoviesContainerPage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {    
  const userToken = Cookies.get("jwt");
  if (!userToken) {
    navigate("/login");
  }
  }, [navigate]);


  return (
    <>
      <section className="mt-[3px]">
        <Banner />
        <MoviesContainerPage />
        <Footer />
      </section>
    </>
  );
};

export default Home;
