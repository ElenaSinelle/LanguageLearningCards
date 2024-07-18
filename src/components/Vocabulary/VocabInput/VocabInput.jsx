export default function VocabInput({
  value,
  onChange,
  placeholder,
  className,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
