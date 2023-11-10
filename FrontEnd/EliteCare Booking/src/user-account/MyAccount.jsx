import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext.jsx";

import testImage from "../assets/images/doctorimage2sqr.jpg";

import MyAppointments from "./MyAppointments.jsx";
import useGetProfile from "../hooks/useFetchData.jsx";
import { BASE_URL } from "../config.js"

const MyAccount = () => {

    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings');

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);
    console.log(userData, 'userData');

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">

                {/* {loading && <Loading />} */}



                {
                    !loading && !error && (<div className="grid md:grid-cols-3 gap-10">
                        <div className="pb-[50px] px-[30px] rounded-md">
                            <div className="flex items-center justify-center">
                                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primary">
                                    <img src={testImage} alt="" className="w-full h-full rounded-full" />
                                </figure>
                            </div>

                            <div className="text-center mt-4">
                                <h3 className="text-[18px] leading-[30px] text-heading font-bold">Liam Risdon</h3>
                                <p className="text-textColor text-[15px] leading-6 font-medium">example@email.com</p>
                                <p className="text-textColor text-[15px] leading 6 font-medium"> Phone Number: <span className="ml-2 text-heading text-[22px] leading-8">01234567</span></p>
                            </div>

                            <div className="mt-[50px] md:mt-[100px]">
                                <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
                                <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">Delete Account</button>
                            </div>

                        </div>

                        <div className="md:col-span-2 md:px-[30px]">
                            <div>
                                <button onClick={() => setTab('bookings')} className={`${tab === 'bookings' && 'bg-primary text-white font-normal'} p-2 mr-5 px-5 rounded-md text-heading font-semibold text-[16px] leading-7 border border-solid border-primary`}>My Appointments</button>

                                <button onClick={() => setTab('settings')} className={`${tab === 'settings' && 'bg-primary text-white font-normal'} py-2 px-5 rounded-md text-heading font-semibold text-[16px] leading-7 border border-solid border-primary`}>Profile Settings</button>

                            </div>

                            {
                                tab === 'bookings' && <MyAppointments />
                            }

                        </div>
                    </div>
                    )}

            </div>
        </section>
    )
}

export default MyAccount