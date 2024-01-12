import React from 'react'
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { FormControl, FormControlLabel, Radio, Checkbox, RadioGroup } from '@mui/material';
import { useLocation } from 'react-router-dom';
// import Slide from 'react-reveal/Slide';

export default function BuyNowServiceCard({prices}) {
    const [selectedValue, setSelectedValue] = React.useState('option1');
    // Changing prices dynamically
    const [price, setPrice] = React.useState(prices.price1);
    const [includeCoverLetter, setIncludeCoverLetter] = React.useState(false);


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // Update price based on the selected radio button
        if (event.target.value === 'option1') {
            setPrice(prices.price1);
        } else if (event.target.value === 'option2') {
            setPrice(prices.price2);
        }
        else if (event.target.value === 'option3') {
            setPrice(prices.price3);
        }

    };
    const handleCoverLetterChange = (event) => {
        const coverLetterPrice = 500;
        let newPrice = price;

        if (event.target.checked && (selectedValue === 'option1' || selectedValue === 'option2' || selectedValue === 'option3')) {
            newPrice += coverLetterPrice;
        } else if (!event.target.checked && (selectedValue === 'option1' || selectedValue === 'option2' || selectedValue === 'option3')) {
            newPrice -= coverLetterPrice;
        }

        setIncludeCoverLetter(event.target.checked);
        setPrice(newPrice);
    };


    const location=useLocation();
    const ResumeType=location.pathname.includes('Visual') ? "Visual" : "Text"



    return (
        <>

            <div className="justify-content-center xl:flex lg:w-[50%] xl:w-[100%] py-2">
                
                <div className="div flex flex-col justify-center align-center">
                    




                    <div className="mx-auto text-black text-lg sm:text-xl max-w-screen-sm md:max-w-full self-start text-center font-semibold mb-2" style={{fontFamily: 'Poppins', fontWeight: 300 }}>
                    Buy {ResumeType} Resume Services
                    </div>


                    {/* <Card className='md:ml-20 md:mt-10 md:w-[100%]' style={{ height: '45vh' }}> */}
                    <Card className='md:ml-2 md:mt-1 md:w-[100%] h-fit my-2'>

                        {/* <Slide right cascade> */}



                        <Typography component="div" gutterBottom style={{
                            background: '#f3f1f2',
                            fontSize: 26,
                            color: '#444',
                            padding: '7px 0',
                            fontWeight: '500',
                        }}>
                            Rs. {price}*
                            <p class="inclTxt" style={{
                                lineHeight: 1,
                                fontSize: '11px',
                                marginbottom: '5px', fontWeight: '500'
                            }}>*Applicable taxes may apply</p>
                        </Typography>

                        <FormControl component="fieldset" sx={{ marginLeft: '20px' }}>
                            <RadioGroup
                                aria-label="options"
                                name="options"
                                value={selectedValue}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="option1"
                                    control={<Checkbox checked={includeCoverLetter} onChange={handleCoverLetterChange} />}
                                    label={
                                        <div>
                                            <Typography style={{
                                                fontSize: '16px',
                                                fontFamily: 'Poppins',
                                                fontWeight: '400',
                                            }}> Including Cover letter </Typography>
                                        </div>
                                    }
                                    labelPlacement="end"





                                />
                                <FormControlLabel
                                    value="option1"
                                    control={<Radio checked={selectedValue === 'option1'} onChange={handleChange} />}
                                    label={
                                        <div>
                                            <Typography style={{
                                                fontSize: '16px',
                                                fontFamily: 'Poppins',
                                                fontWeight: '400',
                                            }}><span className='text-blue-900'>Regular</span> 8 working days</Typography>
                                        </div>
                                    }
                                    labelPlacement="end"
                                    enabled={selectedValue === 'option2' || selectedValue === 'option3'}
                                />
                                <FormControlLabel
                                    value="option2"
                                    control={<Radio checked={selectedValue === 'option2'} onChange={handleChange} />}
                                    label={
                                        <div>
                                            <Typography style={{
                                                fontSize: '16px',
                                                fontFamily: 'Poppins',
                                                fontWeight: '400',
                                            }}><span className='text-blue-900'>Express</span> 4 working days (Rs. 1201/-)</Typography>
                                        </div>
                                    }
                                    labelPlacement="end"
                                    enabled={selectedValue === 'option1' || selectedValue === 'option3'}
                                />
                                <FormControlLabel
                                    value="option3"
                                    control={<Radio checked={selectedValue === 'option3'} onChange={handleChange} />}
                                    label={
                                        <div>
                                            <Typography style={{
                                                fontSize: '16px',
                                                fontFamily: 'Poppins',
                                                fontWeight: '400',
                                            }}><span className='text-blue-900'>Super express</span> 2 working days (Rs. 1901/-)</Typography>
                                        </div>
                                    }
                                    labelPlacement="end"
                                    enebled={selectedValue === 'option1' || selectedValue === 'option2'}
                                />

                            </RadioGroup>
                        </FormControl>

                        <Box sx={{ textAlign: 'center', padding: '10px' }}>
                            <Button variant="contained" style={{ backgroundColor: 'rgba(245, 134, 52, 1)' }}>Buy Now</Button>
                        </Box>
                        {/* </Slide> */}
                    </Card>
                </div>
            </div>
        </>

    )
}
