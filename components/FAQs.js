import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <section id="faqs" className="bg-yellow-400 py-12 w-full"> {/* Full-width yellow bg */}
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          FREQUENTLY ASKED <span className="text-amber-900">QUESTIONS</span>
        </h2>

        {/* Full-width accordion */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-amber-200">
              <AccordionTrigger className="text-lg text-amber-900 hover:text-amber-700 py-4">
                Are your products vegetarian?
              </AccordionTrigger>
              <AccordionContent className="text-amber-800 pb-4">
                Yes, all our products are 100% vegetarian and made with high-quality ingredients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-amber-200">
              <AccordionTrigger className="text-lg text-amber-900 hover:text-amber-700 py-4">
                How do I store the ready-to-eat meals?
              </AccordionTrigger>
              <AccordionContent className="text-amber-800 pb-4">
                Store in a cool, dry place. Once opened, refrigerate and consume within 2 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-amber-200">
              <AccordionTrigger className="text-lg text-amber-900 hover:text-amber-700 py-4">
                Do you offer bulk orders?
              </AccordionTrigger>
              <AccordionContent className="text-amber-800 pb-4">
                Yes, please <a href="mailto:info@tastebuds.com" className="underline text-amber-700 hover:text-amber-900">contact us</a> for bulk and corporate orders.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}