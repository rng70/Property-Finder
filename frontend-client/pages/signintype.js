import styles from "../styles/SingInType.module.css"
import { getCardData } from "../data/card-data"
import {Card} from "../Components"

export async function getStaticProps(context) {

    const cardInfoData = getCardData();
    return {
        props: {
            cardInfo: cardInfoData,
        }
    }
}

const SingInType = (props) => {
    return (
          <>
            {props.cardInfo.length > 0 && <div className={styles.cardLayout}>
                {props.cardInfo.map((singleCard) =>
                    <Card
                        key={singleCard.title}
                        title={singleCard.title}
                        description={singleCard.description}
                        href={`auth/${singleCard.hrefId}`}
                        className={styles.card}
                    />
                )};
            </div>
            }
          </>
    )      
}

export default SingInType;