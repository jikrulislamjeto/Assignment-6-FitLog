"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { Workout } from "@/types/workout";
import { useToast } from "@/context/ToastContext";

interface WorkoutContextType {
  todayPlan: Workout[];
  savedPlan: Workout[];
  completedIds: number[];
  addToTodayPlan: (workout: Workout) => boolean;
  removeFromTodayPlan: (id: number) => void;
  addToSaved: (workout: Workout) => boolean;
  removeFromSaved: (id: number) => void;
  toggleDone: (id: number) => void;
  isDone: (id: number) => boolean;
  isInTodayPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  totalExercises: number;
  totalMinutes: number;
  totalCalories: number;
  isLoaded: boolean;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

const STORAGE_KEY_TODAY = "fitlog_today_plan_v1";
const STORAGE_KEY_SAVED = "fitlog_saved_plan_v1";
const STORAGE_KEY_COMPLETED = "fitlog_completed_ids_v1";
const MAX_PLAN_CAP = 5;

export const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedPlan, setSavedPlan] = useState<Workout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { showToast } = useToast();

  // Load from localStorage on client mount asynchronously
  useEffect(() => {
    try {
      const storedToday = localStorage.getItem(STORAGE_KEY_TODAY);
      const storedSaved = localStorage.getItem(STORAGE_KEY_SAVED);
      const storedCompleted = localStorage.getItem(STORAGE_KEY_COMPLETED);

      queueMicrotask(() => {
        if (storedToday) {
          setTodayPlan(JSON.parse(storedToday));
        }
        if (storedSaved) {
          setSavedPlan(JSON.parse(storedSaved));
        }
        if (storedCompleted) {
          setCompletedIds(JSON.parse(storedCompleted));
        }
        setIsLoaded(true);
      });
    } catch (e) {
      console.error("Failed to load fitlog state from localStorage", e);
      queueMicrotask(() => {
        setIsLoaded(true);
      });
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_TODAY, JSON.stringify(todayPlan));
    } catch (e) {
      console.error("Failed to save todayPlan", e);
    }
  }, [todayPlan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(savedPlan));
    } catch (e) {
      console.error("Failed to save savedPlan", e);
    }
  }, [savedPlan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
    } catch (e) {
      console.error("Failed to save completedIds", e);
    }
  }, [completedIds, isLoaded]);

  const isInTodayPlan = useCallback(
    (id: number) => todayPlan.some((w) => w.id === id),
    [todayPlan]
  );

  const isSaved = useCallback(
    (id: number) => savedPlan.some((w) => w.id === id),
    [savedPlan]
  );

  const isDone = useCallback(
    (id: number) => completedIds.includes(id),
    [completedIds]
  );

  const addToTodayPlan = useCallback(
    (workout: Workout): boolean => {
      if (todayPlan.some((w) => w.id === workout.id)) {
        showToast(`"${workout.name}" is already in today's plan`, "info");
        return false;
      }

      if (todayPlan.length >= MAX_PLAN_CAP) {
        showToast(
          `Cap of ${MAX_PLAN_CAP} lifts reached! Finish them before adding more.`,
          "warning"
        );
        return false;
      }

      setTodayPlan((prev) => [...prev, workout]);
      showToast(`Added "${workout.name}" to today's plan!`, "success");
      return true;
    },
    [todayPlan, showToast]
  );

  const removeFromTodayPlan = useCallback(
    (id: number) => {
      const workout = todayPlan.find((w) => w.id === id);
      setTodayPlan((prev) => prev.filter((w) => w.id !== id));
      setCompletedIds((prev) => prev.filter((item) => item !== id));
      if (workout) {
        showToast(`Removed "${workout.name}" from today's plan`, "info");
      }
    },
    [todayPlan, showToast]
  );

  const addToSaved = useCallback(
    (workout: Workout): boolean => {
      if (savedPlan.some((w) => w.id === workout.id)) {
        showToast(`"${workout.name}" is already saved`, "info");
        return false;
      }

      setSavedPlan((prev) => [...prev, workout]);
      showToast(`Saved "${workout.name}" for later!`, "success");
      return true;
    },
    [savedPlan, showToast]
  );

  const removeFromSaved = useCallback(
    (id: number) => {
      const workout = savedPlan.find((w) => w.id === id);
      setSavedPlan((prev) => prev.filter((w) => w.id !== id));
      if (workout) {
        showToast(`Removed "${workout.name}" from saved list`, "info");
      }
    },
    [savedPlan, showToast]
  );

  const toggleDone = useCallback(
    (id: number) => {
      const workout = todayPlan.find((w) => w.id === id);
      const isCompleted = completedIds.includes(id);

      if (isCompleted) {
        setCompletedIds((prev) => prev.filter((item) => item !== id));
        showToast(`Unmarked "${workout?.name || "workout"}"`, "info");
      } else {
        setCompletedIds((prev) => [...prev, id]);
        showToast(
          `Great job! "${workout?.name || "workout"}" marked as completed!`,
          "success"
        );
      }
    },
    [todayPlan, completedIds, showToast]
  );

  const totalExercises = todayPlan.length;

  const totalMinutes = useMemo(() => {
    return todayPlan.reduce((acc, curr) => acc + (Number(curr.duration) || 0), 0);
  }, [todayPlan]);

  const totalCalories = useMemo(() => {
    return todayPlan.reduce((acc, curr) => acc + (Number(curr.caloriesBurned) || 0), 0);
  }, [todayPlan]);

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedPlan,
        completedIds,
        addToTodayPlan,
        removeFromTodayPlan,
        addToSaved,
        removeFromSaved,
        toggleDone,
        isDone,
        isInTodayPlan,
        isSaved,
        totalExercises,
        totalMinutes,
        totalCalories,
        isLoaded,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  return context;
};