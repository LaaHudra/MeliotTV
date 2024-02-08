import React, { useState, useEffect } from "react";

const Index = () => {
  const data = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);

  const tvlist = data.map((tv) => (
    <div class="flex w-full items-center h-[50px] border-[2px] mb-2 border-green-400">
      <div class="flex ml-2 w-[70px] h-[46px] bg-red-300">Picture</div>
      <div class="ml-10 text-white">{tv}</div>
    </div>
  ));

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
        <div class=" grid grid-cols-1 w-1/2  h-2/3 ">
          <div class="bg-black p-2 mt-10">{tvlist}</div>
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
        <div class="w-2/3 flex">
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
          <div class=" h-[500px] w-1/2  ">
            <div class="flex flex-col mr-10 ml-10 items-center p-10">
              <h2>Lorem Ipsum</h2>
              {divsData.map(({ id, name, content }) => (
                <div key={id} className="my-2 w-full border-2 border-gray-300">
                  <div
                    className="px-4 py-2  text-gray-400 w-full  cursor-pointer border-[1px] border-gray-300 "
                    onClick={() => toggleDiv(id)}
                  >
                    {openDivs.includes(id) ? (
                      <ion-icon class="mr-2" name="remove-outline"></ion-icon>
                    ) : (
                      <ion-icon class="mr-2" name="add-outline"></ion-icon>
                    )}

                    {name}
                  </div>
                  {openDivs.includes(id) && (
                    <div className="mt-2 p-4 text-[14px] text-gray-400">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-black w-full h-[220px] mt-[100px]"></footer>
    </body>
  );
};

export default Index;
