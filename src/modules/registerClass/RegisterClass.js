import React, { useEffect, useState } from "react";
import Container from "../../components/common/Container";
import UserInforRegister from "./UserInforRegister";
import Progress from "../progress/Progress";
import Confirm from "../confirm/Confirm";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassList } from "../ClassList/api";

const RegisterClass = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const { classList } = useSelector((state) => state.classList);
  useEffect(() => {
    dispatch(fetchClassList());
  }, [dispatch]);

  return (
    <Container>
      <div className="py-12 w-full">
        <Progress currentStep={step} />
        {step === 1 && <UserInforRegister setStep={setStep} classList={classList} />}
        {step === 2 && <Confirm />}
      </div>
    </Container>
  );
};

export default RegisterClass;
