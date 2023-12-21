import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import TopNavInfo from "./TopNavInfo";
import {  Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimer";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Events", href: "/events", current: false },
  { name: "Sponsors", href: "/sponsorship", current: false },
  { name: "Committees", href: "/committee", current: false },

  { name: "Location", href: "/location", current: false },
  { name: "Accommodation", href: "/accommodation", current: false },
  { name: "Souvenir", href: "/souvenir", current: false },
  { name: "Reg.-Fee", href: "/registration", current: false },


];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="header" className="bg-accent-200 shadow ">
      {({ open }) => (
        <>
          <div className="mx-auto  ">
            <div className="relative px-2 sm:px-4 lg:px-8 flex h-16 bg-accent-500 justify-between items-center">
              <div className="relative z-10 flex items-center lg:hidden ">
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
              <div className="flex items-center font-bold gap-4">
                <TopNavInfo
                  className="hidden md:flex"
                  icon={<PhoneIcon className="h-5 w-5" />}
                  value="+91-9888895253"
                />
                <TopNavInfo
                  icon={<EnvelopeIcon className="h-5 w-5" />}
                  value="chemcon2024@gmail.com"
                />
              </div>
              <nav className="hidden lg:flex" aria-label="Global">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="inline-flex items-center rounded-md py-2 px-2 text-xs text-white uppercase hover:bg-accent-400 font-semibold"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div
              className="hidden lg:flex px-2 sm:px-4 lg:px-8 lg:space-x-8 lg:py-4"
              aria-label="Global"
            >
              <span><p className="font-bold">IIChE ChemCon 2024 | December 27-30, 2024</p></span>
              <span className='fixed right-[120px] top-[68px]'>
                <CountdownTimer />
              </span>

            </div>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
