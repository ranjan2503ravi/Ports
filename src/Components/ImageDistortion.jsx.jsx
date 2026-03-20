import React, { useRef } from "react";

const ImageDistortion = () => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6; 
    const rotateY = ((x - centerX) / centerX) * 6; 

    el.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = () => {
    const el = ref.current;
    el.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  };

  return (
    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center">

      
      <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-400/20 blur-2xl" />

   
      <div className="absolute w-[90%] h-[90%] rounded-full border border-white/10" />

      
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative w-[75%] h-[75%] rounded-full overflow-hidden shadow-xl transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/IMG.jpg"
          alt="profile"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
      </div>

      
      <div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-1 h-1 bg-purple-400 rounded-full bottom-12 right-12 animate-ping" />
    </div>
  );
};

export default ImageDistortion;