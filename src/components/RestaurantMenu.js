import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";  

function RestaurantMenu() {

  const [resInfo, setResInfo] = useState([]);
  const resid = useParams();
 

  useEffect(() => {
   fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resid.id);

    const res = await data.json();
    console.log(res);
    setResInfo(res);
  }

  return resInfo === null ?(<Shimmer />):(
    <div className="restaurent-menu">
      <h1>{resInfo?.data?.cards[0].card.card.text}</h1>
    <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
    </ul>
    </div>
  )
}

export default RestaurantMenu
