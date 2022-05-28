import { createContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { EnterNameStep } from '../components/steps/EnterNameStep';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { GitHubStep } from '../components/steps/GitHubStep';
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';
import { EnterCodeStep } from '../components/steps/EnterCodeStep';

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

type MainContextStep = {
  onNextStep: () => void;
  step: number;
}

export const MainContext = createContext<MainContextStep>({} as MainContextStep);

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <MainContext.Provider value={{
      step,
      onNextStep,
    }}>
      <Step />
    </MainContext.Provider>
  );
}
