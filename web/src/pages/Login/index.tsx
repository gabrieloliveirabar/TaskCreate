import FadeInAnimation from "../../components/Animation/FadeInAnimation";
import { BackgroundGuaxinim } from "../../components/BackgroundGuaxinim";
import guaxinim from "../../assets/guaxinim.svg";
import { ButtonAction } from "../../components/Buttons/ButtonAction";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export const Login = () => {
  const { loginUserApi } = useContext(UserContext);
  const onSubmitFuunction = (data: object) => {
    loginUserApi(data);
  };
  return (
    <div>
      <FadeInAnimation>
        <BackgroundGuaxinim />
        <div className="relative">
          <div className="h-screen z-10 flex flex-col">
            <Header />
            <div className="w-screen h-screen flex flex-col justify-center items-center tablet:flex-row tablet:justify-around ">
              <Form onSubmit={onSubmitFuunction}>
                {({ register, errors }) => (
                  <>
                    <h1 className="w-full text-center font-bold">Login</h1>
                    <Input
                      label="Email"
                      name="email"
                      register={register}
                      errors={errors}
                      placeHolder="digite seu email"
                    />
                    <Input
                      label="Senha"
                      name="password"
                      register={register}
                      errors={errors}
                      placeHolder="digite sua senha"
                    />
                    <ButtonAction width="52" lgWidth="96">
                      Login
                    </ButtonAction>
                  </>
                )}
              </Form>
              <img
                src={guaxinim}
                alt="guaxinim"
                className="hidden tablet:flex"
              />
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};
