import React, { useEffect, useState } from 'react'
import ResumeHighlighter from '../../../images/ResumeHighlight.jpg'
import image1 from '../../../images/Vector1.jpg'
import image2 from '../../../images/Vector2.jpg'
import image3 from '../../../images/Vector3.jpg'
import image4 from '../../../images/Vector4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../../images/HighlightImage.png'
import Image2 from '../../../images/HighlightImageS4Img2.png'
import Image3 from '../../../images/HighlightSection5.png'
import Image4 from '../../../images/HighlightTip1.png'
import Image5 from '../../../images/HighlightTip2.png'
import Image6 from '../../../images/HighlightTip3.png'
import Blog from '../../Blog'
import Footer from '../../Footer'
import Contactus from '../../Contactus'
import axios from 'axios';
import toast from 'react-hot-toast';

const HighlightResume = () => {


    const featureData = [
        {
            image: image1,
            text: "Professional Endorsements",
        },
        {
            image: image2,
            text: "Skill Spotlight",
        },
        {
            image: image3,
            text: "Professional Guidance",
        },
        {
            image: image4,
            text: "Networking Opportunities",
        },
    ]

    const paragraphs = [
        {
            text: "If your profile doesn't include the keywords commonly used in your industry or specific to the roles you are targeting, it may not appear in recruiter searches"
        },
        {
            text: "Recruiters are more likely to overlook profiles that lack comprehensive details about your skills, experiences, and achievements. Keeping your profile up-to-date is crucial for visibility."
        },
        {
            text: "A smaller professional network and a lack of endorsements or recommendations can contribute to your profile going unnoticed"
        }
    ];

    const BenefitsItems = [
        {
            text: "Increases the visibility of your profile in recruiter searches and on professional networks."
        },
        {
            text: "Making it stand out and capturing the attention of recruiters and hiring managers."
        },
        {
            text: "Provide expert guidance on optimizing your profile for specific industries or roles"
        },
        {
            text: "Provide expert guidance on optimizing your profile for specific industries or roles"
        }
    ];

    const tipsInfo = [
        {
            image: Image4,
            text: "Keep your profile up-to-date with your latest experiences, skills, and achievements.",
        },
        {
            image: Image5,
            text: "Provide comprehensive information about your skills, experiences, and achievements",
        },
        {
            image: Image6,
            text: "Highlight your key accomplishments and successes",
        },
    ];



    const [selectedPlan, setSelectedPlan] = useState();
    const [serviceId, setServiceId] = useState(null);
    const [displayPlans, setDisplayPlans] = useState([]);
    const [selectedPlanId, setSelectedPlanId] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleRadioChange = (e, serviceId, planId) => {
        setSelectedPlan(e.target.value);
        setServiceId(serviceId);
        setSelectedPlanId(planId);

        // console.log("****** HandleRadio button ********")
        // console.log('Selected Package Price :', e.target.value);
        // console.log('Selected Service ID:', serviceId);
        // console.log('Selected Plan ID:', planId);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!serviceId || !selectedPlanId) {
            toast.error("Please select a Plan! ");
            setLoading(false);
            return;
        }
        // console.log("****** Handle submit ********")
        // console.log('Submitted Package Price :', selectedPlan);
        // console.log('Submitted Service ID:', serviceId);
        // console.log('Submitted Plan ID:', selectedPlanId);

        //! storing the serviceid and planid to the select highlight resume opyion
        try {
            const selectPlanResponse = await axios.post(`${process.env.REACT_APP_SERVER_PRO_URL}/api/highlightresume/select-highlight-resume-option`, {
                serviceId,
                planId: selectedPlanId
            });

            const responseData = selectPlanResponse.data;
            // console.log("Server Response (Select Highlight Resume):", responseData);
            if (!responseData) {
                throw new Error("Error in selecting highlight resume option")
            }

            const jwtToken = localStorage.getItem("token");

            //! aading items to the cart
            const addToCartResponse = await axios.post(`${process.env.REACT_APP_SERVER_PRO_URL}/api/highlight/add-to-cart`, {
                selectedServiceId: serviceId,
                selectedPlanId: selectedPlanId
            }, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });

            const responseCartData = addToCartResponse.data;
            if (!responseCartData) {
                throw new Error("Error occurred while adding to Cart");
            } else {
                // console.log("Server Response (Add to Cart):", responseCartData);
                toast.success("Package added to cart successfully");
                setSelectedPlan(null);
            }


            //! Creating and placing order
            const createOrderResponse = await axios.post(`${process.env.REACT_APP_SERVER_PRO_URL}/api/order/create`, {
                cartId: responseCartData.cartId,
                cartType: "ResumeHighlightCart"
            });
            // console.log("Create Order Response", createOrderResponse);

            const orderData = createOrderResponse.data;
            // console.log(orderData);

            if (orderData.success) {
                toast.success("Order placed successfully");
            } else {
                throw new Error(orderData.message || "Failed to place order");
            }
        } catch (error) {
            console.error("Error occurred during API requests:", error);
            toast.error(error.message || "Error occurred during API requests");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/highlightresume/highlight-resumes`);
                const { status, message, highlightResumes } = response.data;
                // console.log("Fetched API Response Data", response.data);

                if (status === 'success' && highlightResumes.length > 0) {
                    const showSelectedService = highlightResumes[0];
                    setServiceId(showSelectedService._id);
                    setDisplayPlans(showSelectedService.plans);

                    // console.log("Highlight Resumes array", highlightResumes);
                    // console.log("Ye wali service show hogi package par", showSelectedService);
                    // console.log("Service Id  :", showSelectedService._id);
                    // console.log("Displaying Plans :", showSelectedService.plans);

                } else {
                    // console.error('Failed to fetch highlight resumes');
                    throw new Error('Failed to fetch highlight resumes');
                }
            } catch (error) {
                toast.error("Error fetching highlight resumes");
                // console.error('Error fetching highlight resumes:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);




    return (
        <div>
            {/* hero section */}
            <div className='flex flex-col lg:flex-row h-full lg:max-h-[450px] max-w-[1600px] mx-auto'>
                {/* left part */}
                <div className='hidden sm:block w-full h-[300px] lg:h-auto lg:w-[47%]'>
                    <img src={ResumeHighlighter} alt="" className='h-full w-full object-fill' loading='lazy' />
                </div>
                {/* right part */}
                <div className='font-bold bg-[#F58634] flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-auto w-full lg:w-[53%]'>
                    <h1 className='text-4xl sm:text-5xl leading-[50px] sm:leading-[75px] px-6 sm:px-12'>
                        Highlight Your Profile
                    </h1>
                    <p className='text-xl sm:text-2xl text-white px-[5px] sm:px-12 tracking-[2px] leading-[30px] sm:leading-10'>
                        Illuminate Your Potential: Unleashing Success <br /> Through Profile Highlighter Services
                    </p>
                </div>
            </div>

            {/* Key Features of a Profile Highlighter service */}
            <div className='flex flex-col gap-y-3 w-full lg:w-[70%] max-w-[1500px] mx-auto lg:my-10'>
                <div className='w-full hidden lg:flex gap-x-5'>
                    <div className='w-[70%]'></div>
                    <div className='w-[30%] text-3xl md:text-4xl lg:text-3xl text-center' style={{ fontFamily: 'inter' }}>
                        Buy Package
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 mb-10'>
                    {/* left part */}
                    <div className='w-full lg:w-[70%] flex flex-col gap-y-10'>
                        <div className='bg-[#4B57A3] px-2 py-4'>
                            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>
                                Key Features of a Profile Highlighter service
                            </h1>
                        </div>
                        <div className='grid grid-cols-2 gap-y-9 lg:grid-cols-4'>
                            {featureData.map((item, index) => (
                                <div key={index} className='flex flex-col justify-center items-center gap-y-5 lg:gap-y-2 w-[80%] sm:w-full mx-auto'>
                                    <img src={item.image} alt="" />
                                    <p className='text-center'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* right part - buy package */}
                    <div className='w-[70%] sm:w-[50%] lg:w-[30%] mx-auto flex flex-col gap-y-5 lg:gap-y-2'>
                        <h1 className='text-3xl md:text-4xl lg:text-3xl text-center block lg:hidden'>
                            Buy Package
                        </h1>



                        <form className='flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none'>
                            {displayPlans.map((plan) => (
                                <div key={plan._id} className='flex items-center gap-x-3 sm:gap-x-6'>
                                    <input
                                        type="radio"
                                        name="buyPackage"
                                        id={`duration-${plan.durationMonths}`}
                                        value={plan.price}
                                        onChange={(e) => handleRadioChange(e, serviceId, plan._id)}
                                        checked={selectedPlan === plan.price.toString()}
                                        className='w-5 h-5 ml-[15%] sm:ml-[20%] lg:ml-8 2xl:ml-12 cursor-pointer'
                                    />
                                    <label htmlFor={`duration-${plan.durationMonths}`} className='cursor-pointer'>
                                        {plan.durationMonths} Months - Rs. {plan.price}
                                    </label>
                                </div>
                            ))}
                            <button onClick={handleSubmit} className='text-xl sm:text-2xl text-white w-[70%] font-semibold mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500'>
                                Buy Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Your profile might go unnoticed in recruiter searches for the following reasons: */}
            <div className='bg-[#F6F6F8] py-5'>
                <h1 className='text-2xl lg:text-3xl text-center px-2 lg:w-[70%] max-w-[1500px] mx-auto'>
                    Your profile might go unnoticed in recruiter searches for the following reasons:
                </h1>
                <div className='flex lg:gap-x-14 xl:gap-x-20 w-[90%] lg:w-[70%] max-w-[1500px] mx-auto justify-center items-center mt-6 lg:mt-4 xl:mt-0'>
                    <div className='hidden md:block md:w-[30%]'>
                        <img src={Image1} alt="" className='md:w-[90%] lg:w-[120%] max-w-[400px] h-auto object-contain' />
                    </div>
                    <div className='font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[90%] md:w-[90%] xl:w-[70%] flex flex-col justify-evenly items-start gap-3 md:gap-5 lg:gap-y-8 lg:h-[220px] xl:h-[300px]'>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className='text-justify mx-auto'>
                                <FontAwesomeIcon icon={faCircle} style={{ color: "#F58634" }} className='mr-5' />
                                {paragraph.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* The benefits you gain from a Profile Highlighter service include */}
            <section>
                <div className='bg-[#F6F6F8] mt-5'>
                    <h1 className='bg-[#F58634] font-medium text-lg sm:text-xl md:text-2xl px-1 sm:leading-10 py-2 sm:h-12 md:h-16 flex justify-center items-center'>
                        The benefits you gain from a Profile Highlighter service include
                    </h1>
                    <div className='flex gap-x-5 w-[90%] justify-center items-center lg:w-[70%] max-w-[1500px] mx-auto py-4'>
                        <div className='hidden md:block w-[30%]'>
                            <img src={Image2} alt="" className='w-full max-w-[400px] h-auto' />
                        </div>
                        <div className='font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[90%] md:w-[90%] xl:w-[70%] flex flex-col justify-evenly items-start gap-3 md:gap-5 lg:gap-y-8 lg:h-[220px] xl:h-[300px]'>
                            {BenefitsItems.map((item, index) => (
                                <p key={index} className='text-justify'>
                                    <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#24e544" }} className='mr-5' />
                                    {item.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* how your profile look to recruiter - image */}
            <div className='lg:w-[70%] max-w-[1500px] mx-auto'>
                <img src={Image3} alt="" className='w-full mx-auto p-5 pt-2 pb-4' />
            </div>

            {/* To get the best out of a Profile Highlighter service, consider the following tips */}
            <div className='bg-[#F8F8F8] flex flex-col gap-5 w-[90%] lg:w-[70%] max-w-[1500px] mx-auto p-4 px-2 rounded-2xl'>
                <h1 className='xl:text-[26px] lg:text-2xl md:text-xl sm:text-base text-center'>
                    To get the best out of a Profile Highlighter service, consider the following tips
                </h1>
                <div className='flex flex-col md:flex-row gap-5 justify-around items-center text-base font-light font-inter'>
                    {tipsInfo.map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 place-items-center w-[60%] lg:w-[50%] md:max-w-[20%] lg:p-4 md:p-0 rounded-xl'>
                            <img src={item.image} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Talk to our experts */}
            <Contactus />

            {/* Blog */}
            <Blog/>

            {/* Footer */}
            {/* <Footer/> */}
        </div>
    )
}

export default HighlightResume