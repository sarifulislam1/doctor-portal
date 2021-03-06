import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import Whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'

const Service = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8 mb-8 mt-8'>
                <div className="card w-96 bg-base-100 shadow-xl m-8">
                    <figure className="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl m-8 ">
                    <figure className="px-10 pt-10">
                        <img src={Cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl m-8">
                    <figure className="px-10 pt-10">
                        <img src={Whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>
            <div className='mx-8'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={treatment} alt="Album" /></figure>
                    <div className="card-body justify-center items-center text-left">
                        <h2 className="font-bold text-4xl ">Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;