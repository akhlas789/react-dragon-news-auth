import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div >
            <div className="p-4 space-y-3">
                <h3 className="text-2xl">Login With</h3>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>

            <div className="p-4 ">
                <h3 className="text-2xl mb-2">Find Us On</h3>

                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>FaceBook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>FaceBook</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    <span>FaceBook</span>
                </a>

            </div>
            {/* q zone */}
            <div className="p-4 space-y-3">
                <h3 className="text-2xl">Q-Zone</h3>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>

    );
};

export default RightSideNav;