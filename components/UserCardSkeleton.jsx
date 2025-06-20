export default function UserCardSkeleton() {
  return (
    <div className="p-4 h-[162px] border border-neutral-800 bg-neutral-900 rounded-2xl shadow flex gap-4 items-center">
      <div className="w-18 h-18 rounded-lg object-cover bg-neutral-800 animate-pulse"></div>
      <div>
        <div className="h-[18px] w-[160px] bg-neutral-800 mb-4 rounded-md animate-pulse"></div>
        <div className="h-[14px] w-[120px] bg-neutral-800 mb-3 rounded-md animate-pulse"></div>
        <div className="h-[14px] w-[300px] bg-neutral-800 mb-2 rounded-md animate-pulse"></div>
        <div className="h-[14px] w-[250px] bg-neutral-800 mb-2 rounded-md animate-pulse"></div>
        <div className="h-[14px] w-[200px] bg-neutral-800 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
