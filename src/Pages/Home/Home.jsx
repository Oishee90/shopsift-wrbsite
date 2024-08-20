import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Header from "../../Root/Header";


const Home = () => {
    return (
        <div>
              <Helmet><title>ShopSift|Register</title></Helmet>
              <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default Home;