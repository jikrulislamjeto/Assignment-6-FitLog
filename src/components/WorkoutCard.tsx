import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/exercise/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#14171e] border border-brand-border hover:border-[#363e4f] hover:bg-[#181c25] transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
    >
      {/* Image demonstration */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#181b24]">
        <Image
          src={workout.image}
          alt={`${workout.name} demonstration`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#14171e] via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Muscle Group Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors line-clamp-1">
          {workout.name}
        </h3>

        {/* Equipment Line */}
        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
          {workout.equipment}
        </p>

        {/* Stats Row */}
        <div className="mt-4 pt-3 border-t border-brand-border flex items-center justify-between text-xs text-zinc-300 font-medium">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-300">
            <Flame className="w-3.5 h-3.5 text-zinc-400" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-300">
            <Star className="w-3.5 h-3.5 text-zinc-400 fill-zinc-400" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;