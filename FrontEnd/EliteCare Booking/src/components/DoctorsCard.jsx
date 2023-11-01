/* eslint-disable react/prop-types */
const DoctorsCard = ({ doctor }) => {

    const {
        name,
        speciality,
        avgRating,
        image
    } = doctor;

    return (
        <div className="p-3 lg:p-5">
            <div>
                <img src={image} className="w-full" alt="" />
            </div>

            <h2 className="text=-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-heading font-[700] mt-3 lg:mt-5">{name}</h2>

            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className="text-main py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{speciality}</span>
            </div>

            <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-heading">{avgRating} Rating</span>

            </div>
        </div>
    )
}

export default DoctorsCard