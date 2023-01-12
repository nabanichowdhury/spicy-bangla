import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = ({service}) => {
    const{id,name,img,description,price}=service;
    const navigate=useNavigate();
    const navigateToServiceDetails=id=>{
        navigate(`service/${id}`)

    }
    return (
        <div className='service'>
            <img src={img} className="w-100" ></img>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'  onClick={()=>navigateToServiceDetails(id)}>Order this</button>
        </div>
    );
};

export default Service;