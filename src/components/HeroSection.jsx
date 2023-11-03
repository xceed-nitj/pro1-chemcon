

function HeroSection() {
    return (
        <div className="relative  lg:h-[100vh] sm:h-[50vh] h-[30vh] bg-[#1E1E1E] w-full" >
            <div className="absolute right-0">
                <img src="/background.png" className="lg:h-[100vh] sm:h-[50vh] h-[30vh]" />
                <div className="h-[110%] w-[110%] absolute top-[70%] left-[-35%] -translate-y-[50%] ">
                    <div>
                        <img src="/hero-img.png" className="rounded-[50%] ring-offset-1 ring-gray-100 ring md:p-2 p-1 " />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-[55%]  justify-center  flex flex-col md:text-center md:pt-12 py-2 px-4 md:gap-10 gap-3 text-white">
                <h1 className="lg:text-5xl md:4xl font-bold">IIChE ChemCon 2024</h1>
                <div className=" space-y-4">
                    <p className="lg:text-xl text-sm">An International Conference</p>
                    <p className="lg:text-4xl md:text-xl md:font-bold font-medium text-[#FFBE00] text-sm">Energy Transition: Challenges and Opportunities </p>
                </div>
                <p className="lg:text-2xl  font semi-bold">January 27-30, 2024</p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection