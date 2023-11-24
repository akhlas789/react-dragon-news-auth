/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handaleRegister = (event) => {
        event.preventDefault();
        console.log(event.currentTarget)
        const form = new FormData(event.currentTarget)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handaleRegister} className="md:w-3/4 lg:w-1/2 mx-auto p-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" name="photo" placeholder="photo URL" className="input input-bordered" required />
                    </div>
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
                <p className="text-center mt-4">Alreday have an account <Link className="text-blue-600 font-bold" to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;