import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <Navbar></Navbar>
            <div className='container mt-lg-4'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='text-start'>
                        <h3>Difference between Authentication and Authorization?</h3>
                        <p>Authentication:  যখন কোন ইউজার নিজে তার পরিচয়পত্র/প্রমান প্রদান করে তখন তাকে অথেনটিকেশন বলে। উদাহরনস্বরুপ বলা যায়, যখন একজন ইউজার ইমেইল ভেরিফিকেশন করে ,পাসওয়ার্ড দিয়ে নিজের জন্য ইউজার বানায়। তখন এটিকে অথেনটিকেশন বলা যায়।
                        </p>
                        <p>Authorization: যখন কেউ অন্য কোন মাধ্যমে দ্বারা নিজের পরিচয় প্রমান করে তখন এটাকে অথোরাইজেশন বলে। এক্ষেত্রে বলা যায় গুগল ইউজার অথোরাইজেশন করে থাকে। 
                        যেমন আমি যদি booking.com এ গুগল দিয়ে ইউজার বানাতে চাই তাহলে গুগল booking.com এর কাছে আমার validity প্রমান করবে। আমার কিছু তথ্য booking.com কে দিয়ে দিবে ব্যবহার এর জন্য। তবে আমার ইমেইল এর পাসওয়ার্ড ব্যতিত।</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='text-start'>
                        <h3>Why we are you using firebase? What other options do you have to implement authentication?</h3>
                        <p>as a new Developer firebase is very easy to use for web authentication so, I use firebase.</p>

                        <p>Yes, I have other option for doing authentication in my application. But I feel comfortable with firebase for authentication.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='text-start'>
                            <h3>What other services does firebase provide other than authentication?</h3>
                            <p>I know there are many services provide firebase than authentication. services are:
                                <ul>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions.</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                    <li>Cloud Messaging</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;