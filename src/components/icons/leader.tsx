import React from "react";

export const LeaderIcon = ({ className } : { className : string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"    
      className={className}
    >
      <path
        fill="#cfd8dc"
        d="M0 35c0 0 2.94-6 10.5-6S21 35 21 35v4H0V35zM27 35c0 0 2.94-6 10.5-6S48 35 48 35v4H27V35z"
      />
      <path fill="#ffb74d" d="M24 9A6 6 0 1 0 24 21A6 6 0 1 0 24 9Z" />
      <path
        fill="#cfd8dc"
        d="M10.5 16A5.5 5.5 0 1 0 10.5 27 5.5 5.5 0 1 0 10.5 16zM37.5 16A5.5 5.5 0 1 0 37.5 27 5.5 5.5 0 1 0 37.5 16z"
      />
      <path
        fill="#ff3d00"
        d="M36,32v7H12c0,0,0-2.029,0-7c0,0,3-7,12-7S36,32,36,32z"
      />
    </svg>
  );
};
