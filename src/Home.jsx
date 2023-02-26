import React, { Component } from "react";
import Logo from "./assets/usd.png";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [mahasiswa, setMahasiswa] = useState(props.mahasiswa);
  const [sampah,setSampah]=useState({
    'kertas':0,
    'elektronik':0,
    'plastik':0,
    'bungkus':0,
    'baju':0,
    'botol':0,
    'konsumsi':0,
    'disposable':0,
    'organik':0,
    'makanan':0,
    'kendaraan':0
  });
  
  const handleMahasiswaChanged=index=>e=>{
    let newSampah={...sampah};
    newSampah[index]=e.target.valueAsNumber;
    setSampah(newSampah);
  }
  const handleSubmit=()=>{
    let newMahasiswa={...mahasiswa};
    let newSampah={...sampah};
    Object.keys(sampah).forEach((item)=>{
      newMahasiswa.sampah[item]=newMahasiswa.sampah[item]+sampah[item];
      sampah[item]=0;
    });
    setMahasiswa(newMahasiswa);
    props.updateData(newMahasiswa.sampah,newSampah);
  }
  return (
    <>
      <section className="pt-10 lg:pt-10 bg-gray-50 dark:bg-gray-900 lg:h-screen h-auto">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-10 lg:w-2/5 mb-10 lg:mb-0">
              <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src={Logo} alt="logo" />
                Audit Sampah {props.nim}
              </div>
              <div class="w-full bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 justify-center">
                  <h1 class="text-xl font-bold text-start leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Daftar Sampah
                  </h1>
                  <div className="flex flex-wrap justify-start">
                    <ul class="space-y-4 w-full text-gray-500 dark:text-gray-400">
                      {Object.entries(mahasiswa.sampah).map((item) => (
                        <>
                          <li class="flex items-center space-x-3 justify-between">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>{item[0].toUpperCase()}</span>
                            <span className="text-center">{item[1]}</span>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full self-center px-6 lg:px-4 lg:w-3/5">
              <div className=" flex flex-wrap rounded-lg py-8 px-5 bg-white shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
                <h1 class="text-xl font-bold text-start leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Input Sampah
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {Object.entries(sampah).map((item) => (
                    <div className="m-4">
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {item[0].toUpperCase()}
                      </label>
                      <input
                      onChange={handleMahasiswaChanged(item[0])}
                      min={0}
                      name={item[0]}
                      value={item[1]}
                        type="number"
                        id={item[0]}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                  ))}
                </div>
                <button
                onClick={handleSubmit}
                  type="button"
                  class=" mt-12 ml-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Input Sampah
                </button>
                <button
                onClick={props.handleLogout}
                  type="button"
                  class=" mt-12 ml-5  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
