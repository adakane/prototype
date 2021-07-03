import React from "react";
import Link from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div class="bg-white py-52  >">
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
    </div>
  );
};

export default HomePage;
