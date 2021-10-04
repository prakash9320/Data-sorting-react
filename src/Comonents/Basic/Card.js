import React from 'react'

const Card = ({ menudata}) => {
    console.log(menudata)
    return (
        <div>
 <section className ="main-card--cointainer">
 {
                menudata.map((currentElement) =>{
                 const {id,name,category,image,description} = currentElement;

                    return(
                       <div> <div className ="card-container" >
                       <div className= "card">
                           <div className ="card-body">
                               <span className ="card-number card-circle subtle">{id}</span>
                               <span className ="card-author subtle">{category}</span>
                               <h2 className ="card-title">{name}</h2>
                               <span className ="card-description subtle">
                                       {description}
                               </span>
                               <div className ="card-read">Read</div>
       
                           </div>
                           <img src ={image} alt ="Maggi Image" className ="card-media"/>
                            <span className ="card-tag subtle">Order Now</span>
                       </div>
                   </div></div>  
                    )
                })
            }
 </section>
           
            
        </div>
    )
}

export default Card
