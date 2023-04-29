import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Base from './Base';
import { getCategory } from '../admin/helper/adminapicalls';
import "../styles/FindByCategory.css"
export default function FindProductBycat({match}) {
    const routerparams= useParams();

    const [values , setValues] = useState({
        name: "",
        product: [],
        error:"",
        loading:false
    })

    const {name, product,error,loading} = values;

    const preload = categoryId => {
        
        getCategory(categoryId).then(data => {
          
           if(data.error){
               setValues({...values,error:data.error})
           }
           else{
               setValues({
                   ...values, name:data.name,
                   product: data.product
               })
           }
       })
   }

   useEffect(()=>{
       // console.log(values)
       preload(routerparams.categoryId)
    },[])



  return (
    <Base title={name} description="">
        <h1>Categories under {name}</h1>
        <div className="SC-F">
        {product.map((cat,ind)=>{
        return (
            <div key={ind}>
                <h1>{cat}</h1>
            </div>
        )
    })}
        </div>
   
    </Base>
  )
}