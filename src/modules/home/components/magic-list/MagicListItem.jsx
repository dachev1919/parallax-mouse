import styles from './MagicList.module.scss';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/constants";
import { useEffect, useRef } from "react";

const MagicListItem = ({image, title}) => {
  const cursorRef = useRef();
  const eventHandler = (e) => {
    if (cursorRef && cursorRef.current) {
      cursorRef.current.style.cssText = `--move-x: ${e.clientX}px;--move-y: ${e.clientY}px`;
    }
  }
  useEffect(() => {
    document.addEventListener('mousemove', eventHandler);

    return () => {
      document.removeEventListener('mousemove', eventHandler);
    };
  }, []);


  return (
    <Link to={ROUTES.HOME} className={styles.item}>
      <div className={styles.header}>
        {title}
      </div>
      <div ref={cursorRef} className={styles.cursor}>
        <div className={styles.image} style={{backgroundImage: `url(${image})`}}></div>
      </div>
    </Link>
  );
};

export default MagicListItem;
