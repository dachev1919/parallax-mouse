import styles from './MagicList.module.scss';
import { ITEMS } from "../../../../common/mock/data";
import MagicListItem from "./MagicListItem";

const MyComponent = () => {
  return (
    <section className={styles['magic-list']}>

      {
        ITEMS.map(({image, id, title}) => <MagicListItem key={id} title={title} image={image} />)
      }
    </section>
  );
};

export default MyComponent;
