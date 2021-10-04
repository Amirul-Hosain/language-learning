import React from 'react';

const AllService = (props) => {
    const { name, picture, price } = props.service
    return (
        <div style={{
            margin: '15px 10px', padding: '20px 10px',
            border: '1px solid gray', borderRadius: '8px'
        }}>

            <img width='200' height='150' src={picture} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <button className='btn btn-danger'>Buy now</button>
        </div>
    );
};

export default AllService;