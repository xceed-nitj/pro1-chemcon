import CountdownTimer from "./CountdownTimer"
function SecNavbar() {
  return (
        <div
              className="mt-[56px] h-[50px] sm:hidden hidden lg:flex bg-accent-200 shadow  z-50  px-2 sm:px-4 lg:px-8 py-3 lg:space-x-8 "
            >
              <span><p className="font-bold">IIChE ChemCon 2024 | December 27-30, 2024</p></span>
              <span className='absolute right-[120px] top-[1px]'>
              <CountdownTimer />
              </span>

            </div>
  )
}
export default SecNavbar