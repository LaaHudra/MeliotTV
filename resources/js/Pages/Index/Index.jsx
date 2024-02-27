import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ input }) => {
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
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    console.log(input)
    // Check if `input` is defined and not null
    if (input !== undefined && input !== null) {
      setCountries(input);
    }
  }, [input]); // Dependency array, this effect runs whenever `input` changes
  
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchTerm) {
        setIsSearching(true);
        fetch(`/index/search?query=${encodeURIComponent(searchTerm)}`)
            .then(response => response.json())
            .then(data => {
              setIsSearching(false);
              setChannels(data.channels)
              setCountries(data.countries)
              console.log(data); // Process your search results here
            })
            .catch(error => {
              setIsSearching(false);
              console.error('Error fetching search results:', error);
            });
      }
    }, 500); // Adjust debounce time as needed
    
    return () => clearTimeout(timerId); // Cleanup timeout on component unmount or when searchTerm changes
  }, [searchTerm]);
  
  const handleCountrySelect = async (country_id) => {
    const response = await fetch(`/?country_id=${country_id}`);
    const channels = await response.json();

    setChannels(channels);
  };
  
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('#menu');
    mobileMenu.classList.toggle('max-lg:hidden');
  }

  return (
    <body>
      <nav className="flex flex-row justify-between items-center w-full my-3 gap-4 container mx-auto relative">
        <div className="flex w-[200px] bg-purple-500  items-center justify-center">
          <img alt={'logo'} src={'/images/logo.jpg'} />
        </div>
        <div className="flex w-auto">
          <div className={'lg:hidden'}>
            <a href={'#'} className={'!text-white underline-animation underline-offset-8'}
               onClick={() => toggleMobileMenu()}
            >
              <img alt={'logo'} src={'/images/hamburger.svg'} className={'w-12'}/>
            </a>
          </div>
          <div id="menu" className="max-lg:hidden max-lg:flex max-lg:flex-col max-lg:w-1/3  max-lg:h-full max-lg:mx-0 max-lg:bg-white max-lg:fixed max-lg:top-0 max-lg:right-0 w-auto h-10 flex items-center justify-center ml-4 mr-4 gap-10 relative">
            <div className={'cursor-pointer p-6 absolute top-2 right-2 text-2xl lg:hidden'} onClick={() => toggleMobileMenu()}>
              X
            </div>
            <a href="#channel-list" className="text-white max-lg:text-black underline-animation underline-offset-8	">
              Channel List
            </a>
            <a href="#faq" className="text-white max-lg:text-black underline-animation underline-offset-8	">
              FAQ
            </a>
            <a href="#contact-us" className="text-white max-lg:text-black underline-animation underline-offset-8	">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <div id="channel-list" className="flex justify-center w-full h-full">
        <div className=" grid grid-cols-1 container  h-2/3 ">
          <div className="bg-black bg-opacity-75 p-2 mt-10 text-white">
            <div>
              <input
                  type="text"
                  placeholder="Search for content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mb-2 bg-transparent border-none text-left w-full bg-white bg-opacity-50"
              />
              <div className="max-md:flex-col max-md:gap-4 flex w-full h-[800px] ">
                <ul className="flex flex-col max-md:w-full max-md:h-1/2 w-1/3 overflow-auto">
                  <li className="text-[24px] m-1 p-[18px]  text-left flex items-center">
                    <p>Categories</p>
                    <p className="ml-4 bg-[#535353] p-1 rounded-xl justify-center">
                      {countries.length}
                    </p>
                  </li>
                  
                  {countries
                      .filter((country) =>
                          true
                      )
                      .map((country) => (
                          <li
                              key={country.id}
                              className="m-1 p-[18px] border-b border-gray-900 last:border-b-0 text-left cursor-pointer"
                              onClick={() => handleCountrySelect(country.id)}
                          >
                            {country.name}
                          </li>
                      ))}
                </ul>
                <ul className="flex flex-col max-md:w-full max-md:h-1/2 w-2/3 overflow-auto max-md:border-t-2 max-md:border-white">
                  <li className="text-[24px] m-1 p-[18px]  text-left flex items-center">
                    <p>Channels</p>
                    <p className="ml-4 bg-[#535353] p-1 rounded-xl justify-center">
                      {channels.length}
                    </p>
                  </li>
                  {channels.map((channel) => (
                      <li
                          key={channel.id}
                          className="m-1 p-[18px] border-b border-gray-900 last:border-b-0 flex items-center"
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
      <div className="flex mx-auto max-w-screen-md justify-center items-center w-full h-auto py-16 ">
        <div className="flex flex-col w-full  ">
          {aboutUs.map(({id, name, content}) => (
              <div key={id} className="my-2 w-full">
              <div
                className="px-4 py-2  text-gray-400 w-full  cursor-pointer  border-b-2 border-gray-300"
                onClick={() => toggleDiv(id)}
              >
                {openDivs.includes(id) ? (
                  <ion-icon className="mr-2" name="arrow-up-circle-outline">
                    {"Answer"}
                  </ion-icon>
                ) : (
                  <ion-icon
                    name="arrow-down-circle-outline"
                    className="mr-2"
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
      
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
            Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a
            technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us
            know.</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                email</label>
              <input type="email" id="email"
                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                     placeholder="name@flowbite.com" required/>
            </div>
            <div>
              <label htmlFor="subject"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject"
                     className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                     placeholder="Let us know how we can help you" required/>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                message</label>
              <textarea id="message" rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit"
                    className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
              message
            </button>
          </form>
        </div>
      </section>
    </body>
  );
};

export default Index;
