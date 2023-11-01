/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicesCard = ({ item }) => {


    const { name, desc } = item;

    return (
        <div className="py-[30px] px-3 lg:px-5">
            <h2 className="text-[26px] leading-9 text-heading font-[700]">{name}</h2>
            <p className="text=[16px] leading-7 font-[400] text-textColor mt-4">{desc}</p>

            <div className="flex items-center justify-between mt-[30px]">
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border=[] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
            </div>

        </div>
    )
}

export default ServicesCard