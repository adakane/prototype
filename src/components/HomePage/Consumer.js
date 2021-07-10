import React from "react";
import Link from "react-router-dom";
import Example from "../Navbar/Navbar";

function Consumer() {
  return (
    <div>
      <Example />
      <div class="flex flex-col justify-center m-auto">
        <div class="flex md:flex-row flex-col bg-teal-200 justify-center md:text-left text-center">
          <div class="flex flex-col justify-center items-center relative">
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full  border-black border-teal-300 border-dashed"></div>
            </div>
            <div class="rounded-full w-12 h-12 text-xl text-white bg-black font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
              1
            </div>
            <img
              alt="step1"
              class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
              src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
            />
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full border-r-4 border-teal-300 border-black border-dashed"></div>
            </div>
          </div>
          <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-teal-200">
            <div class="text-xl uppercase font-bold text-black">
              Step 1 - Sign Up
            </div>
            <div class="md:text-xl text-xl  text-teal-700">
              Create an account
            </div>
            <div class="mt-4 text-black font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facilis, voluptates error alias dolorem praesentium sit soluta
              iure incidunt labore explicabo eaque, quia architecto veritatis
              dolores, enim consequatur nihil ipsum.
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col bg-white justify-center md:text-left text-center">
          <div class="flex flex-col justify-center items-center relative">
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full border-r-4 border-black border-dashed"></div>
            </div>
            <div class="rounded-full w-12 h-12 text-xl text-white bg-black font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
              2
            </div>
            <img
              alt="step2"
              class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
              src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
            />
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full border-r-4  border-black  border-dashed"></div>
            </div>
          </div>
          <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-orange-200">
            <div class="text-xl uppercase font-bold text-black">
              Step 2 - Enter your details
            </div>
            <div class="md:text-xl text-xl  text-orange-700">
              Enter your Pharmacy details
            </div>
            <div class="mt-4 text-black font-serif ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facilis, voluptates error alias dolorem praesentium sit soluta
              iure incidunt labore explicabo eaque, quia architecto veritatis
              dolores, enim consequatur nihil ipsum.
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col bg-white justify-center md:text-left text-center">
          <div class="flex flex-col justify-center items-center relative">
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full border-r-4 border-black border-dashed"></div>
            </div>
            <div class="rounded-full w-12 h-12 text-xl text-indigo-100 bg-black font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
              3
            </div>
            <img
              alt="step3"
              class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
              src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
            />
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full border-r-4 border-black border-dashed"></div>
            </div>
          </div>
          <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-white">
            <div class="text-xl uppercase font-bold text-black">
              Step 3 - Find your medication
            </div>
            <div class="md:text-xl text-xl text-black">
              Make a good plan and prepare tasks
            </div>
            <div class="mt-4 text-black  font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facilis, voluptates error alias dolorem praesentium sit soluta
              iure incidunt labore explicabo eaque, quia architecto veritatis
              dolores, enim consequatur nihil ipsum.
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col bg-white justify-center md:text-left text-center">
          <div class="flex flex-col justify-center items-center relative">
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full border-r-4 border-black border-dashed"></div>
            </div>
            <div class="rounded-full w-12 h-12 text-xl text-pink-100 bg-black font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">
              4
            </div>
            <img
              alt="step4"
              class="w-56 h-56 rounded-full shadow my-5 object-scale-down"
              src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
            />
            <div class="w-56 h-12 md:flex hidden justify-center">
              <div class="h-full  border-pink-300 border-dashed"></div>
            </div>
          </div>
          <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-white">
            <div class="text-xl uppercase font-bold text-black">
              Step 4 - Shop and Save Time
            </div>
            <div class="md:text-1xl text-xl  text-black ">
              Execute, impletement your solution
            </div>
            <div class="mt-4 text-black  font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facilis, voluptates error alias dolorem praesentium sit soluta
              iure incidunt labore explicabo eaque, quia architecto veritatis
              dolores, enim consequatur nihil ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consumer;
