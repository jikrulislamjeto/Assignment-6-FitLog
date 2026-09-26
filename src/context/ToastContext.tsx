"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = Math.random().toString(36).substring(2, 9);
      queueMicrotask(() => {
        setToasts((prev) => [...prev, { id, message, type }]);
      });

      setTimeout(() => {
        removeToast(id);
      }, 3500);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="assertive"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((toast) => {
          const isSuccess = toast.type === "success";
          const isError = toast.type === "error";
          const isWarning = toast.type === "warning";

          return (
            <div
              key={toast.id}
              className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#171b24] border border-[#2b3140] text-white shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
            >
              <div className="flex items-center gap-3">
                {isSuccess && (
                  <CheckCircle2 className="w-5 h-5 text-[#c4f000] shrink-0" />
                )}
                {isError && (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                )}
                {isWarning && (
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                )}
                {!isSuccess && !isError && !isWarning && (
                  <Info className="w-5 h-5 text-sky-400 shrink-0" />
                )}
                <span className="text-sm font-medium text-[#e8eaef] leading-snug">
                  {toast.message}
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="text-zinc-400 hover:text-white p-1 rounded-md transition hover:bg-[#222735]"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};