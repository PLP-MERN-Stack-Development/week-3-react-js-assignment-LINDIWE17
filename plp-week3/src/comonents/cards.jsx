export default function Card({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}