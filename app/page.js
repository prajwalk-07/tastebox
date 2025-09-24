import Footer from '../components/Footer';
import WhereToBuy from "../components/ContactUs";
import Reviews from "../components/Reviews";
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import RealSustainableCards from '@/components/RealSustainableCards';
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="">
        {/* Hero Gallery */}
        <section className=" w-full">
          <Hero />
        </section>
        <Gallery/>
        {/* Products Section */}

 
    

<Reviews/>
<RealSustainableCards/>
    <WhereToBuy />
      </main>
      <Footer />
    </div>
  );
}