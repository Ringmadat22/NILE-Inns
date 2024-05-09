import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingCard from "../ListingCard";
import SearchHome from "../sections/assets/images/searchhome.png";
import RentingHome from "../sections/assets/images/renthome.png";
import SellHome from "../sections/assets/images/sellhome.png"




export default function ListingsType() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);


  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:max-w-full">
      <div className="py-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3 flex items-center justify-between'>
              <h2 className='text-base uppercase font-semibold md:text-xl'>
                211 Recommended Properties 
              </h2>
              <Link to={'/search?offer=true'} className='bg-red-500 text-white text-sm px-4 py-2 font-medium  shadow-sm'>
                View more
              </Link>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4'>
              {offerListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="py-16 bg-gray-100 pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-20 lg:pr-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mx-4 my-4 md:my-0 border rounded-lg border-gray-300 border-solid p-10 shadow-md">
            <img src={SearchHome} alt="" />
            <h1 className="text-center text-red-500 text-lg  font-bold p-5">Browse Homes</h1>
            <p className="text-center text-slate-700 dark:text-slate-500 font-thin">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          </div>

          <div className="mx-4 my-4 md:my-0 md:ml-2 lg:ml-4 border rounded-lg border-gray-300 border-solid p-10 shadow-md">
            <img src={RentingHome} alt="" />
            <h1 className="text-center text-red-500 text-lg  font-bold p-5">Rent a home</h1>
            <p className="text-center text-slate-700 dark:text-slate-500 font-thin">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
          </div>

          <div className="mx-4 my-4 md:my-0 md:ml-2 lg:ml-4 border rounded-lg border-gray-300 border-solid p-10 shadow-md">
            <img src={SellHome} alt="" />
            <h1 className="text-center text-red-500 text-lg  font-bold p-5">Sell a home</h1>
            <p className="text-center text-slate-700 dark:text-slate-500 font-thin">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
          </div>
        </div>
      </div>
      <div className="py-10">
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3 flex items-center justify-between'>
              <h2 className='text-base uppercase font-semibold md:text-xl'>
                Properties for rent
              </h2>
              <Link to={'/search?type=rent'} className='bg-red-500 text-white text-sm px-4 py-2 font-medium  shadow-sm'>
                View more
              </Link>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4'>
              {rentListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="py-10">
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3 flex items-center justify-between'>
              <h2 className='text-base uppercase font-semibold md:text-xl'>
                Properties for Sale
              </h2>
              <Link to={'/search?type=sale'} className='bg-red-500 text-white text-sm px-4 py-2 font-medium  shadow-sm'>
                View more 
              </Link>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4'>
              {saleListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="  pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-40 lg:pr-40">
        <h1 className="py-4 font-32 px-4">211 Properties/News</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div style={{
            width:"550px"
            }} className="w-68 md:my-0 border  border-gray-300 border-solid shadow-md">
            <img style={{
              height:"180px",
              width:"100%"
            }} className="w-full h-32 border  border-gray-300 border-solid" src={SearchHome} alt="" />
            <p className="text-left mx-4 mt-10 text-slate-700 dark:text-slate-500 font-thin">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          </div>

          <div style={{
            width:"550px"
            }} className="mx-8 md:my-0 border  border-gray-300 border-solid shadow-md">
            <img style={{
              height:"180px",
              width:"100%"
            }} className="w-full h-32 border  border-gray-300 border-solid" src={SearchHome} alt="" />
            <p className="text-left mx-4 mt-10 text-slate-700 dark:text-slate-500 font-thin">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          </div>

          <div style={{
            width:"500px"
            }} className="mxl-8 md:my-0 border  border-gray-300 border-solid shadow-md">
            <img style={{
              height:"180px",
              width:"100%"
            }} className="w-full h-32 border  border-gray-300 border-solid" src={SearchHome} alt="" />
            <p className="text-left mx-4 mt-10 text-slate-700 dark:text-slate-500 font-thin">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
            <Link to={'/search?type=rent'} className='mx-4 decoration-underline'>
                View more
              </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
