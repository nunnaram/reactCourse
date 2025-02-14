import {CDN_URL} from '../utils/constants';
const RestuarantCard = (props) => {
    const {name,cuisines,avgRating, costForTwo, cloudinaryImageId, deliveryTime} = props.resData?.data;
    return (
        <div className='restuarant-card'>
            <div className='image-container'>
                <img src={CDN_URL+cloudinaryImageId} alt='restuarant' />
            </div>
            <h3 className='name'>{name}</h3>
            <div className='rating'>{avgRating}</div>
            <div className='cuisins'>{cuisines.join(", ")}</div>
            {costForTwo ? <div className='cost-for-two'>{costForTwo}</div> : null}
        </div>
    )
}
export default RestuarantCard;