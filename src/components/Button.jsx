
export default function Button({
  children,
  type = "button",
  className = "",
  onClick,
}) {
  return (
    <button
      type={type}
      className={'button ${className}'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
