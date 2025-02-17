import RestuarantCard from "./RestuarantCard";

   
const RestuarantContainer = ({resObj}) => {
    return (
        <div className='restuarant-container'>
           {resObj.map((item) => <RestuarantCard key={item.info.id}  resData = {item.info} />)}
        </div>
    )
} 
export default RestuarantContainer;