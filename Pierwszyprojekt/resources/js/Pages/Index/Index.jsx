import React, { useState, useEffect } from "react";

const Index = () => {
    const data = [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
    ];

    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState(false);

    const handleMouseLeave = () => {
        setActive(false);
        setTimeout(() => {
            setMenu(false);
        }, 400);
    };

    useEffect(() => {
        return () => {
            if (handleMouseLeave) {
                clearTimeout(handleMouseLeave);
            }
        };
    }, []);

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
                <div class="">
                    <div
                        class="w-auto p-4 h-10 border-[2px] boder-black rounded-3xl flex justify-left items-center hover:text-gray-600"
                        onMouseEnter={() => (setMenu(true), setActive(true))}
                    >
                        <ion-icon
                            id="people-outline"
                            name="people-outline"
                        ></ion-icon>
                        <div class="ml-3">LOGIN/REGISTER</div>
                    </div>
                    {menu && (
                        <div
                            class="absolute w-[220px] h-[80px] mr-10 top-[15px]  "
                            onMouseLeave={handleMouseLeave}
                        >
                            {active != false ? (
                                <div class="absolute w-[300px] h-[350px] right-[20px] top-[60px] p-4 bg-black animate-fade-in-down">
                                    <div class="flex w-full flex-col  justify-between items-center">
                                        <div class="flex w-full  h-10 justify-between items-center pb-2 border-b-[1px] border-white">
                                            <div class="text-white text-[17px]">
                                                Sign in
                                            </div>
                                            <a href="">
                                                <button class=" text-[#FFD700] text-[14px] hover:text-[#DAA520]">
                                                    Create an Account
                                                </button>
                                            </a>
                                        </div>
                                        <div class="flex flex-col w-full h-[300px]">
                                            <div class="text-white mt-4">
                                                E-mail
                                            </div>
                                            <input
                                                type="text"
                                                class="input-menu"
                                            />
                                            <div class="text-white mt-4">
                                                Password
                                            </div>
                                            <input
                                                type="password"
                                                class="input-menu"
                                            />
                                            <a href="">
                                                <button class="w-full h-10 mt-4 text-[14px] text-white bg-red-500 flex justify-center items-center">
                                                    LOG IN
                                                </button>
                                            </a>

                                            <div class="flex w-full  h-12 justify-between items-center mt-3 pb-2 ">
                                                <input
                                                    type="checkbox"
                                                    id=""
                                                    name="remeber"
                                                    value="Rememberme"
                                                />
                                                <label
                                                    for="remeber"
                                                    class="text-[13px] mr-[30px] text-white"
                                                >
                                                    Remember me
                                                </label>
                                                <a href="">
                                                    <button class=" text-[#FFD700] text-[14px] hover:text-[#DAA520]">
                                                        Lost your password?
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div class="absolute w-[300px] h-[350px] right-[20px] top-[60px] bg-black animate-fade-in-up"></div>
                            )}
                        </div>
                    )}
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
            <div class="flex justify-center items-center w-full h-auto mt-[100px] p-10 ">
                <div className="flex flex-col w-full  ">
                    {divsData.map(({ id, name, content }) => (
                        <div key={id} className="my-2 w-full">
                            <div
                                className="px-4 py-2  text-gray-400 w-full  cursor-pointer  border-b-2 border-gray-300"
                                onClick={() => toggleDiv(id)}
                            >
                                {openDivs.includes(id) ? (
                                    <ion-icon
                                        class="mr-2"
                                        name="arrow-up-circle-outline"
                                    >
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
                            {openDivs.includes(id) && (
                                <div className="mt-2 p-4 text-[14px] text-gray-400">
                                    {content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <footer class="bg-black w-full h-[220px]"></footer>
        </body>
    );
};

export default Index;
