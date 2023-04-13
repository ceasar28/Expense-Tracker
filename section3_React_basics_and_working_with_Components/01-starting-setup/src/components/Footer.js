import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="comicZone">
        <div className="logo">
          <p className="logo">
            COMIC<span className="logoZone">ZONE</span>
          </p>
        </div>
        <div>
          <p>
            All of the content on comic zone is protected by copyright laws.
            Copyright laws may make any unlawful use, sharing, or duplicating
            illegal.
          </p>
        </div>
      </div>
      <div className="middle">
        <p>Privacy</p>
        <p>Terms of use</p>
        <p>Help/FAQs</p>
      </div>
      <div className=" left">
        <p>Follow ComicZone</p>
        <div className="icons"></div>
      </div>
    </div>
  );
}

export default Footer;
