import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8 mb-8'>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure><img className='mx-8 my-8' src={clock} /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title text-white">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure><img className='mx-8 my-8' src={marker} /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure><img className='mx-8 my-8' src={phone} /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;