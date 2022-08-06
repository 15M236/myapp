import React from 'react';

export default function NoProDomain(props) {
    let firstName = ''
    let subName = ''
    if(props.cardTitle === 'pro'){
        firstName = 'UnLimited '
        subName = 's'
    }
    return (

        <li className= {`${
            props.cardTitle === 'free' ? 'text-muted' : 'text-visible'
            }`} ><span className="fa-li"><i className={`${
            props.cardTitle === 'free' ? 'fas fa-times' : 'fas fa-check'
            }`}></i></span>
        <span className="font-weight-bold">{firstName}</span>Free SubDomain{subName}
        </li>
    )
}