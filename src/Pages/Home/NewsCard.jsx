/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-xl mb-4 border-b-2">
            <figure><img className="w-11/12 mt-4 h-[300px]" src={news.thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body  w-full mx-auto">
                <h2 className="card-title">{news.title}</h2>
                {
                    news.details.length > 200 ?
                        <p>{news.details.slice(0, 200)}
                            <Link
                                to={`/news/${news._id}`}
                                className="text-blue-600 font-bold">Read More....
                            </Link></p> :
                        <p>{news.details}</p>
                }

            </div>
        </div>
    );
};

export default NewsCard;