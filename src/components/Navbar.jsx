import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { classNames } from "../../utils/styleUtils";
const solutions = [
  {
    name: "Analytics",
    href: "#",
  },
  {
    name: "Engagement",
    href: "#",
  },
  {
    name: "Security",
    href: "#",
  },
  {
    name: "Integrations",
    href: "#",
  },
  {
    name: "Automations",
    href: "#",
  },
  {
    name: "Reports",
    href: "#",
  },
];

const resources = [
  {
    name: "Help Center",
    href: "#",
  },
  {
    name: "Guides",
    href: "#",
  },
  {
    name: "Events",
    href: "#",
  },
  {
    name: "Security",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <Popover className="z-50 relative color-white max-w-7xl mx-auto">
      <div className="flex items-center p-6 md:justify-start md:space-x-10">
        {/* Desktop Logo */}
        <div className="flex items-center justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img className="mr-16 h-14 w-auto" src="/logo.png" alt="Logo" />
          </a>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-800 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
              <span className="absolute -inset-0.5" />
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-300",
                      "group inline-flex items-center rounded-md text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 px-2"
                    )}
                  >
                    <span className="font-bold text-xl">Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-gray-300",
                        "ml-2 h-5 w-5 group-hover:translate-y-0.5 transition ease-in-out duration-150"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative flex flex-col gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6">
                          {solutions.map((solution) => (
                            <a
                              key={solution.name}
                              href={solution.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100"
                            >
                              <p className="text-sm font-medium text-gray-900">
                                {solution.name}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium lg:font-bold lg:text-xl text-gray-300 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base font-medium lg:font-bold lg:text-xl text-gray-300 hover:text-white"
            >
              Docs
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-300",
                      "group inline-flex items-center rounded-md text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 px-2"
                    )}
                  >
                    <span className="lg:font-bold lg:text-xl" >More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-gray-300",
                        "ml-2 h-5 w-5 group-hover:translate-y-0.5 transition ease-in-out duration-150"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative flex flex-col gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-6">
                          {resources.map((resource) => (
                            <a
                              key={resource.name}
                              href={resource.href}
                              className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                            >
                              <p className="text-sm font-medium text-gray-900">
                                {resource.name}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

        </div>

        {/* Mobile nav toggle button */}


        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          {/* <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-white"
          >
            Sign in
          </a> */}
          {/* <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-gray-950 shadow-sm hover:bg-amber-700"
          >
            Register
          </a> */}
          <a href="#">
            <img className="h-14 w-auto" src="/logo.png" alt="Logo" />
          </a>
          <a href="#">
            <img className="h-14 w-auto ml-16" src="/logo.png" alt="Logo" />
          </a>
          <a href="#">
            <img className="h-14 w-auto ml-16" src="/logo.png" alt="Logo" />
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-10 absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/vite.svg" alt="Logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                    <span className="absolute -inset-0.5" />
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-amber-600 hover:text-amber-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
