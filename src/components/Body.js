import React, {useEffect, useState} from 'react';
import RestuarantContainer from "./RestuarantContainer";
import Shimmer from './shimmer';
const Body = () => {
    //Local state 
    const [toprated, setToprated]=useState([]);
    const [filterRestuarents, setfilterRestuarents] = useState([]);   
    const [searchTxt, setSearchTxt] = useState('');

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.737627&lng=83.327646&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const res = await data.json();
        const restaurantGridListing = res?.data?.cards?.find(card => card.card.card.id === 'restaurant_grid_listing');
        if (restaurantGridListing) {
            setToprated(restaurantGridListing.card.card.gridElements.infoWithStyle.restaurants);
            setfilterRestuarents(restaurantGridListing.card.card.gridElements.infoWithStyle.restaurants);
        }
    }

    const handSearch = () => {
        const search = document.querySelector('input').value;
        const searchRes = toprated.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
        setfilterRestuarents(searchRes);
    }
    return filterRestuarents.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className='actionDiv'>
                <div className='serachBar'>
                    <input onChange={(e)=>setSearchTxt(e.target.value)} value={searchTxt} type='text' placeholder='Search Restuarants' />
                    <button  onClick={handSearch} className='login-btn'>Search</button>
                </div>
                <button 
                className='filter-btn' 
                onClick={()=>{
                    setfilterRestuarents(filterRestuarents.filter((res)=>res?.info?.avgRating > 4.3));
                }}>
                    Top Restuarants
                </button>
            </div>
            <RestuarantContainer resObj={filterRestuarents}/>
        </div>
    )
}

export default Body;