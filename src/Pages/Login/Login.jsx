/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { singIn } = useContext(AuthContext)

    const handaleLogin = (event) => {
        event.preventDefault();
        console.log(event.currentTarget);
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        singIn(email, password)
            .then(resut => {
                console.log(resut.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handaleLogin} className="md:w-3/4 lg:w-1/2 mx-auto p-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;