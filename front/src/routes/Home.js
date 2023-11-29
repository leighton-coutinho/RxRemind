import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Navbar from "../components/navbar";

function Home () {
    return (
        <>
            <Navbar></Navbar>
            <Hero
            cName="hero"
            heroImg="https://wvumedicine.org/braxton/wp-content/uploads/sites/40/2019/01/AdobeStock_188491894.jpeg"
            title="Prescription Reminder Service"
            text="Ensure your patients are satisfied"
            buttonText="Sign In"
            url="/login"
            btnClass="show"
             />
             <Destination/>
             <Review/>
             <Footer/>
        </>
    );
}

export default Home;