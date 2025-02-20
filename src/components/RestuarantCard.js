import {CDN_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
const RestuarantCard = (props) => {
    const {name,cuisines,avgRating, costForTwo, cloudinaryImageId, id} = props.resData;
    console.log(id)
    return (
        <Link to={'/restaurants/'+id} className='restuarant-card'>
            <div className='image-container'>
                <img src={CDN_URL+cloudinaryImageId} alt='restuarant' />
            </div>
            <h3 className='name'>{name}</h3>
            <div className='rating'>{avgRating}</div>
            <div className='cuisins'>{cuisines.join(", ")}</div>
            {costForTwo ? <div className='cost-for-two'>{costForTwo}</div> : null}
        </Link>
    )
}
export default RestuarantCard;