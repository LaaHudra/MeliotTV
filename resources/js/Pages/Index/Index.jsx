import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ countries }) => {
  const [openDivs, setOpenDivs] = useState([]);

  const toggleDiv = (id) => {
    setOpenDivs(
      openDivs.includes(id)
        ? openDivs.filter((i) => i !== id)
        : [...openDivs, id]
    );
  };

  const divsData = [
    { id: 1, name: "Lorem Ipsum", content: "Lorem Ipsum 1" },
    { id: 2, name: "Lorem Ipsum", content: "Lorem Ipsum 2" },
  ];

  const aboutUs = [
    { id: 1, name: "Lorem Ipsum", content: "Lorem Ipsum 1" },
    { id: 2, name: "Lorem Ipsum", content: "Lorem Ipsum 2" },
    { id: 3, name: "Lorem Ipsum", content: "Lorem Ipsum 3" },
  ];

  const [channels, setChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCountrySelect = async (country_id) => {
    const response = await fetch(`/?country_id=${country_id}`);
    const channels = await response.json();

    setChannels(channels);
  };

  return (
    <body>
      <nav class="flex flex-row justify-between items-center w-full h-20  gap-4 pr-[120px] pl-[120px]">
        <div class="flex w-[200px] h-10 bg-purple-500  items-center justify-center">
          Logo
        </div>
        <div class="flex w-auto h-10  ">
          <div class="w-auto h-10 flex items-center justify-center ml-4 mr-4 ">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
          <div class="w-auto h-10 flex items-center justify-center ml-4 mr-4 ">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
          <div class="w-auto h-10 flex items-center justify-center ml-4 mr-4 ">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
          <div class="w-auto h-10 flex items-center justify-center ml-4 mr-4 ">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
          <div class="w-auto h-10 flex items-center justify-center ml-4 mr-4 ">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
          <div class="w-auto h-10 flex items-center justify-center ml-4 mr-4 ">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
          <div class="w-auto h-10 flex items-center justify-center bg-yellow-400 rounded-[25px] p-4">
            <div class="hover:text-gray-500 underline-animation underline-offset-8	">
              Lorem Ipsum
            </div>
          </div>
        </div>
      </nav>
      <div class="flex flex-row bg-red-500 w-full h-[100px] justify-center items-center">
        Picture
      </div>
      <div class="flex justify-center  w-full h-full">
        <div class=" grid grid-cols-1 w-2/3  h-2/3 ">
          <div class="bg-black p-2 mt-10 text-white">
            <div>
              <div className="flex w-full h-[800px] ">
                <ul className="flex flex-col w-1/2 overflow-auto">
                  <li class="text-[26px] m-1 p-[18px]  text-left">
                    Categories
                  </li>

                  <input
                    type="text"
                    placeholder="Search for content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    class="m-1 bg-transparent border-none text-left"
                  />

                  {countries
                    .filter((country) =>
                      country.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((country) => (
                      <li
                        key={country.id}
                        class="m-1 p-[18px] border-b border-gray-800 last:border-b-0 text-left"
                        onClick={() => handleCountrySelect(country.id)}
                      >
                        {country.name}
                      </li>
                    ))}
                </ul>
                <ul class="flex flex-col w-1/2 overflow-auto">
                  {channels.map((channel) => (
                    <li
                      key={channel.id}
                      class="m-1 p-[18px] border-b border-gray-800 last:border-b-0 flex items-center"
                    >
                      <img
                        src={channel.logo}
                        alt="Channel Logo"
                        className="h-8"
                      />
                      <div className="ml-3">{channel.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center w-full h-auto mt-[20px] p-10 ">
        <div className="flex flex-col w-full  ">
          {aboutUs.map(({ id, name, content }) => (
            <div key={id} className="my-2 w-full">
              <div
                className="px-4 py-2  text-gray-400 w-full  cursor-pointer  border-b-2 border-gray-300"
                onClick={() => toggleDiv(id)}
              >
                {openDivs.includes(id) ? (
                  <ion-icon class="mr-2" name="arrow-up-circle-outline">
                    {" "}
                  </ion-icon>
                ) : (
                  <ion-icon
                    name="arrow-down-circle-outline"
                    class="mr-2"
                  ></ion-icon>
                )}

                {name}
              </div>
              {aboutUs.includes(id) && (
                <div className="mt-2 p-4 text-[14px] text-gray-400">
                  {content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div class=" w-full h-[500px] mt-[20px]  flex justify-center items-center">
        <div class="w-2/3 flex justify-center">
          <div class=" h-[500px] w-1/2  ">
            <div class="flex flex-col mr-10 ml-10 items-center p-10">
              <h2>Contat us</h2>
              <a class="mb-4">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </a>
              <input
                class="input-normal  w-full"
                type="text"
                placeholder="Lorem Ipsum"
              ></input>
              <input
                class="input-normal w-full"
                type="text"
                placeholder="Lorem Ipsum"
              ></input>
              <input
                class="input-normal w-full"
                type="text"
                placeholder="Lorem Ipsum"
              ></input>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                class="input-normal w-full "
                placeholder="Lorem Ipsum"
              ></textarea>
              <button class="uppercase w-full h-[40px] mt-[15px] bg-black text-white">
                send
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-black w-full h-[220px] mt-[100px]"></footer>
    </body>
  );
};

export default Index;
