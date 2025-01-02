"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensure the Skeleton styles are imported

const SubCountSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div className="mb-2">
        <Skeleton circle={true} height={32} width={32} />
      </div>

      <div className="w-24">
        <Skeleton height={16} />
      </div>
    </div>
  );
};

export default SubCountSkeleton;
