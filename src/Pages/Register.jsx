import { Link } from "react-router-dom";
import backgroundImage from '../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hook/useAuth";
import { Helmet } from "react-helmet-async"

const Register = () => {
  const {createUser, updateUserProfile,user  } = UseAuth();
  const [showpassword, setShowpassword] = useState(false)

  console.log(user)
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();

  // navigation system
  const navigate = useNavigate()
  const location = useLocation()
  const form = location?.state ||"/";

  const onSubmit = (data) => {
    const { email, password, fullName, image } = data;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (!isPasswordValid) {
      // Display toast for invalid password
      toast.error('Password must have at least 6 characters with an uppercase letter and a lowercase letter.');
      return;
    }


    createUser(email, password)
      
      .then (() => {
        toast.success('Account created successfully!');
        updateUserProfile(fullName,image)
        .then(() => {
          
            navigate(form)
           
           
        })
        
      })
    
      .catch(() =>  toast.error('This account already register'));
  };
    return (
        <div className="mt-20">
        <Helmet><title>ShopSift|Register</title></Helmet>
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` ,
         backgroundSize: 'cover',
         backgroundPosition: 'center',  }}>
  <div className="text-center w-1/2 mt-5 mb-5 ">
   
    <div className="card shadow-2xl w-full bg-white ">
        <h1 className="font-bold text-xl md:text-2xl mt-5 font-raleway text-[#55679C]">Create An Account</h1>
     
      <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Name</span>
          </label>
          <input type="text"name="fullName" {...register("fullName", { required: true })} placeholder="Enter Your Name" 
          className="input input-bordered border-green-200 bg-gray-50 placeholder:font-raleway placeholder:text-xs  placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300  "/>
            {errors.fullName&& 
            <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text font-raleway text-base md:text-lg font-bold text-black">Email</span>
          </label>
          <input type="email" name="fullName" placeholder="Enter Your Email"  {...register("email", { required: true })}
           className="input input-bordered  border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 
           "  />
             {errors.email&& 
            <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Photo Url</span>
          </label>
          <input type="text" placeholder="Url"{...register("image", { required: true })}
           className="input input-bordered border-green-200 bg-gray-50 placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 " />
         {errors.url&& 
            <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control  relative">
       <label className="label">
         <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Password</span>
         
       </label>
       
       <input 
          type = {showpassword ? "text" : "password"}
          placeholder="password" {...register("password", { required: true })}
          className="border-green-200  input input-bordered bg-gray-50    placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:font-medium placeholder:text-gray-300"  />
       <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[66%] left-[82%] md:left-[94%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
    {errors.password&& 
         <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
       
     </div>
        
        <div className="form-control mt-6">
          <button className="btn border-none transition duration-1000 ease-in  cursor-pointer bg-[#ffa52fec]  hover:bg-[#ffa52f]  font-raleway text-xs md:text-lg font-bold text-white">Create An Acoount</button>
        </div>
        <div className="form-control mt-6">
        <p className="text-left font-raleway text-xs md:text-lg font-bold text-black">Already Have An Account? <Link to={'/login'} className="text-[#55679C]">Login Here</Link></p>
        </div>
      </form>
      <ToastContainer/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;