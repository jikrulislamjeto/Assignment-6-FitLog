"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Flame,
  Star,
  Check,
  X,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import { SortOption, TabType, Workout } from "@/types/workout";

const MyPlanPage = () => {
  const {
    todayPlan,
    savedPlan,
    removeFromTodayPlan,
    removeFromSaved,
    toggleDone,
    isDone,
    totalExercises,
    totalMinutes,
    totalCalories,
    isLoaded,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<TabType>("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Pick list based on active tab
  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  // Sorted list based on chosen sort option
  const sortedWorkouts = useMemo(() => {
    const listCopy = [...currentList];
    return listCopy.sort((a, b) => {
      if (sortBy === "duration") {
        return (Number(b.duration) || 0) - (Number(a.duration) || 0);
      }
      if (sortBy === "calories") {
        return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
      }
      if (sortBy === "rating") {
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);
      }
      return 0;
    });
  }, [currentList, sortBy]);

  const handleSortSelect = (option: SortOption) => {
    setSortBy(option);
    setSortDropdownOpen(false);
  };

  const sortLabelMap: Record<SortOption, string> = {
    duration: "Duration",
    calories: "Calories",
    rating: "Rating",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 pb-24">
      {/* Page Title & Subtitle */}
      <div>
        <h1 className="font-oswald text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
          MY PLAN
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Summary Row (3 stat cards) */}
      <div className="mt-8 grid grid-cols-3 rounded-2xl bg-[#14171e] border border-[#232731] divide-x divide-[#232731] p-6 sm:p-8 shadow-xl">
        <div className="px-2 sm:px-4">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
            Exercises
          </span>
          <div className="font-oswald text-4xl sm:text-6xl font-black text-[#c4f000] mt-2">
            {isLoaded ? totalExercises : 0}
          </div>
        </div>

        <div className="px-3 sm:px-8">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
            Minutes
          </span>
          <div className="font-oswald text-4xl sm:text-6xl font-black text-white mt-2">
            {isLoaded ? totalMinutes : 0}
          </div>
        </div>

        <div className="px-3 sm:px-8">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
            Calories
          </span>
          <div className="font-oswald text-4xl sm:text-6xl font-black text-white mt-2">
            {isLoaded ? totalCalories : 0}
          </div>
        </div>
      </div>

      {/* Controls Bar: Tabs on Left, Sort Dropdown on Right */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Tabs Switcher */}
        <div className="inline-flex rounded-xl bg-[#14171e] border border-[#232731] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`rounded-lg px-5 py-2 text-xs sm:text-sm font-semibold transition ${
              activeTab === "today"
                ? "bg-[#222733] text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-2 text-xs sm:text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#222733] text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs font-semibold text-zinc-400">Sort By</span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-xl bg-[#14171e] border border-[#232731] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:border-[#353c4d] transition focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={sortDropdownOpen}
            >
              <span>{sortLabelMap[sortBy]}</span>
              <ChevronDown
                className={`w-4 h-4 text-zinc-400 transition-transform ${
                  sortDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sortDropdownOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-36 rounded-xl bg-[#171b24] border border-[#282e3c] py-1.5 shadow-2xl z-30 animate-in fade-in zoom-in-95 duration-150"
                role="listbox"
              >
                {(["duration", "calories", "rating"] as SortOption[]).map(
                  (opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSortSelect(opt)}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm transition flex items-center justify-between ${
                        sortBy === opt
                          ? "bg-[#222735] text-[#c4f000] font-bold"
                          : "text-zinc-300 hover:bg-[#1f2430] hover:text-white"
                      }`}
                    >
                      <span>{sortLabelMap[opt]}</span>
                      {sortBy === opt && <Check className="w-3.5 h-3.5" />}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {!isLoaded ? (
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#c4f000] mb-3" />
          <p className="font-oswald text-lg font-bold uppercase tracking-wider text-zinc-400">
            Loading workouts…
          </p>
        </div>
      ) : sortedWorkouts.length === 0 ? (
        /* Empty State */
        <div className="mt-6 rounded-2xl border border-dashed border-[#232731] bg-[#111319] px-6 py-20 sm:py-28 text-center shadow-inner">
          <h2 className="font-oswald text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            NOTHING HERE YET
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#c4f000] px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-black transition-all hover:bg-[#b5de00] hover:shadow-lg hover:shadow-[#c4f000]/20 active:scale-95"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        /* Workout Cards List */
        <div className="mt-6 space-y-4">
          {sortedWorkouts.map((workout: Workout) => {
            const completed = isDone(workout.id);

            return (
              <div
                key={workout.id}
                className={`group rounded-2xl bg-[#14171e] border p-4 sm:p-5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  completed
                    ? "border-[#2d3a24] bg-[#14181a]/90"
                    : "border-[#232731] hover:border-[#353c4d]"
                }`}
              >
                {/* Left section: Thumbnail + Details */}
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <div className="relative h-20 w-28 sm:h-24 sm:w-36 flex-shrink-0 rounded-xl overflow-hidden bg-[#181c25]">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-cover"
                    />
                    {completed && (
                      <div className="absolute inset-0 bg-[#0f1115]/60 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-[#c4f000] text-black font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Check className="w-3 h-3" /> Done
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-oswald text-lg sm:text-xl font-bold uppercase tracking-tight truncate transition-colors ${
                        completed
                          ? "line-through text-zinc-400"
                          : "text-white group-hover:text-[#c4f000]"
                      }`}
                    >
                      {workout.name}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-0.5 truncate">
                      {workout.equipment}
                    </p>

                    <div className="mt-3 flex items-center gap-4 text-xs font-medium text-zinc-300">
                      <div className="flex items-center gap-1 text-zinc-300">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{workout.duration} min</span>
                      </div>

                      <div className="flex items-center gap-1 text-zinc-300">
                        <Flame className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{workout.caloriesBurned} kcal</span>
                      </div>

                      <div className="flex items-center gap-1 text-zinc-300">
                        <Star className="w-3.5 h-3.5 text-zinc-400 fill-zinc-400" />
                        <span>{workout.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right section: Action Buttons */}
                <div className="flex items-center justify-end gap-2.5 sm:gap-3 self-end sm:self-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-[#232731] w-full sm:w-auto">
                  {/* View Details button */}
                  <Link
                    href={`/exercise/${workout.id}`}
                    className="rounded-full border border-[#2b3140] bg-transparent px-4 py-2 text-xs font-bold text-white hover:bg-[#1e232f] hover:border-zinc-500 transition"
                  >
                    View Details
                  </Link>

                  {/* Mark as Done button (Only in Today's Plan) */}
                  {activeTab === "today" && (
                    <button
                      type="button"
                      onClick={() => toggleDone(workout.id)}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                        completed
                          ? "bg-[#1f281a] border border-[#3b5428] text-[#c4f000]"
                          : "bg-[#c4f000] text-black hover:bg-[#b5de00] shadow-sm hover:shadow-[#c4f000]/20 active:scale-95"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{completed ? "Done" : "Mark as Done"}</span>
                    </button>
                  )}

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (activeTab === "today") {
                        removeFromTodayPlan(workout.id);
                      } else {
                        removeFromSaved(workout.id);
                      }
                    }}
                    className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-[#202533] transition"
                    aria-label={`Remove ${workout.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;