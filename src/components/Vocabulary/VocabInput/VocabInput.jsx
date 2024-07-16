export default function VocabInput({
  value,
  onChange,
  className,
  placeholder,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
}
