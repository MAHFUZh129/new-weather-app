import React from 'react';
import Features from '../components/Features';
import Forecast from '../components/Forecast';
import Hero from '../components/Hero';
import { weatherData } from '../../public/weatherData';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Hero weather={weatherData} />

            <main className="mx-auto max-w-7xl px-6 sm:px-10">
                <Forecast days={weatherData.forecast} />
                <Features />
            </main>
        </div>
    );
};``

export default Home;