export default function Button({ cta, icon, className }) {
  return (
    <button className={className}>
      <span className="mr-1">{icon}</span>
      {cta}
    </button>
  );
}
