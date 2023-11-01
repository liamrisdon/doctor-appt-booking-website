import DoctorsList from "../components/DoctorsList.jsx";
// import { doctors } from "../assets/data/doctors.js";

const Doctors = () => {
    return (
        <>
            <section>
                <div className="container text-center">
                    <h2 className="heading">Find a Doctor</h2>
                </div>
            </section>

            <section>
                <div className="container">
                    <DoctorsList />
                </div>
            </section>
        </>
    )
}

export default Doctors;