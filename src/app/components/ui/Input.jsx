export function Input({ className, ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}
