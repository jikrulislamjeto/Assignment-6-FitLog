import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
      <Loader2 className="w-10 h-10 animate-spin text-[#c4f000] mb-4" />
      <p className="font-oswald text-lg font-bold uppercase tracking-widest text-zinc-300">
        LOADING FITLOG...
      </p>
    </div>
  );
};

export default Loading;