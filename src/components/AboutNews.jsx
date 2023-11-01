import { React, useState } from 'react';

function AboutNews() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const dummyData = [
        {
            id: 1,
            title1: 'Tentative Presentation Slot',
            description: "A Tentative Presentation Slot for the Technical Sessions is published under 'Technical Sessions' for future reference.",
        },
        {
            id: 2,
            title1: 'Full Paper Template',
            description: 'The Full Paper Template is available now on the website under the abstract menu. The Full paper submission link is open.',
        },
        {
            id: 3,
            title1: 'Registration Process',
            description: 'All presenting authors need to register individually for a single paper.',
        },
        {
            id: 4,
            title1: 'Book Volume: IIChE-CHEMCON 2023',
            description: 'Following are the details of the book volume, to be published by IIChE. Book Name: Energy Transition: Challenges & Opportunities, CHEMCON 2023 ISBN Number: 978-93-100-0071-9',
        },
        {
            id: 5,
            title1: 'Announcement: Changes in Important Dates',
            description: 'The last date for abstract submission has been extended to September 30, 2023. The acceptance Notification date has been extended to October 5, 2023. The last date for full-paper submission has been extended to October 20, 2023. The last date for registration has been changed to October 15, 2023.',
        },
    ];

    return (
        <div className='flex flex-col lg:flex-row lg:justify-evenly mt-5 mx-7 lg:mx-15 cursor-default'  >
            <div className='w-full lg:w-3/5 lg:px-5 max-w-[450px] max-h-[400px] lg:max-w-full mx-auto '>
                <p className='text-4xl font-sans font-bold text-center drop-shadow-md  text-yellow-400 mb-3 lg:mb-5 '>About</p>
                <div className='border-yellow-400 border-t-2 pt-3'>
                <p className="text-base   font-sans font-medium hover:font-semibold text-gray-600 hover:text-gray-800  hover:drop-shadow-sm text-justify indent-8 ">Indian Institute of Chemical Engineers (IIChE) is a national body of professional chemical engineers with 32000 members across the country with 46 Regional Centres as well as 182 Student Chapters, began its journey on May 18, 1947 under the great visionary, nationalist and pioneer of Chemical Engineering Education in India, Dr H L Roy. We have around 46 Life Organizational Members in industries and 48 Life Organizational Members in academics and R&D Institutes as well.</p>
                </div>
            </div>
            <div className='w-full lg:w-2/5 max-w-[450px] h-[400px] mt-10 lg:mt-0 mx-auto lg:px-5 '  >
                <p className=' text-4xl font-sans font-bold text-center drop-shadow-md text-yellow-300 mb-3 lg:mb-5 '>News</p>
                <div id='news'   className={`h-[360px] border-gray-600 border-t-2 ${isMouseOver ? ' overflow-auto ' : 'overflow-hidden'}`}>
                    <div  className={`${isMouseOver ? 'animate-none' : 'animate-wiggle'}`} onMouseOver={() => setIsMouseOver(true)}
                        onMouseOut={() => setIsMouseOver(false)}>
                        {dummyData.map(item => (
                            <div key={item.id} className="p-2 m-4 flex shadow-sm shadow-yellow-200  hover:shadow-md rounded-xl  hover:shadow-yellow-400 ">
                                <div className='inline mr-5 my-4'>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 stroke-yellow-400 animate-ping-slow">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                    </svg>

                                </div>
                                <div className=''>
                                    <p className="text-xl font-medium font-sans text-yellow-400 ">{item.title1}</p>
                                    <p className="text-base  text-justify  font-semibold font-sans text-gray-700 ">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutNews;
