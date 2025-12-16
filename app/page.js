import {Header} from "@/app/components/Header";
import {Hero} from "@/app/components/Hero";
import {About} from "@/app/components/About";
import {Services} from "@/app/components/Services";
import {Rooms} from "@/app/components/Rooms";
import {Gallery} from "@/app/components/Gallery";
import {Footer} from "@/app/components/Footer";
import {Contact} from "@/app/components/Contact";
import "@/app/styles/fonts.css"
import "@/app/styles/theme.css";
import Testimonials from "@/app/components/Testimonials";

export default function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Rooms />
                <Gallery />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
  );
}
