export const CardSkeleton = () => {
  return (
    <div className="flex min-h-full animate-pulse flex-col space-y-yMd">
      <div className="h-[458px] w-full overflow-hidden bg-gmbLightGray" />

      <div className="flex flex-wrap gap-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="mb-[calc(var(--line-height-nav)_-_var(--font-size-nav))] h-[var(--font-size-nav)] w-20 bg-gmbLightGray"
          />
        ))}
      </div>

      <div>
        <div className="mb-3 h-[var(--font-size-xl)] w-3/4 bg-gmbLightGray text-xl" />
        <div className="h-[var(--font-size-xl)] w-1/2 bg-gmbLightGray text-xl" />
      </div>

      <div className="h-[calc(var(--line-height-md)_*_5)] bg-gmbLightGray text-md" />

      {/* empty div to push button to the bottom of the card */}
      <div className="m-0 hidden grow p-0 lg:block" />

      <div className="h-12 w-40 bg-gmbLightGray py-2 lg:h-14" />
    </div>
  )
}

export default CardSkeleton
