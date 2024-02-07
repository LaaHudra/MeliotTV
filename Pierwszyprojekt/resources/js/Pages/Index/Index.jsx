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
        }, 200);
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
                                <div class="absolute w-[300px] h-[200px] right-[20px] top-[60px] bg-black animate-fade-in-down"></div>
                            ) : (
                                <div class="absolute w-[300px] h-[200px] right-[20px] top-[60px] bg-black animate-fade-in-up"></div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
            <div class="flex flex-row bg-red-500 w-full h-[100px] justify-center items-center">
                Picture
            </div>
            <div class="flex justify-center  w-full custom-height">
                <div class=" grid grid-cols-1 w-1/2  h-2/3 ">
                    <div class="bg-black p-2 mt-10">{tvlist}</div>
                </div>
            </div>
            <footer class="bg-black w-full h-[220px]"></footer>
        </body>
    );
};

export default Index;
