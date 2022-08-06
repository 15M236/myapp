import React from 'react';
import FullComp from './FullComp';

export default function Back() {

    let data =[
      {
        cardTitle: 'free',
        value : 0,
        user : "single User",
        storage : 5
      },
      {
        cardTitle : "plus",
        value : 9 ,
        user : "5 Users",
        storage : 50
      },
      {
        cardTitle : "pro",
        value : 49 ,
        user : "Unlimited Users",
        storage : 150
      }
    ];
    return (
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              
              {data.map((element , index) => {
                return (
                <div className="col-lg-4">
                  <FullComp 
                    cardTitle = {element.cardTitle} 
                    value = {element.value}
                    user = {element.user}
                    storage = {element.storage}
                  />
                </div>)})}

            {/* <div className="col-lg-4">
              <FullComp 
              cardTitle="free"
              value = "0"
              user = "Single User"
              storage = "5GB Storage"
              />
            </div> 
         
            <div className="col-lg-4">
              <FullComp 
              cardTitle="plus" 
              value = "9"
              user="5 Users"
              storage = "50GB Storage"
              />
            </div>
        
            <div className="col-lg-4">
              <FullComp 
              cardTitle="pro"
              value = "49"
              user = "Unlimited Users"
              storage = "150GB Storage"
              />
            </div> */}
            </div>
          </div>
       
      </section> 
    );
};


