import React, {useState} from 'react';
import RestuarantContainer from "./RestuarantContainer";
import resObj from '../utils/mockdata';
const Body = () => {
    const [toprated, setToprated]=useState(resObj);
    return (
        <div className='body'>
            <button 
            className='filter-btn' 
            onClick={()=>{
                setToprated(toprated.filter((res)=>res.data.avgRating > 4));
                console.log(toprated);
            }}>
                Top Restuarants
            </button>
            <RestuarantContainer resObj={toprated}/>
        </div>
    )
}

export default Body;