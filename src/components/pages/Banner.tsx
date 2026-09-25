import React from 'react';
import BannerImage from '@/assets/banner.png';
import Image from 'next/image';
import { MoveDown } from 'lucide-react';

const Banner = () => {
    return (
        <section className="min-h-dvh bg-[#0C0D10] text-white">
            {/* Main Container */}
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Hero Card */}
                <div className="hero min-h-96 rounded-2xl bg-[#1A1D23] px-8 py-12">
                    <div className="hero-content w-full flex-col gap-10 lg:flex-row-reverse lg:gap-30">
                        {/* Banner Image */}
                        <div className="shrink-0">
                            <Image
                                src={BannerImage}
                                alt="FitLog workout"
                                width={400}
                                height={400}
                                priority

                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">

                            {/* Subtitle */}
                            <p className="py-5 text-lg font-semibold text-(--main-color)">
                                WORKOUT LIBRARY
                            </p>
                            

                            {/* Heading */}
                            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                TRAIN WITH INTENT.
                                <br />
                                LOG EVERY SET.
                            </h1>

                            {/* Description */}
                            <p className="max-w-xl py-6 text-gray-300">
                                FitLog is a dark, no-nonsense gym companion:
                                pick a lift, lock it into today&apos;s plan, and
                                watch the week&apos;s work add up.
                            </p>

                            {/* CTA Button */}
                            <button className="btn btn-primary rounded-2xl text-black">
                                Browse Workouts
                                <MoveDown
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;