import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import HashLoader from 'react-spinners/HashLoader';

const SignUpPage = () => {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        gender: "",
    });

    const navigate = useNavigate()



    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async e => {
        console.log(formData);
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/authRouter/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message);
            }

            setLoading(false);
            toast.success(message);
            navigate('/login');

        } catch (e) {
            toast.error(e.message);
            setLoading(false);

        }
    }

    return <>
        <section className="px-5 xl:px-0">
            <div className="max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="rounded-l-lg lg:pl-16 py-10">
                        <h3 className="text-heading text-[22px] leading-9 font-bold mb-10">
                            Create an <span className="text-primary">account</span>
                        </h3>

                        <form onSubmit={submitHandler}>
                            <div className="mb-5">
                                <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleInputChange} className="w-full pr-4 px-4 py-3 border-b border-solid border-red-400 focus:outline-none focus:border-b-primary text-[22px] leading-7 text-textColor placeholder:text-heading rounded-md cursor-pointer" required />
                            </div>

                            <div className="mb-5">
                                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pr-4 px-4 py-3 border-b border-solid border-red-400 focus:outline-none focus:border-b-primary text-[22px] leading-7 text-textColor placeholder:text-heading rounded-md cursor-pointer" required />
                            </div>

                            <div className="mb-5">
                                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} className="w-full pr-4 px-4 py-3 border-b border-solid border-red-400 focus:outline-none focus:border-b-primary text-[22px] leading-7 text-textColor placeholder:text-heading rounded-md cursor-pointer" required />
                            </div>

                            <label className="text-heading font-bold text-[16px] leading-7">
                                Gender:
                                <select name="gender" value={formData.gender} onChange={handleInputChange} className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                                    <option value="">Select</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>

                            <div className="mt-7">
                                <button disabled={loading && true} type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">{loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}</button>
                            </div>

                            <p className="mt-5 text-textColor text-center"> Already have an Account? <Link to="/login" className="text-primary font-medium ml-1">Login here</Link></p>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    </>
}

export default SignUpPage;