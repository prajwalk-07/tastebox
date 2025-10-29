import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <section id="faqs" className="bg-white py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-black mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* Full-width accordion */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4 ">
                How long does it take to cook a meal with Taste Box?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                You can prepare a delicious, traditional meal in under 20 minutes with our mixes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                Do your products contain preservatives or artificial ingredients?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                No, our mixes are made with 100% natural ingredients and have zero artificial additives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                How do I use the Rapid Puliyogre gojju?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                Simply mix the ready-to-use gojju paste into freshly cooked plain rice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                Does the Rapid Bisibelebath mix already contain the rice and dal?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                Yes, our mix includes both rice and toor dal for a complete one-pot meal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                How can I make the Rapid Rice Bath a more complete meal?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                Feel free to add fresh vegetables like carrots, beans, and peas for extra nutrition.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                How do I prepare the Rapid Lemon Upma to avoid lumps?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                Slowly add the mix to boiling water while stirring continuously for a smooth texture.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-black">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                Does the Rava Idli mix require any fermentation time?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                No, just mix with yogurt, rest for 15 minutes, and it&apos;s ready to steam.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg text-black hover:text-black py-4">
                What is the main health benefit of the Rapid Ragi Idli?
              </AccordionTrigger>
              <AccordionContent className="text-black pb-4">
                Ragi (finger millet) flour is naturally rich in calcium and dietary fiber.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}