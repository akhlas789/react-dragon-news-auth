import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categorys, setCategory] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="space-y-5">
            <h3 className='text-2xl'>All Categories {categorys.length}</h3>
            {
                categorys.map(category => <Link className="block ml-4 font-semibold px-4"
                    key={category.id}
                    to={`/category/${category.id}`}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;