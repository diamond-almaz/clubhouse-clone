import { useState } from 'react';
import { Button } from "../../Button";
import { WhiteBlock } from "../../WhiteBlock";
import styles from './EnterNameStep.module.scss';

export const EnterNameStep = () => {
  const [value, setValue] = useState('');

  const onChange = (ev) => {
    setValue(ev.currentTarget.value)
  }

  const onClick = () => {
    
  } 

  return (
      <div>
        <WhiteBlock className={styles.block}>
            <input type="text" value={value} onChange={onChange}/>

            <Button onClick={onClick}>Next</Button>
        </WhiteBlock>
      </div>

  )
}
 