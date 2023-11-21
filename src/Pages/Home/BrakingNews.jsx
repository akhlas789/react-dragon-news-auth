import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex bg-slate-300 p-3 rounded-lg">
            <button className="btn btn-secondary mr-4">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;