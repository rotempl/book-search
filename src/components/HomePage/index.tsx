import React, { FC } from "react";
import Input from "../common/Input";
import { ErrorMessage, HomePageContainer, StyledForm } from "./homePageStyle";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import GenericButton from "../common/GenericButton";

interface IFormInput {
  userName: string;
}

const HomePage: FC = () => {
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <HomePageContainer>
      <h1>welcome to your book search app!</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name='userName'
            control={control}
            rules={{ required: true }}
            defaultValue=''
            render={({ field }) => <Input {...field} placeholder='User name' />}
          />
          {errors.userName && <ErrorMessage>This field is required</ErrorMessage>}
        </div>
        <GenericButton type='submit' text='Login' />
      </StyledForm>
    </HomePageContainer>
  );
};

export default HomePage;
