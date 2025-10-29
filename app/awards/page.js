"use client";
import Image from "next/image";

export default function Awards() {
  return (
    <div className="w-full bg-[#FFC72C] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            A Moment We&apos;ll Always Cherish
          </h1>
        </div>

        {/* Content with Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section - Placeholder for award image */}
          <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden ">
            <div className="w-full h-full flex items-center justify-center  ">
              {/* <span className="text-gray-500 text-lg"> */}
                {/* Replace this div with your actual image component */}
                <Image
                  src="/award.png"
                  alt="Taste Box Award - Excellence in Best Taste at Thindi Pothara Habba festival"
                  width={600}
                  height={300}
                  className="object-cover rounded"
                />
                {/* Award Image Placeholder */}
              {/* </span> */}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Excellence in Best Taste Award
              </h2>
              <p className="text-lg text-gray-800 mb-2">
                Thindi Pothara Habba festival, Bengaluru, India
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                We were thrilled and humbled to receive the award for &quot;Excellence in
                Best Taste&quot; at the vibrant Thindi Pothara Habba festival in Bengaluru,
                India.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                To be celebrated for the very heart of our brand our authentic flavour
                in a community dedicated to great food means the world to us. This
                recognition fuels our passion and strengthens our commitment to
                crafting simple, delicious, and truly memorable meals for you and your
                family.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                For us, great taste is a promise, and we&apos;re honoured to have it
                recognised.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}