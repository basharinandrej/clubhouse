import React from 'react';
import { WelcomeStep } from '../components/Steps/WelcomeStep';
import { EnterNameStep } from '../components/Steps/EnterNameStep';
import { TwitterStep } from '../components/Steps/TwitterStep';
import { ChooseAvatarStep } from '../components/Steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../components/Steps/EnterPhoneStep';
import { EnterCodeStep } from '../components/Steps/EnterCodeStep';

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

type MainContextProps = {
  onNextStep: () => void;
  step: number;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => setStep(prev => prev + 1);

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
