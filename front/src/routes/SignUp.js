import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function SignUp () {
    return (
        <>
            <Navbar></Navbar>
            <Hero
            cName="hero-mid"
            heroImg="https://png.pngtree.com/background/20211215/original/pngtree-doctor-background-using-mobile-phone-picture-image_1453324.jpg"
            title="Sign Up"
            btnClass="hide"
             />
             <ContactForm 
             isSignUp="true"
             />
            <Footer/>
        </>
    );
}

export default SignUp;