import React from 'react';
import NoProDomain from './NoProDomain'
import './FullComp.css';
export default function FullComp(props) {
    return (
      // 
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{props.cardTitle}</h5>
                  <h6 className="card-price text-center">${props.value}<span className="period">/month</span></h6>
                  <hr/>
                  <ul className="fa-ul">
                    <li className= {`${
                      props.cardTitle === 'free' ? 'font-weight-normal' : 'font-weight-bold'
                      }`}><span className="fa-li"><i className="fas fa-check"></i></span>{props.user}</li>

                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage} </li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li className={`${
                      props.cardTitle === 'free' ? 'text-muted' : 'text-visible'
                      }`}><span className="fa-li"><i className={`${
                        props.cardTitle === 'free' ? 'fas fa-times' : 'fas fa-check'
                        }`}></i></span>Unlimited Private Projects</li>
                                
                    <li className={`${
                      props.cardTitle === 'free' ? 'text-muted' : 'text-visible'
                      }`}><span className="fa-li"><i className={`${
                        props.cardTitle === 'free' ? 'fas fa-times' : 'fas fa-check'
                        }`}></i></span>Dedicated
                      Phone Support</li>
                      
                      <NoProDomain 
                        cardTitle = {props.cardTitle}
                      />

                    <li className={`${
                      props.cardTitle === 'pro' ? 'text-visible' : 'text-muted'
                      }`}><span className="fa-li"><i className={`${
                        props.cardTitle === 'pro' ? 'fas fa-check' : 'fas fa-times'
                        }`}></i></span>Monthly Status Reports</li>

                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-primary text-uppercase" href="#">Button</button>
                  </div>
                </div>
              </div>
    );
};