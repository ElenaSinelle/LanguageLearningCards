import styles from "./ImgLink.module.scss";

export default function ImgLink({
  className,
  href,
  src = "",
  alt = "",
  d = "",
}) {
  return (
    <a href={href} className={styles.imgLink}>
      {src && <img className={className} src={src} alt={alt} />}

      {d && (
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d={d} />
        </svg>
      )}
    </a>
  );
}
