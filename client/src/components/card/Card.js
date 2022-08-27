import cls from 'classnames';
import styles from './Card.module.css';
import { Button } from '../';

const Card = (props) => {

  return (
    <div className={styles.container}>
        <div className={cls('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.title}</h2>
        </div>
        <div className={styles.description}>
            <p className={styles.descriptionDetails}>{props.description}</p>
          </div>
        <div className={styles.cardImageWrapper}>
          <Button buttonTitle={props.btnTitle} href={props.href} />
            {/* <Image />//TODO image checking on card
                                className={styles.cardImage}
                                src={props.imgUrl}
                                width={260}
                                height={160}
                                alt="{props.name} Image"
                                /> */}
          </div>
        </div>
    </div>
  );
};

export default Card;
