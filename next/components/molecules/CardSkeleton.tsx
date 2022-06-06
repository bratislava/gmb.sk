import React from 'react';

export const CardSkeleton = () => {
  return (
    <div className="flex flex-col min-h-full space-y-yStandard animate-pulse">
      <div className="overflow-hidden bg-gmbLightGray h-[458px] w-full" />

      <div className="flex flex-wrap gap-6">
        {[1, 2, 3].map(() => (
          <div className="w-20 h-[var(--font-size-nav)] bg-gmbLightGray mb-[calc(var(--line-height-nav)_-_var(--font-size-nav))]" />
        ))}
      </div>

      <hgroup>
        <div className="text-xl bg-gmbLightGray w-3/4 h-[var(--font-size-xl)] mb-3" />
        <div className="text-xl bg-gmbLightGray w-1/2 h-[var(--font-size-xl)]" />
      </hgroup>

      <div className="text-md bg-gmbLightGray h-[calc(var(--line-height-md)_*_5)]" />

      {/* empty div to push button to the bottom of the card */}
      <div className="flex-grow hidden p-0 m-0 lg:block" />

      <div className="w-40 h-12 py-2 lg:h-14 bg-gmbLightGray" />
    </div>
  );
};

export default CardSkeleton;
