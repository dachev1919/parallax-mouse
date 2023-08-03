import styles from './MagicList.module.scss';
import { ITEMS } from "../../../../common/mock/data";
import MagicListItem from "./MagicListItem";
import { useEffect } from "react";

const MyComponent = () => {
  const eventHandler = (e) => {
    document.body.style.cssText = `--move-x: ${e.clientX}px;--move-y: ${e.clientY}px`;
  }
  useEffect(() => {
    document.addEventListener('mousemove', eventHandler);

    return () => {
      document.removeEventListener('mousemove', eventHandler);
    };
  }, []);

  return (
    <section className={styles['magic-list']}>
      {
        ITEMS.map(({image, id, title}) => <MagicListItem key={id} title={title} image={image} />)
      }
    </section>
  );
};

export default MyComponent;
