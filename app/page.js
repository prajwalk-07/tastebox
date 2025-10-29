import Footer from '../components/Footer';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import RealSustainableCards from '@/components/RealSustainableCards';
import WhyTasteBox from '@/components/WhyTasteBox';
import FAQs from '@/components/FAQs';
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

 
    

{/* <Reviews/> */}
<RealSustainableCards/>
<WhyTasteBox/>
<FAQs/>
      </main>
    </div>
  );
}