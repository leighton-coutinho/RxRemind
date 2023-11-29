import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Review from "../components/Review";

function Service () {
    return (
        <>
            <Navbar></Navbar>
            <Hero
            cName="hero-mid"
            heroImg="https://artera.io/wp-content/uploads/2022/10/doctor-reassures-patient.jpg"
            title="Reivews"
            btnClass="hide"
             />
            <Review/>
            <Footer/>
        </>
    );
}

export default Service;