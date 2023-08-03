import styles from './MagicList.module.scss';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/constants";
import { useEffect } from "react";

const MagicListItem = ({image, title}) => {
  return (
    <Link to={ROUTES.HOME} className={styles.item}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.cursor}>
        <div className={styles.image} style={{backgroundImage: `url(${image})`}}></div>
      </div>
    </Link>
  );
};

export default MagicListItem;
