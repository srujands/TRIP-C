import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  helpline, flexiblepaymentoption, nosurgepricing_yellow, corporatebanner, transparentbilling, automatedbookingtools, aboutuscarvideo
} from '../src/assets';

let CorporateTravels = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="relative w-full min-h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutuscarvideo}
          type="video/mp4"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>

        <main className="flex flex-col items-start justify-center font-serif font-bold italic text-lg text-white text-left py-10 px-5 sm:py-20 sm:px-10">
          <div className="max-w-4xl mt-10 sm:mt-24 sm:ml-20" data-aos="fade-down" data-aos-delay="400">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Elevate Your Travel Experience with TRIP-C</h1>

            <hr className="border-yellow-400 border-solid border-t-4 w-40 mb-6 sm:mb-10" data-aos="fade-down" data-aos-delay="400" />

            <p className="text-lg sm:text-xl mb-6 sm:mb-12 mt-2 sm:mt-4 font-bold">Experience the pinnacle of luxury and efficiency with our bespoke aviation services,
              tailored to meet the unique needs of discerning corporate travelers..</p>
          </div>
        </main>

        <div className='sm:ml-10'>


          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-20  ml-5 sm:ml-20">


            {/* Button Section */}
            <div className="text-end mr-10 sm:ml-0" data-aos="fade-left" data-aos-delay="400">
              <button className="hover:bg-orange-400 bg-orange-500 text-slate-100 hover:text-slate-200 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-lg sm:text-xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* {Why Choose Tripc Section} */}
      <div className="px-5 sm:px-10 py-10 sm:py-16 bg-gray-100">
        <div className="mx-auto max-w-2xl sm:max-w-7xl">
          <h2 className="text-2xl sm:text-4xl text-center font-bold tracking-tight text-gray-700 mb-4">
            Why Choose TRIP-C for Corporate Travel Solutions?
          </h2>
          <div className="mt-6 space-y-6 text-lg text-gray-700">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold">Corporate Travel Management</h3>
              <p>Our dedicated team ensures seamless travel management, handling all aspects of your corporate trips efficiently.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold">Expense Management</h3>
              <p>We offer robust expense management solutions to keep your travel costs under control and provide detailed reporting.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold">Priority Booking</h3>
              <p>Benefit from priority booking services that ensure you get the best travel arrangements and accommodations for your business needs.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p>Our team is available around the clock to assist with any travel-related inquiries or issues, providing reliable support whenever you need it.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-xl font-semibold">Custom Itineraries</h3>
              <p>We create tailored itineraries that align with your company's objectives and travel preferences, ensuring a smooth and productive trip.</p>
            </div>
          </div>
        </div>
      </div>



      {/* Reviews Section */}
      <div className="px-5 sm:px-10 py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-2xl sm:max-w-7xl">
          <h2 className="text-2xl sm:text-4xl text-center font-bold tracking-tight text-gray-700 mb-4">What Our Clients Say</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up">
              <p className="text-gray-700 italic">“It was awesome experience, driver was so supportive and punctual too. Had no issue face during the travel time.
                Fare was charged upto the market standard.
                I will recommend everyone to go with Trip-C travel for your future travels.”</p>
              <p className="text-gray-600 font-semibold mt-2">- Soumya Ranjan Rout</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-700 italic">“Thank you for a very great and friendly service. Driver was so helpful and polite. Excellent instructions
                and punctual for pickup. As a single lady travelling with small kid it was safe at night to airport and driver helped a lot to handle
                the luggage as well. Definitely we will make use of your service in future.”</p>
              <p className="text-gray-600 font-semibold mt-2">-ASWATHI KARUNAKARAN</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-700 italic">“Sridhar driving was  smooth and well maintained CAR . Overall quite  happy with the services.”</p>
              <p className="text-gray-600 font-semibold mt-2">-Sana Srikanth</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-700 italic">“Awesome service, one time pick up on time drop n we'll maintained vehicle ... very friendly driver...thanks to the team...”</p>
              <p className="text-gray-600 font-semibold mt-2">-Shilpa Raju</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white px-5 sm:px-10 py-10 sm:py-16">
        <div className="mx-auto max-w-2xl sm:max-w-7xl">
          <h2 className="text-2xl sm:text-4xl text-center font-bold tracking-tight text-gray-700 mb-4">Premium Business Travel Services</h2>

          {/* Grid for feature cards */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">

            {/* Feature card 1 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={nosurgepricing_yellow}
                alt="No Surge Pricing"
                className="h-44 w-44 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">Consistent Pricing</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                At TRIP-C, we ensure a fixed rate for our corporate travel services, eliminating unexpected costs and providing consistent and reliable pricing for all your business trips.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={automatedbookingtools}
                alt="Automated Booking Tools"
                className="h-44 w-44 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">Effortless Booking System</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                TRIP-C offers an advanced booking system that simplifies travel arrangements, streamlining the process for seamless
                coordination and efficient management between your business and our services.
              </p>
            </div>

            {/* Feature card 3 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={helpline}
                alt="24*7 Helpline"
                className="h-44 w-44 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">24*7 Helpline</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                TRIP-C provides unwavering support with our 24/7 helpline, ensuring that your queries and concerns are
                addressed promptly, no matter the time of day.
              </p>
            </div>

          </div>


          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">

            {/* Feature card 1 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={flexiblepaymentoption}
                alt="Flexible Payment Options"
                className="h-44 w-44 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">Streamlined Payment Solutions</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                TRIP-C offers flexible billing options, allowing companies to manage payments on a monthly basis instead of per transaction.
                This approach simplifies financial management and enhances efficiency.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={transparentbilling}
                alt="Transparent Billing"
                className="h-44 w-44 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2 ">Simplified Invoicing</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                TRIP-C delivers clear and concise invoices with detailed breakdowns, ensuring straightforward and transparent financial management for your corporate travel needs.
              </p>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
export default CorporateTravels;
