"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Certifications() {
  return (
    <div className="w-full bg-[#FFBC0D]  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Commitment to Quality and Safety
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your trust is our most important ingredient. We are dedicated to upholding
            the highest standards of food safety, quality, and hygiene in every packet we
            produce. Taste Box is proud to be compliant with the following
            certifications, ensuring that every meal is not only delicious but also safe for
            you and your family.
          </p>
        </div>

        {/* Certification Cards - 3 columns on large screens, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FSSAI Card */}
          <Card className="bg-white border-2 border-green-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/fssai.jpg"
                    alt="FSSAI Certification Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-green-800">
                FSSAI
              </CardTitle>
              <p className="text-sm text-green-600">
                Food Safety and Standards Authority of India
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                Adhering to the rigorous food safety regulations for our authentic Indian production.
                This certification ensures our products meet the highest standards of quality
                and safety for Indian food products.
              </p>
            </CardContent>
          </Card>

          {/* HACCP Card */}
          <Card className="bg-white border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/haccp.jpg"
                    alt="HACCP Certification Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-blue-800">
                HACCP
              </CardTitle>
              <p className="text-sm text-blue-600">
                Hazard Analysis and Critical Control Points
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                Implementing a systematic, preventive approach to food safety that addresses physical,
                chemical, and biological hazards. This proactive system identifies and controls
                potential hazards throughout our production process.
              </p>
            </CardContent>
          </Card>

          {/* ISO 22000 Card */}
          <Card className="bg-white border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/iso.png"
                    alt="ISO 22000 Certification Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-purple-800">
                ISO 22000
              </CardTitle>
              <p className="text-sm text-purple-600">
                Food Safety Management Systems
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                Following a global standard for food safety management systems, covering every step
                of our food chain from ingredients to your kitchen. This international certification
                demonstrates our commitment to worldwide food safety standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}