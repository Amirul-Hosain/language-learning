import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllService from '../AllServcies/AllService';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div style={{ width: '70%', margin: '30px auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {
                services.map(service => <AllService
                    key={service._id}
                    service={service}
                ></AllService>)
            }
        </div>
    );
};

export default Services;