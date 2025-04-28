'use client'

import { useForm } from "react-hook-form";
import { LoginData } from "./login.type";
import { useEffect, useState } from "react";

const initialValues: LoginData = {
  emailId: '',
  password: '',
  rememberMe: false
}

const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<LoginData>({defaultValues: initialValues});
  const { setValue, getValues, watch, register, formState: {errors}, trigger } = methods;
  const { emailId, password, rememberMe } = watch();

  useEffect(() => {
    console.log('emailId changed: ', emailId)
  }, [emailId, password, rememberMe]);

  const handleLoginFieldUpdate = (key: keyof LoginData, value: any) => {
    setValue(key, value);
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }

  const onSignInClick = async() => {
    // const isValidated = await trigger('emailId');
    const isValidated = await trigger(['emailId', 'password']);
    const {emailId, password, rememberMe} = getValues();
    console.log(emailId, password);
    const requestData = {
      emailId: emailId,
      password: password,
      rememberMe: rememberMe
    }
  }

  return {
    showPassword,
    setValue,
    getValues,
    watch,
    register,
    errors,
    trigger,
    handleLoginFieldUpdate,
    handleTogglePasswordVisibility,
    onSignInClick
  }
}

export default useLogin;