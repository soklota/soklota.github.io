import '../css/NameAnimation.css';

export default function NameAnimation({ name = 'Your Name' }) {
  return (
    <svg className="cursive-name" viewBox="0 0 800 200">
      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle">
        {name}
      </text>
    </svg>
  );
}