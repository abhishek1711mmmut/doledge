import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import { Card, CardHeader, CardContent } from "@mui/material"
import { Input } from "@mui/material";
import { Box } from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";
import { Avatar, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Component() {
  return (
    <div className="bg-[#f9fcff]">
    
      <div className="w-[70%] mx-auto max-w-[1500px] flex flex-col py-4">
        <div class="bg-white p-6 shadow-md rounded-md">
          <div class="flex items-center space-x-4">
            <div class="relative">
              <img
                class="rounded-full h-20 w-20"
                alt="Profile picture"
                src="https://media.istockphoto.com/id/1160730376/photo/its-a-good-day-to-make-some-smart-connections.jpg?s=2048x2048&w=is&k=20&c=-FPqWMHcsv77p2s2j8yY-ptJbwnU0lid9mLaSBBj57Y="
              />
              {/* <div class="absolute bottom-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                100%
              </div> */}
            </div>
            <div class="flex-grow border-r pl-5 pr-4">
              <h1 class="flex items-center space-x-2 text-2xl font-semibold">
                Rakesh Ranjan
              </h1>
              <p class="flex items-center space-x-2 text-sm text-gray-500">
                Profile last updated - Today
              </p>
              <div class="mt-2 space-y-2">
                <div class="flex items-center space-x-2">
                  <LocationOnIcon fontSize="10" className="text-orange-500"/>

                  <span>Lucknow, INDIA</span>
                </div>
                <div class="flex items-center space-x-2">
                  <WorkIcon fontSize="10" className="text-orange-500"/>
                  <span>Fresher</span>
                </div>
                <div class="flex items-center space-x-2">
                  
                  <CalendarTodayIcon fontSize="10" className="text-orange-500"/>

                  <span>Available to join in 15 Days or less</span>
                </div>
              </div>
            </div>
            <div class="flex-grow pl-4">
              <div class="flex items-center space-x-2">
               <CallIcon fontSize="10" className="text-orange-500"/>
                <span>8484848484</span>
              </div>
              <div class="flex items-center space-x-2 mt-2">
               <MailIcon fontSize="10" className="text-orange-500"/>
                <span>rajansharma@gmail.com</span>
              </div>
            </div>
          </div>
        </div>



        <div className="grid w-full lg:grid-cols-[280px_1fr]">
          {/* <div className="hidden border-r-2 lg:block"> */}

          <Box className='bg-white mt-4 p-6 shadow-md rounded-md'>
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start text-sm font-medium">
                <h1 className="font-bold size[90px] flex items-center gap-3 rounded-lg px-3 py-2 text-black-500 transition-all hover:text-black-900 dark:text-black-400 dark:hover:text-black-500">
                  {/* <HomeIcon className="h-4 w-4" /> */}
                  Quick Links
                </h1>

                <Link
                  className="font-semibold flex items-center gap-3 rounded-lg px-3 py-3 text-black-500 transition-all hover:text-black-900 dark:text-black-400 dark:hover:text-gray-500"
                  href="#"
                >
                  {/* <HomeIcon className="h-4 w-4" /> */}
                  Home
                </Link>
                <Link
                  className="font-semibold flex items-center gap-3 rounded-lg px-3 py-3 text-black-500 transition-all hover:text-black-900 dark:text-black-400 dark:hover:text-gray-500"
                  href="#"
                >
                  {/* <PackageIcon className="h-4 w-4" /> */}
                  Jobs
                </Link>
                <Link
                  className="font-semibold flex items-center gap-3 rounded-lg px-3 py-3 text-black-500 transition-all hover:text-black-900 dark:text-black-400 dark:hover:text-gray-500"
                  href="#"
                >
                  {/* <UsersIcon className="h-4 w-4" /> */}
                  Candidates
                </Link>
                <Link
                  className="font-semibold flex items-center gap-3 rounded-lg px-3 py-3 text-black-500 transition-all hover:text-black-900 dark:text-black-400 dark:hover:text-gray-500"
                  href="#"
                >
                  {/* <FileTextIcon className="h-4 w-4" /> */}
                  Applications
                </Link>
                <Link
                  className="font-semibold flex items-center gap-3 rounded-lg px-3 py-3 text-black-500 transition-all hover:text-black-900 dark:text-black-400 dark:hover:text-gray-500"
                  href="#"
                >
                  {/* <SettingsIcon className="h-4 w-4" /> */}
                  Settings
                </Link>
              </nav>
            </div>
          </div>
          </Box>
          {/* </div> */}



          <div className="flex flex-col shadow-sm bg-white mt-4 ml-4">

            <main className="pl-2 flex flex-1 flex-col gap-4 md:gap-8 md:p-6 bg-white">

            <header className="flex h-auto items-center border-b">
             {/* <Link className="lg:hidden" href="#">
                {/* <Package2Icon className="h-6 w-6" /> */}
              {/* <span className="sr-only">Home</span>
              </Link>  */}
          
              <div className="flex">
                <h1 className="font-semibold text-lg text-left mb-2">
                  My Profile
                </h1>
              </div>
            </header>






              <div className="flex flex-col gap-4">
                <div className="">
                  {/* <div className="pb-0 font-semibold">
                <p>Personal Information</p>
                <Box>Your personal information is never shared with employers</Box>
              </div > */}
                  <div className="pt-0 border-[1px] rounded-md">
                    <div className="flex flex-row justify-between p-4">
                      <div className="flex flex-col w-full gap-2 gap-2 sm:text-left xsm:text-left">
                        <p className="text-[#717B9E]">Full Name</p>
                        <p>asdbmdnbamsnbda Olivia Martin</p>
                      </div>
                      <div className="flex flex-col w-full gap-2 sm:text-left xsm:text-left">
                        <p className="text-[#717B9E]">Email</p>
                        <p>olivia.martin@example.com</p>
                      </div>
                    </div>




                    <div className="flex flex-row justify-between p-4">
                      <div className="flex flex-col w-full gap-2 gap-2 sm:text-left xsm:text-left">
                        <p className="text-[#717B9E]">Phone Number</p>
                        <p>9494949494</p>
                      </div>
                      <div className="flex flex-col w-full gap-2 sm:text-left xsm:text-left">
                        <p className="text-[#717B9E]">State</p>
                        <p>Uttar Pradesh</p>
                      </div>
                    </div>















                  </div>
                </div>
                {/* <div className="pt-0 border-[1px] rounded-md">
                  <div className="flex flex-row justify-between p-4">
                    <p>Education</p>
                    <Box>Add your educational background</Box>
                  </div>
                  <div className="pt-0">
                    <p>No education added yet</p>
                  </div>
                </div> */}
              </div>
              <div className="pt-0 border-[1px] rounded-md">
                <CardContent>
                  <p>No experience added yet</p>
                </CardContent>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

