
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
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
    const [order, setOrder] = useState("");
    const [search, setSearch] = useState("");
    const [brandFilter, setBrandFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceRange, setPriceRange] = useState("");
     const [currentPage, setCurrentPage] = useState(1); // For pagination
    const [totalPages, setTotalPages] = useState(1); // For pagination
    const [allBrands, setAllBrands] = useState([]);
    const [allCategories,setAllCategories] = useState([]);

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
      useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('https://shop-server-seven.vercel.app/products');
                const categories = data.products.map(product => product.category); // Extract category names
                const uniqueCategories = [...new Set(categories)]; // Remove duplicate category names
                setAllCategories(uniqueCategories); // Set unique category names
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        getData();
    }, []);
      useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('https://shop-server-seven.vercel.app/products');
                const brands = data.products.map(product => product.brand); // Extract brand names
                const uniqueBrands = [...new Set(brands)]; // Remove duplicate brand names
                setAllBrands(uniqueBrands); // Set unique brand names
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getData();
    }, []);
      
   

      const getData = async () => {
        const { data } = await axios.get(`https://shop-server-seven.vercel.app/products`, {
            params: {
                search,
                order,
                brandFilter,
                categoryFilter,
                priceRange,
                page: currentPage,
                limit: 10,
            }
        });
    
        setProducts(data.products);
        setTotalPages(data.totalPages);
        
    };
    
    useEffect(() => {
        getData();
     
    }, [search, order, brandFilter, categoryFilter, priceRange, currentPage]);
    


    const handleSearch = (e) => {
      e.preventDefault();
      const text = e.target.search.value;
      setSearch(text);
      setCurrentPage(1); // Reset to the first page after searching
  };
  
 
  const handleSortChange = (e) => {
    const selectedSortOrder = e.target.value;
    setOrder(selectedSortOrder);
    setCurrentPage(1); // Reset to the first page after sorting
};

  
const handleBrandFilterChange = (e) => {
  setBrandFilter(e.target.value);
  setCurrentPage(1); // Reset to the first page after filtering
};

const handleCategoryFilterChange = (e) => {
  setCategoryFilter(e.target.value);
  setCurrentPage(1); // Reset to the first page after filtering
};

const handlePriceRangeChange = (e) => {
  setPriceRange(e.target.value);
  setCurrentPage(1); // Reset to the first page after filtering
};


const handlePageChange = (newPage) => {
  if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
  }
};
 

    return (
        <div className="container mx-auto mt-20 mb-20">
   
         {/* heading start */}

 {/* heading end */}
 <div>
 <div className='flex flex-col justify-center' data-aos="fade-up">
                 <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'> Explore Our Premium Products</h1>
                 <div className='justify-center mx-auto border-b-2 h-px w-[100px]  border-green-700 '></div>
                 <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '>Discover a curated selection of top-quality products designed to meet your needs and elevate your lifestyle. Whether you're looking for the latest tech gadgets, home essentials, or unique gifts, our diverse collection offers something for everyone. </p>
                 <div className="flex flex-col md:flex-row items-center justify-between gap-2 ml-3">
          <form onSubmit={handleSearch}>
                <div className="flex justify-start">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search any products..."
            className="w-full py-3 pl-10 pr-4 text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      </form>
      {/* sort and toogle start */}
      <div className="flex items-center justify-between gap-6 font-raleway">
        
      <div className="flex">
    <select className="p-2 border border-green-300 rounded-md" value={order} onChange={handleSortChange}>
        <option value="">Sort Products</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="dateNewestFirst">Date Added: Newest first</option>
    </select>
</div>
    
      </div>
       {/* sort and toogle end*/}

       <div className="flex items-center justify-between gap-6 font-raleway">
       <select className="p-2 border border-green-300 rounded-md" value={brandFilter} onChange={handleBrandFilterChange}>
                <option value="">Select Brand</option>
                {allBrands.map((brand, index) => (
                    <option key={index} value={brand}>
                        {brand}
                    </option>
                ))}
            </select>

            <select className="p-2 border border-green-300 rounded-md" value={categoryFilter} onChange={handleCategoryFilterChange}>
    <option value="">Select Category</option>
    {allCategories.map((category, index) => (
        <option key={index} value={category}>
            {category}
        </option>
    ))}
</select>


        <select className="p-2 border border-green-300 rounded-md" value={priceRange} onChange={handlePriceRangeChange}>
            <option value="">Select Price Range</option>
            <option value="low">Low (below $50)</option>
            <option value="medium">$50 - $100</option>
            <option value="high">High (above $100)</option>
        </select>
    </div>
       </div>
        {/* card start */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                
                 data-aos="fade-up-left" >
      {
 
 products.map(product => 
         <div key={product._id}  className="card rounded-lg  bg-blue-50  text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
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
           <div className=' border-b-2 h-px w-[61px]   border-[#FC4100] mb-2 '></div>
                   

                 
           <p className="mb-4 font-raleway">{product.description}</p>
       <p className="flex items-center gap-2 mt-3 font-oswald text-base  font-medium  ml-6"><img className="w-5 " src={price} alt="" /> <span className="gap-0 text-red-500">{product.price}$</span></p>
       <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium ml-6"> <img className="w-5 " src={date} alt="" /> <span className=" gap-0">Created Date: {new Date(product.createdAt).toLocaleDateString()}</span></p>
       <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium  ml-6"><img className="w-5 " src={ratings} alt="" />Ratings: {product.ratings} <span className=" w-5"></span></p>
       
     
       <div className="card-actions justify-end">
             <Link to={`/food/${product._id}`}><button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FC4100] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button></Link>
          
           </div>
         </div>
         </div>
       
              </div>)
      }
       
    
        
       </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-10">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-full disabled:bg-gray-400"
                    >
                        Previous
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages).keys()].map((num) => (
                        <button
                            key={num + 1}
                            onClick={() => handlePageChange(num + 1)}
                            className={`px-4 py-2 mx-2 rounded-full ${currentPage === num + 1 ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            {num + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-full disabled:bg-gray-400"
                    >
                        Next
                    </button>
                </div>
             </div>
 </div>
 
 </div>
    );
};

export default AllProducts;