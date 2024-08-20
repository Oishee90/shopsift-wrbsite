import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Header from "../../Root/Header";
import AllProducts from "./AllProducts";


const Home = () => {
    return (
        <div>
              <Helmet><title>ShopSift|Register</title></Helmet>
              <Header></Header>
            <Banner></Banner>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;