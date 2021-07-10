import React from "react";
import { Link } from "react-router-dom";
import Example from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div class="bg-white py-24  >">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap items-center px-6 sm:px-0">
            <div class="w-full sm:w-1/2 order-last sm:order-first">
              <h1 class="text-5xl font-poppins font-bold mb-4">
                Sell your products hustle free
              </h1>
              <h4 class="text-xl text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                culpa deleniti dolore id maiores mollitia natus nesciunt quod
                sapiente sequi!
              </h4>
            </div>
            <div class="w-full sm:w-1/2 flex justify-center">
              <img
                class="w-2/3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Q16917-hospital.svg/580px-Q16917-hospital.svg.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row md:flex-row my-8 justify-center pt-12 pb-12">
        <div class="flex text-center mr-8 ">
          <Link to="/Consumer">
            <button class="rounded-full bg-blue-600 w-64 h-24 text-white font-bold font-serif text-xl transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
              Supplier
            </button>
          </Link>
        </div>
        <div class="flex text-center w-64 h-24 ml-72">
          <button class="rounded-full bg-blue-600 w-64 h-24 text-white font-bold font-serif text-xl transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
            Pharmacies
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
