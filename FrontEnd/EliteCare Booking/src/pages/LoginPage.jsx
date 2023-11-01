import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return <>
        <section className="px-5 lg:px-0">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-heading text-[22px] leading-9 font-bold mb-10">Hello! <span className="text-primary">Welcome </span>Back</h3>

                <form className="py-4 md:py-0">
                    <div className="mb-5">
                        <input type="email" placeholder="Please enter your email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border-b border-solid border-red-400 focus:outline-none focus:border-b-primary text-[22px] leading-7 text-textColor placeholder:text-heading rounded-md cursor-pointer" required />
                    </div>

                    <div className="mb-5">
                        <input type="password" placeholder="Please enter your password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 border-b border-solid border-red-400 focus:outline-none focus:border-b-primary text-[22px] leading-7 text-textColor placeholder:text-heading rounded-md cursor-pointer" required />
                    </div>

                    <div className="mt-7">
                        <button type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Login</button>
                    </div>

                    <p className="mt-5 text-textColor text-center"> No Account? <Link to="/signup" className="text-primary font-medium ml-1">Register here</Link></p>

                </form>
            </div>

        </section>
    </>
}

export default LoginPage;