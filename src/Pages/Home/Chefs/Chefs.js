import React from 'react';
import chef1 from "../../../images/chefs/chef1.jpg";
import chef2 from "../../../images/chefs/chef2.jpg";
import chef3 from "../../../images/chefs/chef3.jpg";
import chef4 from "../../../images/chefs/chef4.jpg";
import chef5 from "../../../images/chefs/chef5.jpg";
import chef6 from "../../../images/chefs/chef6.jpg";
import Chef from '../Chef/Chef';

const chefs=[
    {id:1,name:'Susanta Chakraborty',img:chef1},
    {id:2,name:'Gobinda Das',img:chef2},
    {id:3,name:'Hashim Amla',img:chef3},
    {id:4,name:'Ashraful Islam',img:chef4},
    {id:5,name:'Norton Gomez',img:chef5},
    {id:6,name:'Hitendra Chowdhury',img:chef6},
]

const Chefs = () => {
    return (
        <div className='container' id="chefs">
            <h2 className='text-primary text-center'>Our Chefs</h2>
            <div className="row">
                {
                    chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;