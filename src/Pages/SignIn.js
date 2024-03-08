// import React, { useState } from "react";

import {
  Card,
  Typography,
  Radio,
  Button,
  Input,
} from "@material-tailwind/react";

import Logo from "../Components/Logo";
import cover from '../Assets/Welcome to Cowas Jee Admin Portal.png'
import "../Styles/imageUpload.css"
import { TextLink } from "../Components/Typography";

// const SignInPage = () => {
//   const availableRoles = [
//     {
//       label: "Administrator",
//       value: "administrator",
//       description:
//         "Account owner that performs tasks requiring unrestricted access.",
//     },
//     {
//       label: "Standard",
//       value: "standard",
//       description: "User within an account that performs daily tasks.",
//     },
//   ];

//   const [selectedRole, setSelectedRole] = useState(availableRoles[0].value);
//   const handleRoleChange = (event) => {
//     setSelectedRole(event.target.value);
//   };

//   const RoleSelector = ({ name, availableRoles }) => {
//     return (
//       <div className="flex flex-col gap-4">
//         {availableRoles.map((role, index) => (
//           <Card
//             shadow={false}
//             className={`p-2 border-2 ${
//               selectedRole === role.value
//                 ? "border-red-500 bg-[#fffdf5]"
//                 : "border-gray-200"
//             }`}
//             key={index}
//           >
//             <Radio
//               name={name}
//               value={role.value}
//               checked={selectedRole === role.value}
//               onChange={handleRoleChange}
//               label={
//                 <>
//                   <Typography className="font-medium text-gray-800">
//                     {role.label}
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     className="font-normal text-gray-700"
//                   >
//                     {role.description}
//                   </Typography>
//                 </>
//               }
//               color="red"
//               containerProps={{
//                 className: "-mt-4",
//               }}
//             />
//           </Card>
//         ))}
//       </div>
//     );
//   };

//   const UserForm = () => {
//     const LegalPrompt = () => {
//       return (
//         <div className="bg-gray-100 p-4 text-justify">
//           <p className="text-xs text-gray-700 mb-4">
//             By signing in to the The Cowas Jee School, you agree to
//             comply with all applicable laws and regulations regarding the use of
//             this system.
//             <br></br>
//             <br></br>
//             You also acknowledge that your activities within the system may be
//             monitored and recorded for security purposes.
//           </p>
//         </div>
//       );
//     };

//     return (
//       <form className="flex flex-col gap-8">
//         <div className="flex flex-col gap-3">
//           <div className="flex flex-col gap-1">
//             <Typography className="text-xs font-semibold">Email</Typography>
//             <Input
//               size="md"
//               placeholder="name@mail.com"
//               className="!border-t-blue-gray-200 focus:!border-t-red-500"
//               color="red"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//           </div>
          // <div className="flex flex-col gap-1">
          //   <Typography className="text-xs font-semibold">Password</Typography>
          //   <Input
          //     placeholder="********"
          //     className=" !border-t-blue-gray-200 focus:!border-t-red-500"
          //     color="red"
          //     labelProps={{
          //       className: "before:content-none after:content-none",
          //     }}
          //   />
          //   <Typography className="text-right">
          //     <a
          //       href="."
          //       className="font-medium text-xs text-red-500 hover:text-red-600 active:text-red-700 hover:underline"
          //     >
          //       Forgot password?
          //     </a>
          //   </Typography>
          // </div>
//         </div>
//         <LegalPrompt />
//         <Button color="red" type="submit" fullWidth>
//           Sign In
//         </Button>
//       </form>
//     );
//   };

//   return (

//     <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-8">
//       <Card
//         shadow={false}
//         className="w-full md:w-fit max-w-md flex flex-col items-center gap-6 px-8 py-12 md:border md:border-gray-300"
//       >
//         <div>
//           <Logo />
//         </div>
//         <div className="flex flex-col gap-4">
//           <Typography className="font-light text-center text-gray-800">
//             Sign In
//           </Typography>
//         </div>
//         <div className="w-full md:w-96 flex flex-col gap-6 transition-all duration-400">
//           {/* <RoleSelector name="userRole" availableRoles={availableRoles} /> */}
//           <UserForm />
//         </div>
//         <div>
//           <Typography variant="small">
//             Don't have an account?{" "}
//             <TextLink href="/accounts/sign-up">Sign up</TextLink>
//           </Typography>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default SignInPage;


import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen, faPerson } from "@fortawesome/free-solid-svg-icons";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform form submission logic
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="min-h-screen text-gray-900 flex justify-center">
            <div  style={{boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" , borderRadius:'20px'}} className="m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1 bg-gray-900">
                <div style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}} className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 bg-gray-900 flex justify-center items-center">
                    <div >
                    <div className="flex justify-center items-center">
                        {/* <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                            className="w-32 mx-auto" alt="Logo" /> */}
                            <Logo color="text-white"/>
                          
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-2xl text-white font-extrabold">
                            Login to Cowas Jee Admin
                        </h1>
                        <form className="w-full flex-1 mt-8" onSubmit={handleSubmit}>
                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-red-900 focus:bg-white"
                                    type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-red-900 focus:bg-white mt-5"
                                    type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                    



                                <button
                                    className="mt-5 tracking-wide font-semibold bg-[#932a27] text-gray-100 w-full py-4 rounded-lg hover:bg-[#932a27] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    type="submit">
                                   <FontAwesomeIcon icon={faLock}/>
                                    <span className="ml-3">
                                        Sign in
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div style={{borderTopRightRadius:"19.3px",borderBottomRightRadius:"19.3px"}} className="flex-1 bg-white bg-contain bg-clip-border bg-no-repeat text-center hidden lg:flex bg-sign  ">
                  <img style={{borderTopRightRadius:"19.3px",borderBottomRightRadius:"19.3px"}} className="m-0 object-fill " src={cover}/>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
