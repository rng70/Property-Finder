import Link from 'next/link';
import Image from 'next/image';
import cls from 'classnames';

import styles from '../styles/Card.module.css'

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
        <Link href={props.href}>
            <a className={styles.cardLink}>
                <div className={cls('glass', styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{props.title}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                             <p className={styles.cardImage}>{props.description}</p>
                             <button>{props.btnTitle}</button>
                             {/* <Image
                                className={styles.cardImage}
                                src={props.imgUrl}
                                width={260}
                                height={160}
                                alt="{props.name} Image"
                                /> */}
                        </div>
                </div>
            </a>
        </Link>
    )
}

export default Card;