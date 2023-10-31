import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import doctor1mid from "../assets/images/doctorimage1mid.jpg";
import doctor2sqr from "../assets/images/doctorimage2sqr.jpg";
import doctor3sqr from "../assets/images/doctorimage3sqr.jpg";
import icon1 from "../assets/images/clinicicon1.jpg";
import icon2 from "../assets/images/clinicicon2.jpg";
import icon3 from "../assets/images/clinicicon3.jpg";

const HomePage = () => {
    return <>

        <>
            <section className="main_section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[40px] leading-[50px] text-textColor font-[800] md:text-[60px] md:leading-[70px]">We are Elite Care! Something deep and meaningful about healthcare!</h1>
                                <p className="text_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn">Request an Appointment</button>
                            </div>

                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">100%</h2>
                                    <span className="w-[100px] h-2 bg-blue rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Satisfaction Rating</p>
                                </div>

                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">22+</h2>
                                    <span className="w-[100px] h-2 bg-yellow rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Years of Experience</p>
                                </div>

                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">10</h2>
                                    <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
                                    <p className="text_para">Clinic Locations</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-80 h-150 mix-blend-multiply" src={doctor1mid} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <img className="mb-[30px] mix-blend-multiply" src={doctor2sqr} alt="" />
                                <img className="w-60 h-60 mb-[30px] mix-blend-multiply" src={doctor3sqr} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Only the best medical service is provided!
                        </h2>
                        <p className="text_para text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        {/* Find a Doctor */}
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon1} alt="" />
                            </div>

                            <div className="mt-[30]px">
                                <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">Find a Doctor</h2>
                            </div>
                            <p className="text-[16px] leading-7 text-text font-[400] mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border=[] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />
                            </Link>

                        </div>

                        {/* Explore our Services */}
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon2} alt="" />
                            </div>

                            <div className="mt-[30]px">
                                <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">Explore our Services</h2>
                            </div>
                            <p className="text-[16px] leading-7 text-text font-[400] mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border=[] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />
                            </Link>

                        </div>

                        {/* Book an Appointment */}
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img className="object-scale-down h-20 w-20" src={icon3} alt="" />
                            </div>

                            <div className="mt-[30]px">
                                <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">Book an Appointment</h2>
                            </div>
                            <p className="text-[16px] leading-7 text-text font-[400] mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border=[] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


        </>

    </>
}

export default HomePage;