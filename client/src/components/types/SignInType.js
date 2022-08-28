import styles from './InTypeStyle.module.css';
import { Card } from '../../components';

const SingInType = (props) => {
  const addStr = (str, index, strintToAdd) => {
    return (
      str.substring(0, index) + strintToAdd + str.substring(index, str.length)
    );
  };

  return (
    <div>
      <div className={styles.container}>
        {props.cardInfo.length > 0 && (
          <div className={styles.cardLayout}>
            {props.cardInfo.map((singleCard, i) => {
              return (
                <Card
                  key={i}
                  title={singleCard.title}
                  description={singleCard.description}
                  href={`/login/${singleCard.href}`}
                  btnTitle={addStr(singleCard.buttonTitle, 5, 'in ')}
                  className={styles.card}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingInType;
