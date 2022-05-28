import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import styles from './WelcomeStep.module.scss';

export const WelcomeStep = () => {
  return (
    <WhiteBlock className={styles.block}>
        <h3 className={styles.title}>Welcome to Clubhouse!</h3>
        
        <p>
          We’re working hard to get Clubhouse ready
          for everyone!While we wrap up the finishing youches,
          we’re adding people gradually to make sure nothing
          breaks :)
        </p>

        <Button>
          Get your username
        </Button>
    </WhiteBlock>
  )
}
