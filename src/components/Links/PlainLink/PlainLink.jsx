import styles from "./PlainLink.module.scss";

export default function PlainLink({
  href,
  contents = "",
  id = "",
  className = "",
}) {
  return (
    <a id={id} className={`${styles.link} ${className}`} href={href}>
      {contents}
    </a>
  );
}
