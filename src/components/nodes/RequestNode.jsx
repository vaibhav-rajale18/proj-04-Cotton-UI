function RequestNode({ data }) {
  return (
    <div className="min-w-[220px] rounded-xl border border-blue-500 bg-zinc-900 p-4 shadow-xl">
      <div className="text-xs font-bold uppercase tracking-widest text-blue-400">
        Request
      </div>

      <div className="mt-3 border-t border-zinc-800 pt-3 text-sm font-semibold text-white">
        {data.label}
      </div>
    </div>
  );
}

export default RequestNode;