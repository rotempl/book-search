import React, { FC } from "react";
import Input from "../common/Input";
import { ErrorMessage, HomePageContainer, StyledForm } from "./homePageStyle";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import GenericButton from "../common/GenericButton";
import { useHistory } from "react-router-dom";
import { routes } from "../../utils/routes";
import { userNameKey } from "../../utils/variables";

interface IFormInput {
  userName: string;
}

const HomePage: FC = () => {
  const history = useHistory();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem(userNameKey, JSON.stringify(data.userName));
    history.push(routes.search.route);
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
