"use client";

import React, { useState, useEffect, useMemo } from "react";
import WorkoutCard from "@/components/WorkoutCard";
import { Workout } from "@/types/workout";
import { fallbackWorkouts } from "@/data/fallbackWorkouts";
import { Search, Loader2 } from "lucide-react";

const CATEGORIES = [
  "All",
  "Chest",
  "Arms",
  "Back",
  "Legs",
  "Shoulders",
  "Core",
  "Full Body",
];

const LibrarySection = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let isMounted = true;
    const fetchWorkouts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setWorkouts(data);
          } else {
            setWorkouts(fallbackWorkouts);
          }
        }
      } catch (err) {
        console.warn("Using fallback workouts due to network error", err);
        if (isMounted) {
          setWorkouts(fallbackWorkouts);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchWorkouts();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredWorkouts = useMemo(() => {
    return workouts.filter((workout) => {
      const matchesSearch =
        workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workout.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workout.muscleGroups.some((m) =>
          m.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" ||
        workout.muscleGroups.some(
          (m) => m.toLowerCase() === selectedCategory.toLowerCase()
        );

      return matchesSearch && matchesCategory;
    });
  }, [workouts, searchTerm, selectedCategory]);

  return (
    <section id="library" className="w-full scroll-mt-20 py-8">
      {/* Header and Controls */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            THE LIBRARY
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search lifts or muscles..."
            className="w-full rounded-xl bg-[#14171e] border border-brand-border pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#CCFF00] focus:outline-none focus:ring-1 focus:ring-[#CCFF00] transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition ${
                isSelected
                  ? "bg-[#CCFF00] text-black shadow-sm"
                  : "bg-[#14171e] border border-brand-border text-zinc-400 hover:text-white hover:border-[#384052]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Loading Skeleton Animation */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="flex items-center gap-3 text-[#CCFF00] mb-4">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
          <p className="font-oswald text-lg font-bold uppercase tracking-wider text-zinc-300">
            LOADING WORKOUTS...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#14171e] border border-brand-border p-4 flex flex-col gap-3 animate-pulse"
              >
                <div className="aspect-16/10 w-full rounded-xl bg-[#1a1e27]" />
                <div className="flex gap-2">
                  <div className="h-4 w-12 rounded-full bg-[#252b37]" />
                  <div className="h-4 w-12 rounded-full bg-[#252b37]" />
                </div>
                <div className="h-6 w-3/4 rounded bg-[#252b37]" />
                <div className="h-4 w-1/2 rounded bg-[#252b37]" />
                <div className="mt-4 pt-3 border-t border-brand-border flex justify-between">
                  <div className="h-4 w-12 rounded bg-[#252b37]" />
                  <div className="h-4 w-12 rounded bg-[#252b37]" />
                  <div className="h-4 w-8 rounded bg-[#252b37]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty Search Result */}
      {!loading && filteredWorkouts.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[#2b3140] bg-[#12151b] p-12 text-center my-6">
          <h3 className="font-oswald text-xl font-bold uppercase text-white mb-2">
            No Workouts Found
          </h3>
          <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6">
            We couldn&apos;t find any exercises matching &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="rounded-full bg-[#CCFF00] px-5 py-2 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#a7c61e] transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid of Workout Cards */}
      {!loading && filteredWorkouts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LibrarySection;