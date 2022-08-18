import styles from "../styles/SingInType.module.css"
import { getCardData } from "../data/card-data"
import {Card} from "../Components"
import Head from "next/head";
import {  NavBar, Banner } from "../Components";

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
      
        <Head>
          <title>Property Finder</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
        
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