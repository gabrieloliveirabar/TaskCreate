import { ButtonAction } from "../Buttons/ButtonAction";
import { Form } from "../Form";
import { Input } from "../Inputs/Input";


interface IAddressRegister<T> {
    onSubmitFunction: (data: T) => void;
}

export const AddressRegister = ({onSubmitFunction}:IAddressRegister<T>) => {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-full p-5 gap-4">
        <p className=" font-sans font-semibold text-xl px-2 text-left tablet:text-4xl">
          Após o cadastro do endereço, você poderá ver suas informações!
        </p>
        <Form onSubmit={onSubmitFunction}>
          {({ register, errors }) => (
            <>
              <div className="w-full flex flex-col justify-start items-start gap-1  ">
                <Input
                  label="Cidade"
                  name="city"
                  register={register}
                  errors={errors}
                  placeHolder="digite sua cidade"
                />
                <Input
                  label="Estado"
                  name="state"
                  register={register}
                  errors={errors}
                  placeHolder="digite seu estado"
                />

                <Input
                  label="Rua"
                  name="street"
                  register={register}
                  errors={errors}
                  placeHolder="digite sua rua"
                />
                <Input
                  label="Número"
                  name="number"
                  register={register}
                  errors={errors}
                  placeHolder="digite o numero da casa/apartamento"
                />
                <Input
                  label="CEP"
                  name="postalCode"
                  register={register}
                  errors={errors}
                  placeHolder="digite seu cep"
                />
                <ButtonAction
                  width="52"
                  lgWidth="96"
                  height=""
                  lgHeight=""
                  functionAction={() => {
                    "ola";
                  }}
                >
                  cadastrar
                </ButtonAction>
              </div>
            </>
          )}
        </Form>
      </div>
    </>
  );
};
