import React, { useState } from "react";
import Container from "../../components/common/Container";
import UserInforRegister from "./UserInforRegister";
import Progress from "../progress/Progress";
import Confirm from "../confirm/Confirm";

const RegisterClass = () => {
    const [step, setStep] = useState(1);

    return (
        <Container>
            <div className="py-12 w-full">
                <Progress currentStep={step} />
                {step === 1 && <UserInforRegister setStep={setStep} />}
                {step === 2 && <Confirm />}
            </div>
        </Container>
    );
};

export default RegisterClass;
