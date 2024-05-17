import React from "react";
import img from "../../assets/fingerprint.png";
import touch from "../../assets/touch-id 1.png";
import img1 from "../../assets/Rectangle 2.png";

const Boxes = () => {
  return (
    <div className="bg-neutral-950 py-14 sm:py-24">
      <div className=" container  relative flex flex-col justify-between h-full px-10 sm:px-20 lg:px-10 mx-auto xl:px-0">
        <div className="w-full">
          <div className="flex flex-col w-full sm:mb-10 lg:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-full lg:w-1/3">
              <div className="relative h-full lg:mr-10">
                <div className="relative h-full p-8   bg-neutral-900 rounded-xl flex flex-col justify-center">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-4 ml-3 text-white text-3xl sm:text-4xl font-semibold font-Montserrat  text-center">
                      Real-Time Detection
                    </h3>
                  </div>

                  <p className="mb-2 text-gray-300 text-center font-Montserrat text-xs">
                    Instantly identify and respond to audio content in
                    real-time, maximizing the effectiveness of your campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:mt-10 lg:mt-0 mb-10 sm:mb-0 sm:full lg:w-2/3">
              <div className="relative h-full lg:mr-10">
                <div className="relative h-full p-10   bg-neutral-900 rounded-xl items-center flex flex-col justify-center">
                  <div className="flex items-center -mt-1 ">
                    <h3 className="my-4  text-white text-3xl sm:text-4xl font-semibold font-Montserrat  text-center">
                      Customizable Triggers{" "}
                    </h3>
                  </div>

                  <p className="mb-8 text-gray-300 text-center font-Montserrat text-xs">
                    Tailor your ad triggers to align with your marketing
                    objectives, whether it's driving website traffic, increasing
                    brand awareness, or boosting sales.
                  </p>
                  <button
                    type="button"
                    className="text-white font-Montserrat bg-emerald-600  font-medium rounded-full text-lg px-16 py-4 text-center"
                  >
                    Try it Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-col w-full mb-10 lg:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-full">
              <div className="h-11/12 lg:mr-10">
                <div className="relative h-4/5 p-8 bg-neutral-900 rounded-xl flex flex-col justify-center items-center">
                  <div className="relative w-full h-full flex flex-col justify-center items-center">
                    <img
                      src={img1}
                      alt=""
                      className="absolute w-full h-full object-cover rounded-xl"
                    />
                    <div className="relative z-10 p-4 text-center">
                      <h3 className="my-4 ml-3 pt-48 text-white text-3xl sm:text-4xl font-semibold font-Montserrat">
                        How Does it Work?
                      </h3>
                      <p className="mb-10 text-gray-300 font-Montserrat text-xs">
                        Our platform enables you to fingerprint audio content,
                        such as advertisements, music, or spoken words. Once
                        fingerprinted, our system can detect this audio content
                        in real-time, even when embedded in other media or
                        broadcasted over various channels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className=" mt-10  sm:mb-0 sm:w-full">
                    <div className="relative h-full sm:mr-10">
                      <div className="relative h-full p-8   bg-neutral-900 rounded-xl flex flex-col justify-center">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-4  text-white text-3xl sm:text-4xl font-semibold font-Montserrat  text-center">
                            Cross-Channel Compatibility{" "}
                          </h3>
                        </div>

                        <p className="mb-2 text-gray-300 text-center font-Montserrat text-xs">
                          Our platform supports a wide range of audio formats
                          and channels, ensuring seamless integration across
                          various media platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-10  sm:mb-0 sm:w-full">
                    <div className="relative h-full ">
                      <div className="relative h-full p-8   bg-neutral-900 rounded-xl flex flex-col justify-center">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-4 ml-3 text-white text-3xl sm:text-4xl font-semibold  font-Montserrat  text-center">
                            Precision Targeting{" "}
                          </h3>
                        </div>

                        <p className="mb-2 text-gray-300 text-center font-Montserrat text-xs">
                          Pinpoint your audience with unparalleled accuracy by
                          delivering ads based on audio content recognition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:mt-10 lg:mt-0 sm:mb-10 sm:w-full lg:w-2/5">
              <div className="relative h-full lg:mr-10">
                <div className="relative h-full p-10   bg-neutral-900 rounded-xl items-center flex flex-col justify-center">
                  <img src={touch} alt="" className="" />
                  <div className="flex items-center -mt-1 ">
                    <h3 className="my-6  text-white text-3xl sm:text-4xl font-semibold font-Montserrat  text-center">
                      Fast Fingerprint
                    </h3>
                  </div>

                  <p className="mb-6 text-gray-300 text-center font-Montserrat text-xs">
                    Fast Fingerprint is a cutting-edge audio recognition
                    technology designed to revolutionize the way businesses
                    identify and analyze audio content
                  </p>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
