export default function VocabButton({ content, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}
