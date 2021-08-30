import React from 'react';
import clsx from 'clsx';
import NumberFormat from 'react-number-format';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Buttons/Button';
import { StepInfo } from '../../StepInfo';

import styles from './EnterPhoneStep.module.scss';
import { MainContext } from '../../../pages';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const EnterPhoneStep = () => {
  const { onNextStep } = React.useContext(MainContext);
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);

  const nextDisabled = !values.formattedValue || values.formattedValue.includes('_');

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
        <div className={clsx('mb-30', styles.input)}>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
            value={values.value}
            onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
          />
        </div>
        <Button disabled={nextDisabled} onClick={onNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
        <p className={clsx(styles.policyText, 'mt-30')}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
          Thanks!
        </p>
      </WhiteBlock>
    </div>
  );
};
