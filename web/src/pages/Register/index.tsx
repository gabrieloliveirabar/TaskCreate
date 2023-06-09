import { BackgroundGuaxinim } from "../../components/BackgroundGuaxinim";
import guaxinim from "../../assets/guaxinim.svg";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import FadeInAnimation from "../../components/Animation/FadeInAnimation";
import { ButtonAction } from "../../components/Buttons/ButtonAction";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { registerUserApi, status } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitFunction = (data: object) => {
    registerUserApi(data);
  };

  if (status === 201) {
    navigate("/login");
  }

  return (
    <div>
      <FadeInAnimation>
        <BackgroundGuaxinim />
        <div className="relative">
          <div className="h-screen z-10 flex flex-col  ">
            <Header />
            <div className="w-screen h-screen flex flex-col justify-center items-center tablet:flex-row tablet:justify-around ">
              <Form onSubmit={onSubmitFunction}>
                {({ register, errors }) => (
                  <>
                    <h1 className="w-full text-center font-bold">Cadastro</h1>
                    <Input
                      label="Nome"
                      name="name"
                      register={register}
                      errors={errors}
                      placeHolder="digite seu nome"
                    />
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
                    <Input
                      label="CPF"
                      name="cpf"
                      register={register}
                      errors={errors}
                      placeHolder="000-000-000-00"
                    />
                    <Input
                      label="Data de nascimento"
                      name="datebirth"
                      register={register}
                      errors={errors}
                      placeHolder="digite seu aniversário"
                    />
                    <ButtonAction width="52" lgWidth="96">
                      Cadastrar
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
