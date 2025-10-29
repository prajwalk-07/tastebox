"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full bg-[#FFBC0D] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Bringing the True Flavour of Home to Your Kitchen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            &quot;Taste Box was founded on a simple yet powerful idea: to make
            authentic, home-cooked Indian meals accessible to everyone,
            regardless of their busy schedules. We address the modern dilemma by
            seamlessly blending traditional flavours with the convenience
            required by today&apos;s fast-paced lifestyle&quot;
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <Card className="bg-white border-2 border-amber-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#cf240a] text-center">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To become a cherished household name, trusted for bringing the
                true taste of home into every kitchen. At Taste Box, we aim to
                bridge the gap between modern lifestyles and the soulful,
                authentic flavours of Indian heritage making them a seamless,
                joyful part of everyday life.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-white border-2 border-amber-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#cf240a] text-center">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To celebrate the richness of Indian cuisine by making it
                effortlessly accessible to families, students, and
                professionals. We are committed to crafting high-quality,
                traditional recipes using wholesome ingredients, ensuring every
                meal delivers both convenience and authenticity. Through Taste
                Box, we empower our community to enjoy nourishing,
                flavour-packed, home-style Indian meals without ever
                compromising on taste, time, or nutrition.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder Section */}
        <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-200">
          <h2 className="text-lg md:text-3xl font-extrabold text-[#cf240a] text-center mb-6">
            Meet Our Founder - Pooja KV
          </h2>
          <div className="w-full flex justify-center mb-6">
            <Image
              src="/Founder.png"
              alt="Founder - Pooja KV"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
         
          <p className="text-gray-800 text-lg md:text-xl text-center leading-relaxed">
            I grew up in Karnataka, India, a region known for its rich culinary
            heritage and comforting South Indian flavours. From a young age, I
            was inspired by my mother&apos;s and grandmother&apos;s cooking, where every
            meal was made with love, care, and the freshest natural ingredients.
            This passion for authentic, homely food led to the creation of
            &quot;Taste Box&quot; a brand dedicated to bringing the flavours of home to
            people everywhere. Our ready-to-mix meal packets are crafted to
            deliver the same warmth and satisfaction of a homely South Indian
            meal, made from 100% natural ingredients with no compromise on taste
            or tradition. At Taste Box, we aim to take the authentic taste of
            South India to every part of the world, reminding people of home
            with every bite.
          </p>
        </div>
      </div>
    </div>
  );
}
