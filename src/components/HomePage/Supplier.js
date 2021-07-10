import React from "react";
import Footer from "../Footer/Footer";

function Supplier() {
  return (
    <div>
      <div>
        <div class="flex flex-col bg-white w-ful h-32 justify-center mt-8">
          <div class="text-center text-6xl font-bold font-serif ">
            Medical Supplier
          </div>
        </div>
      </div>

      <div class="flex bg-white h-64 justify-center w-full space-x-10">
        <div class="flex-row h-32 w-1/2 bg-white border-8 mt-12 rounded-full">
          <div class="rounded-full w-12 h-12 text-xl text-white bg-black font-black flex justify-center item-center absolute ml-11 mt-8">
            <div class="text-center mt-2">1</div>
          </div>
          <div class="text-center font-serif text-5xl mt-8 text-blue-600">
            List Medicine Online
          </div>
        </div>

        <div class="flex-row h-32 w-1/2 bg-white border-8 mt-12 rounded-full">
          <div class="rounded-full w-12 h-12 text-xl text-white bg-black font-black flex justify-center item-center absolute ml-11 mt-8">
            <div class="text-center mt-2">2</div>
          </div>
          <div class="text-center font-serif text-5xl mt-8 text-blue-600">
            List Medicine Online
          </div>
        </div>
      </div>

      <div>
        <div class="flex bg-white justify-center -mt-20 mb-56">
          <div class="flex-col h-32 w-2/3 bg-white border-8 mt-12 rounded-full">
            <div class="rounded-full w-12 h-12 text-xl text-white bg-black font-black flex justify-center item-center absolute ml-11 mt-8">
              <div class="text-center mt-2">3</div>
            </div>
            <div class="text-center text-5xl font-serif mt-8 text-blue-600">
              Send Medicine To pharmacy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Supplier;
