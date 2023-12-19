import React from 'react'

const PersonalPortfolio = () => {
    return (
        <div className='h-screen max-h-[40vh]'>
            <h1>Personal Portfolio</h1>
            <div className='flex items-center justify-center gap-10'>
            <div className='max-w-2xl'>
            A professional website is a digital representation of a company or individual and is essential for establishing a strong online presence. Doledge offers a professional website service that can help businesses and individuals showcase their products and services effectively. Their websites are designed with user experience in mind and are optimized for search engines to ensure maximum visibility and engagement. The service also includes custom graphics and content creation to ensure that the website accurately reflects the brand and its values.
            In addition, Doledge's professional website service includes ongoing support and maintenance to keep the website running smoothly and ensure that it stays up-to-date with the latest technologies and trends. Whether you need a simple brochure-style website or a complex e-commerce platform, Doledge's professional website service has you covered. Their team of experts will work closely with you to understand your unique requirements and create a website that meets your needs and exceeds your expectations.
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow w-[15%]">
                <div className='bg-[#f58634] rounded-t-lg text-lg'>Personal Portfolio</div>
                <br/>
                <div class="mb-3 font-normal text-2xl">₹98500</div>
                <div class="mb-3 font-normal text-2xl">(inclusive of all taxes)</div>
                    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Buy Now
                    </div>
                    <br/><br/>
                </div>
            </div>
        </div>
      )
}

export default PersonalPortfolio