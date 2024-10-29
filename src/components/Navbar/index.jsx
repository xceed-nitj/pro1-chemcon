import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import TopNavInfo from "./TopNavInfo";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import { IoMdHome } from "react-icons/io"; <IoMdHome className="h-6 w-6" />

const navigation = [
  { name: "Home"    , href: "/", current: true },
  { name: "Publication Partners", href: "", current: false,
    subItems: [
      { name: "Springer-Biomass Conversion and Biorefinery", href: "https://chemcon2024.com/news/66d12dad9bc0213cd4814a4d " },
      { name: "Taylor & Francis - Indian Chemical Engineer", href: "https://chemcon2024.com/news/66d12dad9bc0213cd4814a4d " },
      { name: "Elsvier-Chemical Engineering and processing - Processes Intensification", href: "https://chemcon2024.com/news/66d12dad9bc0213cd4814a4d " }

    ],
   },
  { name: "Events", href: "/events", current: false },
  { name: "Sponsors", href: "/sponsorship", current: false },
  {
    name: "Committees",
    href: "",
    current: false,
    subItems: [
      { name: "National Organising Committee", href: "/nationalcommittee" },
      { name: "Local Organising Committee", href: "/localcommittee" },
    ],
  },
  {
    name: "Joint symposium",
    href: "",
    current: false,
    subItems: [
      { name: "US symposium", href: "" },
      { name: "Indo-Canadian symposium", href: "" },
    ],
  },
  { name: "Location", href: "/location", current: false },
  { name: "Accommodation", href: "/accommodation", current: false,
    subItems: [
      { name: "Hotels in Jalandhar", href: "/accommodation" },   //here update link afterwards
      { name: "Hostel accomodation for UG/PG Students", href: "/accommodation" },

    ],

  },
  
  { name: "Registration", href: "", current: false,
    subItems: [
      { name: "Registration Fee", href: "/registrationfee" },
      { name: "Registration Link", href: "/registrationlink" },
      { name: "Frequently Asked Questions (FAQ)", href: "/registrationfaq" },

    ],
   },
  { name: "Souvenir", href: "/souvenir", current: false },

 { name: "FAQs", href: "/registrationfaq",current: false},

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [currentNavigation, setCurrentNavigation] = useState(navigation);
  const location = useLocation();

  useEffect(() => {
    // Update the "current" property of navigation items based on the current route
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: location.pathname.endsWith(item.href),
    }));

    setCurrentNavigation(updatedNavigation);
  }, [location.pathname]);

  return (
    <div>
      <Disclosure as="header" className="bg-accent-200 shadow">
        {({ open }) => (
          <>
            <div className="mx-auto">
              <div className="relative px-2 sm:px-4 lg:px-8 flex h-14 bg-accent-500 justify-between items-center">
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-accent-400 hover:text-accent-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center font-bold gap-3">
                  <TopNavInfo
                    className="hidden xl:flex"
                    icon={<PhoneIcon className="h-5 w-5" />}
                    value="+91-9815909328"
                  />
                  <TopNavInfo className="mr-4 lg:mr-0"
                    icon={<EnvelopeIcon className="h-5 w-5 "  />}
                    value="chemcon2024@gmail.com"
                  />
                </div>
                <nav className="hidden lg:flex" aria-label="Global">
                  {currentNavigation.map((item) => (
                    <div key={item.name} className="relative group">
                      {item.subItems ? (
                        <>
                          <Link
                            to={item.href}
                            className="inline-flex items-center rounded-md py-2 px-2 text-xs text-white uppercase hover:bg-accent-400 font-semibold"
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                          <div className="absolute left-0 hidden mt-0 w-48 origin-top-left bg-accent-100 shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                            <div className="py-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-accent-800 hover:bg-accent-500 hover:text-white"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="inline-flex items-center rounded-md py-2 px-2 text-xs text-white uppercase hover:bg-accent-400 font-semibold"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {currentNavigation.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                                "block w-full rounded-md py-2 px-3 text-base font-medium text-left flex justify-between items-center"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              <span>{item.name}</span>
                              <svg
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "w-5 h-5"
                                )}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block pl-8 pr-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "block w-full rounded-md py-2 px-3 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
