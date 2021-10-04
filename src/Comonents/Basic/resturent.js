import React ,{useState}from 'react'
 import "./Style.css";
 import Menu from './MenuApi';
 import Card  from './Card'
import NavBar from './NavBar';

 const uniqueList = [  ... new Set (Menu.map((currentElement) =>{
     return currentElement.category
 }) ),
 "All"
]

const Resturent = () => {
     const [ Menudata,setMenuData] = useState(Menu);
     const [menuList,setMenuList] = useState(uniqueList);
         
     const filterItem =(category) =>{
               if(category === "All"){
                   setMenuData(Menu);
               }
          const updateList = Menu.filter((currentElement) => {
               return currentElement.category===category;
          });
         setMenuData(updateList);
     };
    return (
        <div>
           <NavBar filterItem ={filterItem} menuList={menuList}/>
           <Card menudata = {Menudata}/>
        </div>
    )
}

export default Resturent
