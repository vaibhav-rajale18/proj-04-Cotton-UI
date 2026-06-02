function RequestNode({ data }) {
  return (
    <div className="min-w-[180px] rounded-lg border border-blue-500 bg-zinc-900 p-4 shadow-lg">
      <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
        Request
      </div>

      <div className="mt-2 text-sm font-medium text-white">
        {data.label}
      </div>
    </div>
  );
}

export default RequestNode;