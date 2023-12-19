import React from 'react'

const TdStyle = {
    ThStyle: `w-1/3 min-w-[60px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 text-center text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
  }
  


const ResumeDeliveryTime = () => {
  return (
    <div className='flex justify-center align-center'>
         <section className='bg-white dark:bg-dark py-5 lg:py-[120px]'>
      <div className='container'>
        <div className='flex flex-wrap mx-4'>
          <div className='w-[73vw]'>
            <h1 style={{fontSize: 33,
fontFamily: 'Poppins',
fontWeight: '500',}}>Resume Delivery Time</h1>
            <div className='max-w-full overflow-x-auto mt-10'>
              <table className='w-[100%] rounded'>
                <thead className='text-center bg-[#663399]'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Resume Variant</th>
                    <th className={TdStyle.ThStyle}> First Version</th>
                    <th className={TdStyle.ThStyle}> Final Delivery</th>
                    {/* <th className={TdStyle.ThStyle}> Renewal </th>
                    <th className={TdStyle.ThStyle}> Transfer </th>
                    <th className={TdStyle.ThStyle}> Register </th> */}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>Regular</td>
                    <td className={TdStyle.TdStyle2}>8 Working Days</td>
                    <td className={TdStyle.TdStyle}>14 Working Days</td>
                    {/* <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td> */}
                    {/* <td className={TdStyle.TdStyle2}>
                      <a href='/#' className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td> */}
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>Express</td>
                    <td className={TdStyle.TdStyle2}>4 Working Days</td>
                    <td className={TdStyle.TdStyle}>10 Working Days</td>
                    {/* <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href='/#' className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td> */}
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>Super Express</td>
                    <td className={TdStyle.TdStyle2}>2 Working Days</td>
                    <td className={TdStyle.TdStyle}>6 Working Days</td>
                    {/* <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href='/#' className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default ResumeDeliveryTime