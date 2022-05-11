import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <p className='text-primary text-xl font-bold uppercase'>OUR SERVICES</p>
                <h2 className='text-3xl uppercase'>Services We Provide</h2>
            </div>
            <div>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;