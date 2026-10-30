import { CloudSun } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const Logo = () => {
    return (
        <NavLink to="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
                <CloudSun size={29} className="text-blue-600" />
            </div>

            <div>
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                    S<span className=" text-2xl font-bold text-yellow-300">K</span>y<span className="text-blue-600">Cast</span>
                </h1>
                <p className="text-[10px] font-medium tracking-widest text-slate-400">
                    WEATHER FORECAST
                </p>
            </div>
        </NavLink>
    );
};

export default Logo;