import styles from "./InTypeStyle.module.css"
import { getCardData } from "../../data/card-data"
import {  Navbar, Banner, Card } from "../../components";

export async function getStaticProps(context) {

    const cardInfoData = getCardData();
    return {
        props: {
            cardInfo: cardInfoData,
        }
    }
}

const SingInType = (props) => {
    //console.log(props.cardInfo);
    const addStr = (str,index,strintToAdd)=>{
        return str.substring(0,index)+strintToAdd+str.substring(index,str.length);
    }
    
    return (
        
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Navbar />
            <Banner />
            <div>
                
                <div className={styles.container}>
                    {props.cardInfo.length > 0 && <div className={styles.cardLayout}>
                        {props.cardInfo.map((singleCard) =>
                            <Card
                                key={singleCard.title}
                                title={singleCard.title}
                                description={singleCard.description}
                                href={`auth/${singleCard.hrefIdSignIn}`}
                                btnTitle={addStr(singleCard.buttonTitle, 5, 'in ')}
                                className={styles.card}
                            />
                        )}
                    </div>
                    }
                </div>
            </div>
        </div>
    )      
}

export default SingInType;