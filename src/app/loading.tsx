export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#F2F0EA] z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#1A2118]/10 border-t-[#BC5633] rounded-full animate-spin"></div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
