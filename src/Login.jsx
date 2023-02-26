import React, { Component } from "react";
import Logo from "./assets/usd.png";
import  {useState,useEffect} from'react';
export default function Login(props) {
  return (
    <section class="bg-gray-50 h-screen dark:bg-gray-900 flex">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Audit Sampah Universitas Sanata Dharma
        </div>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" >
              <div>
                <label
                  for="text"
                  class="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white"
                >
                  NIM
                </label>
                <input
                
                  value={props.nim}
                  onChange={props.handleNim}
                  type="text"
                  name="nim"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: 195314174"
                  required=""
                />
              </div>
              <button
                onClick={props.handleLogin}
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  }