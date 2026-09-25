import React from 'react';
import BannerImage from '@/assets/banner.png';
import Image from 'next/image';
import { MoveDown } from 'lucide-react';

const Banner = () => {
    return (
        <div className="bg-[#0C0D10] text-white h-dvh">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="hero bg-[#1A1D23] min-h-96 rounded-2xl px-8 py-12">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full gap-25">
                        <Image
                            src={BannerImage}
                            alt="FitLog workout"
                            height={400}
                            width={400}
                        />

                        <div className="flex-1">
                            <p className="text-lg font-semibold py-5 text-(--main-color)">
                                WORKOUT LIBRARY
                            </p>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                TRAIN WITH INTENT.
                                <br />
                                LOG EVERY SET.
                            </h1>

                            <p className="py-6 text-gray-300 max-w-xl">
                                FitLog is a dark, no-nonsense gym companion:
                                pick a lift, lock it into today&apos;s plan, and
                                watch the week&apos;s work add up.
                            </p>

                            <button className="btn btn-primary text-black rounded-2xl">
                                Browse Workouts <MoveDown className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;