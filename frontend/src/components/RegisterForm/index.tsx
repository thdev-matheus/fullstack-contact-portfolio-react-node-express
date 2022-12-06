import { FiUser, FiLock, FiMail, FiPhone } from "react-icons/fi";
import * as Comp from "../";
import * as S from "./styles";
import * as gt from "../../globalTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as schema from "../../schemas";
import * as t from "./types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const RegisterForm = ({ setIsRegister }: t.IRegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<gt.IRegisterData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema.registerSchema),
  });

  const onSubmitRegister = async (data: gt.IRegisterData) => {
    try {
      delete data.confirmPassword;
      !data.phone2 && delete data.phone2;
      !data.email2 && delete data.email2;

      await api.post("users/", data);
      toast.success("Usuário cadastrado", { icon: "🦆🟢" });

      setIsRegister(false);
    } catch (error) {
      console.log(error);
      toast.error("Parece que houve algo de errado", {
        icon: "🦆🔴",
        autoClose: 3000,
      });
      setTimeout(() => {
        toast.error("Verifique os dados e tente novamente", {
          icon: "🦆🔴",
          autoClose: 3000,
        });
      }, 300);
      reset();
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmitRegister)}>
      <div>
        <fieldset>
          <Comp.Input
            label="Nome*"
            icon={FiUser}
            error={errors.fullName?.message?.toString()}
            placeholder="Digite seu nome completo"
            {...register("fullName")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="E-mail 1*"
            icon={FiMail}
            error={errors.email1?.message?.toString()}
            placeholder="Digite seu e-mail principal"
            {...register("email1")}
            width="16rem"
          />
          <Comp.Input
            label="E-mail 2"
            icon={FiMail}
            error={errors.email2?.message?.toString()}
            placeholder="Digite um email secundário"
            {...register("email2")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="Telefone 1*"
            icon={FiPhone}
            error={errors.phone1?.message?.toString()}
            placeholder="Digite seu telefone principal"
            {...register("phone1")}
            width="16rem"
          />
          <Comp.Input
            label="Telefone 2"
            icon={FiPhone}
            error={errors.phone2?.message?.toString()}
            placeholder="Digite um telefone secundário"
            {...register("phone2")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="Senha*"
            icon={FiLock}
            error={errors.password?.message?.toString()}
            placeholder="Digite uma senha"
            type="password"
            {...register("password")}
            width="16rem"
          />
          <Comp.Input
            label="Confirmação*"
            icon={FiLock}
            error={errors.confirmPassword?.message?.toString()}
            placeholder="Confirme a senha"
            type="password"
            {...register("confirmPassword")}
            width="16rem"
          />
        </fieldset>
      </div>
      <Comp.Button
        type="submit"
        text="Cadastrar"
        height="2.5rem"
        width="16rem"
        bgColor="var(--light-green)"
        color="var(--dark-purple)"
        hBgColor="var(--medium-purple)"
        hColor="var(--light-green)"
      />
    </S.Container>
  );
};
