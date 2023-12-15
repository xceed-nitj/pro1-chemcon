export default function Timeline() {
  return (
    <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4">Timeline</h2>
        <h3 className="text-xl font-medium leading-relaxed text-gray-800 lg:w-2/3 mx-auto">
          Schedule of our events, conferences and meetups. Be sure to check back
          often for new events!
        </h3>
      </div>
      <div className="relative py-5">
        <div
          className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6"
          aria-hidden="true"
        >
          <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-accent-100 rounded-t" />
          <div className="mx-auto w-1 grow bg-accent-100" />
          <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-accent-100 rounded-b" />
        </div>

        <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
          <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
              <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
            </div>
            <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
              <h4 className="font-semibold mb-2">3.0 update is now live!</h4>
              <p className="text-sm leading-relaxed">
                It&apos;s finally here are comes packed with many awesome
                features. Be sure to{" "}
                <a
                  href="#"
                  className="font-medium text-accent-600 hover:text-accent-400"
                >
                  download it
                </a>{" "}
                and let us know
                <a
                  href="#"
                  className="font-medium text-accent-600 hover:text-accent-400"
                >
                  what you think
                </a>
                !
              </p>
            </div>
            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
              <p className="font-medium text-sm text-gray-500">
                February 01, 2023
              </p>
            </div>
          </li>

          <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
              <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
            </div>
            <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Maintenance notice</h4>
              <p className="text-sm leading-relaxed">
                We are going to apply some security fixes next week. Please
                check out the{" "}
                <a
                  href="#"
                  className="font-medium text-accent-600 hover:text-accent-400"
                >
                  schedule
                </a>{" "}
                for more information about any downtime.
              </p>
            </div>
            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
              <p className="font-medium text-sm text-gray-500">
                January 22, 2023
              </p>
            </div>
          </li>

          <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
              <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
            </div>
            <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
              <h4 className="font-semibold mb-2">
                We reached 3,500 paying users
              </h4>
              <p className="text-sm leading-relaxed">
                Thank you all so much for your support!
              </p>
            </div>
            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
              <p className="font-medium text-sm text-gray-500">
                January 02, 2023
              </p>
            </div>
          </li>

          <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
              <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
            </div>
            <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
              <h4 className="font-semibold mb-2">
                Beta registrations are now open
              </h4>
              <p className="text-sm leading-relaxed">
                We are going to be beta testing our 3.0 release. Be sure to{" "}
                <a
                  href="#"
                  className="font-medium text-accent-600 hover:text-accent-400"
                >
                  register
                </a>{" "}
                for a chance to participate and check out all the new features
                before everyone else.
              </p>
            </div>
            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
              <p className="font-medium text-sm text-gray-500">
                December 20, 2022
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
