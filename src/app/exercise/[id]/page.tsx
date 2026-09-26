"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarPlus,
  Bookmark,
  Check,
  ArrowLeft,
  Loader2,
  BookmarkCheck,
} from "lucide-react";
import { Workout } from "@/types/workout";
import { fallbackWorkouts } from "@/data/fallbackWorkouts";
import { useWorkout } from "@/context/WorkoutContext";

interface ExercisePageProps {
  params: Promise<{ id: string }>;
}

const ExerciseDetailPage = ({ params }: ExercisePageProps) => {
  const resolvedParams = use(params);
  const exerciseId = Number(resolvedParams.id);

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const {
    addToTodayPlan,
    addToSaved,
    isInTodayPlan,
    isSaved,
    todayPlan,
  } = useWorkout();

  useEffect(() => {
    let isMounted = true;

    const loadWorkout = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.abcz.workers.dev/api/fitlog/${exerciseId}`,
          { cache: "no-store" }
        );
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setWorkout(data);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("API fetch error, falling back to local dataset", err);
      }

      // Fallback
      const fallback = fallbackWorkouts.find((w) => w.id === exerciseId);
      if (isMounted) {
        if (fallback) {
          setWorkout(fallback);
        } else {
          setHasError(true);
        }
        setLoading(false);
      }
    }

    loadWorkout();
    return () => {
      isMounted = false;
    };
  }, [exerciseId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-[#CCFF00] mb-4" />
        <p className="font-oswald text-xl uppercase tracking-wider text-zinc-300">
          Loading workout details...
        </p>
      </div>
    );
  }

  if (hasError || !workout) {
    return notFound();
  }

  const inPlan = isInTodayPlan(workout.id);
  const saved = isSaved(workout.id);
  const isCapReached = todayPlan.length >= 5 && !inPlan;

  const keySpecs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets.toString() },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating.toString() },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Back button */}
      <Link
        href="/#library"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition mb-6 group focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Workouts</span>
      </Link>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side — Visual Media */}
        <div className="lg:col-span-6">
          <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full rounded-2xl overflow-hidden bg-[#151820] border border-brand-border shadow-2xl">
            <Image
              src={workout.image}
              alt={`${workout.name} workout visual`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-bg/80 via-transparent to-transparent opacity-40" />
          </div>
        </div>

        {/* Right Side — Details */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Title */}
          <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {workout.description}
          </p>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="bg-[#CCFF00] text-black text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Key Specs Table Panel */}
          <div className="mt-8 rounded-2xl bg-[#14171e] border border-brand-border divide-y divide-brand-border overflow-hidden shadow-lg">
            {keySpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between px-5 py-3 text-xs sm:text-sm"
              >
                <span className="font-bold uppercase tracking-wider text-zinc-400">
                  {spec.label}
                </span>
                <span className="font-semibold text-white">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions Section */}
          <div className="mt-8">
            <h2 className="font-oswald text-xl font-extrabold uppercase tracking-tight text-white mb-4">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-3">
              {workout.instructions.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                >
                  <span className="shrink-0 font-bold text-zinc-400 text-sm">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            {/* Add to today's plan button */}
            <button
              type="button"
              onClick={() => addToTodayPlan(workout)}
              disabled={inPlan || isCapReached}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition shadow-lg ${inPlan
                  ? "bg-[#1f281a] border border-[#3b5428] text-[#CCFF00] cursor-default"
                  : isCapReached
                    ? "bg-[#1c1f26] border border-[#2c303c] text-zinc-500 cursor-not-allowed"
                    : "bg-[#CCFF00] text-black hover:bg-brand-lime-hover hover:shadow-[#CCFF00]/20 active:scale-98"
                }`}
            >
              {inPlan ? (
                <>
                  <Check className="w-4 h-4 text-[#CCFF00]" />
                  <span>In Today&apos;s Plan</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-4 h-4" />
                  <span>
                    {isCapReached ? "Plan Full (5 max)" : "Add to today's plan"}
                  </span>
                </>
              )}
            </button>

            {/* Save for later button */}
            <button
              type="button"
              onClick={() => addToSaved(workout)}
              disabled={saved}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-semibold transition ${saved
                  ? "bg-[#181d26] border border-[#2c3547] text-zinc-300 cursor-default"
                  : "bg-[#14171e] border border-[#2c3140] text-white hover:bg-[#1a1f29] hover:border-zinc-500 active:scale-98"
                }`}
            >
              {saved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-[#CCFF00]" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save for later</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;