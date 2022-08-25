import styles from "./InTypeStyle.module.css"
import {  Navbar, Banner, Card } from "../../components";

const SingInType = (props) => {
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
                            href={`/login/${singleCard.hrefIdSignIn}`}
                            btnTitle={addStr(singleCard.buttonTitle, 5, 'in ')}
                            className={styles.card}
                        />
                    )}
                </div>
                }
            </div>
        </div>
    )      
}

export default SingInType;