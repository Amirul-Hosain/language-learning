import React from 'react';

const ServicesItem = (props) => {
    const { name, picture, price } = props.service
    return (

        <div style={{ height: '250px', margin: '15px 10px' }}>

            <div>
                <img width='200' height='120' src={picture} alt="" />
            </div>

            <div style={{ lineHeight: '15px', color: 'white', backgroundColor: 'rgb(50, 50, 83)', padding: '10px 10px' }}>
                <h4>{name}</h4>
                <p>Cost: {price}</p>
                <button style={{ width: '100px', padding: '5px 0px', marginTop: '5px', borderRadius: '3px' }}>Buy now</button>
            </div>
        </div>
    );
};

export default ServicesItem;