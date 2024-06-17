import styles from "./ButtonLink.module.scss";

export default function PlainLink({ href, contents = "", contentsAdd = "" }) {
  return (
    <div className={styles.btnLink}>
      <a href={href}>
        {contentsAdd && (
          <p className={styles.btnLink__firstLine}>{contentsAdd}</p>
        )}
        <p className={styles.btnLink__secondLine}>{contents}</p>
      </a>
    </div>
  );
}
