import RestuarantCard from "./RestuarantCard";

   
const RestuarantContainer = ({resObj}) => {
    return (
        <div className='restuarant-container'>
           {resObj.map((item) => <RestuarantCard key={item.data.id}  resData = {item} />)}
        </div>
    )
} 
export default RestuarantContainer;