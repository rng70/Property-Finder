import cls from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = (props) => {
  return (
    // <div className={styles.container}>
    //     <Link href={props.href}>
    //         <a className={styles.cardLink}>
    //             <div className={cls('glass', styles.container)}>
    //                 <div>
    //                     <h2 className={styles.cardHeader}>
    //                         {props.title}
    //                     </h2>
    //                 </div>

    //                 <div className={styles.cardImageWrapper}>
    //                     <p className={styles.cardImage}>{props.description}</p>
    //                     <button>{props.btnTitle}</button>
    //                     {/* <Image
    //                         className={styles.cardImage}
    //                         src={props.imgUrl}
    //                         width={260}
    //                         height={160}
    //                         alt="{props.name} Image"
    //                         /> */}
    //                 </div>
    //             </div>
    //         </a>
    //     </Link>
    // </div>
    <div className={styles.container}>
      <Link to={props.href} className={styles.cardLink}>
        <div className={cls('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.title}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <p className={styles.cardImage}>{props.description}</p>
            <button className='button'>{props.btnTitle}</button>
            {/* <Image
                                className={styles.cardImage}
                                src={props.imgUrl}
                                width={260}
                                height={160}
                                alt="{props.name} Image"
                                /> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
