
import { Link } from "react-router-dom";
// import { FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import price from "../../assets/tag-removebg-preview.png";
import date from "../../assets/add-event-removebg-preview.png";
import categories from "../../assets/app-removebg-preview.png";
import ratings from "../../assets/star-removebg-preview.png";
import brand from "../../assets/brand__1_-removebg-preview.png";
// import location from "../assets/placeholder_819814.png";
// import ExpireDate from "../assets/expired_5632472.png";




import axios from "axios";
import { useEffect, useState } from "react";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    // const [order, setOrder] = useState("");
    // const [search, setSearch] = useState("");

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
      useEffect(()=>{
        const getData = async () => {
          const {data} = await axios.get (
            `http://localhost:5000/products`
          )
     
          setProducts(data)
        }
        getData()
       },[])



    //  useEffect(()=>{
    //   const getData = async () => {
    //     const {data} = await axios.get (
    //       `https://foodking-webserver.vercel.app/food?search=${search}`
    //     )
    //     const availableFoods = data.filter(food => food.foodStatus === 'available');
    //     setFoods(availableFoods)
    //   }
    //   getData()
    //  },[search])


    //  const handleSearch = (e) => {
    //   e.preventDefault ()
    //   const text = e.target.search.value
    //   setSearch(text)
    //   // console.log(text)
    //  }
 
    //   const handleSortChange = (e) => {
    //     const selectedSortOrder = e.target.value;
    //     setOrder(selectedSortOrder);

    //     const sortedFoods = [...foods].sort((a, b) => {
    //         const dateA = new Date(a.expiredDateTime);
    //         const dateB = new Date(b.expiredDateTime);

    //         if (selectedSortOrder === "ascending") {
    //             return dateA - dateB;
    //         } else if (selectedSortOrder === "descending") {
    //             return dateB - dateA;
    //         }
    //         return 0;
    //     });

    //     setFoods(sortedFoods);
    // };
  
  
 

    return (
        <div className="container mx-auto mt-20 mb-20">
   
         {/* heading start */}

 {/* heading end */}
 <div>
 <div className='flex flex-col justify-center' data-aos="fade-up">
                 <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'> Explore Our Premium Products</h1>
                 <div className='justify-center mx-auto border-b-2 h-px w-[100px]  border-green-700 '></div>
                 <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '>Discover a curated selection of top-quality products designed to meet your needs and elevate your lifestyle. Whether you're looking for the latest tech gadgets, home essentials, or unique gifts, our diverse collection offers something for everyone. </p>
     
        {/* card start */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                
                 data-aos="fade-up-left" >
      {
 
    products.map(product => 
         <div key={product._id}  className="card rounded-lg  bg-green-100  text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
         <div className="relative h-[400px]">
         <figure className="h-full flex flex-grow w-full rounded-lg "><img className="h-full flex-grow w-full " src={product.image} alt="Food" /></figure>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
         </div>
         <div className="card-body">
         <div className="felx flex-col gap-3">
         <div className="flex items-center gap-3 mt-4 mb-4">
     
     <div className=" flex gap-10 justify-between items-center">
       <div className=" flex gap-2 items-center text-base font-raleway font-medium"><img className="w-7 " src={brand} alt="" />{product.brand}</div>
       <div className=" flex gap-2 items-center text-base font-raleway font-medium"> <img className="w-7 " src={categories} alt="" />{product.category}</div>
     
     </div>
   </div>
           <h2 className="card-title font-extrabold font-oswald w-1/2">{product.name}:</h2>
           <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
                   

                 
           <p className="mb-4 font-raleway">{product.description}</p>
       <p className="flex items-center gap-2 mt-3 font-oswald text-base  font-medium  ml-6"><img className="w-5 " src={price} alt="" /> <span className="gap-0 text-red-500">{product.price}$</span></p>
       <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium ml-6"> <img className="w-5 " src={date} alt="" /> <span className=" gap-0">Created Date: {new Date(product.createdAt).toLocaleDateString()}</span></p>
       <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium  ml-6"><img className="w-5 " src={ratings} alt="" />Ratings: {product.ratings} <span className=" w-5"></span></p>
       
     
       <div className="card-actions justify-end">
             <Link to={`/food/${product._id}`}><button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button></Link>
          
           </div>
         </div>
         </div>
       
              </div>)
      }
       
    
        
       </div>
             </div>
 </div>
 
 </div>
    );
};

export default AllProducts;