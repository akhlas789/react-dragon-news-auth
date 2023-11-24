import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const newses = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <NavBar></NavBar>
            <h2 className="text-3xl font-poppins font-bold">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        newses.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;