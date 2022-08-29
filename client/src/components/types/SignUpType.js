import styles from "./InTypeStyle.module.css";
import { Card, Footer } from "../../components";

const SingUpType = (props) => {

    const addStr = (str,index,strintToAdd)=>{
        return str.substring(0,index)+strintToAdd+str.substring(index,str.length);
    }
    return (
        
        <div>
            <div className={styles.container}>
                {props.cardInfo.length > 0 && <div className={styles.cardLayout}>
                    {props.cardInfo.map((singleCard) =>
                        <Card
                            key={singleCard.title}
                            title={singleCard.title}
                            description={singleCard.description}
                            href={`/register/${singleCard.href}`} 
                            btnTitle={addStr(singleCard.buttonTitle, 5, 'up ')}
                            className={styles.card}
                        />
                    )};
                </div>
                }
            </div>
            <Footer/>
        </div>
    )      
}

export default SingUpType;