import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesItem from '../ServicesItem/ServicesItem';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <Trainers></Trainers>
            </div>

            {/* services */}
            <div>
                <div>
                    <h2 style={{
                        textAlign: 'center', fontSize: '30px',
                        marginTop: '30px'
                    }}> Our Services
                    </h2>
                </div>


                <div style={{ margin: 'auto', padding: '20px', width: '650px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

                    {
                        services.map(service => <ServicesItem
                            key={service._id}
                            service={service}
                        ></ServicesItem>)
                    }
                </div>
            </div>
        </div >
    )
};

export default Home;