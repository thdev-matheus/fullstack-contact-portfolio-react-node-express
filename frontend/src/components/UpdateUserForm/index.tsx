import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useFormatter, useSessionInfo } from "../../appHooks";
import { FiUser, FiLock, FiMail, FiPhone } from "react-icons/fi";
import * as Comp from "../";
import * as S from "./styles";
import * as gt from "../../globalTypes";
import * as schema from "../../schemas";
import * as t from "./types";

export const UpdateUserForm = ({ handleFetchUser }: t.IUpdateUserProps) => {
  console.log("chegou");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<gt.IUpdateUserData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema.updateUserSchema),
  });

  const { token } = useSessionInfo();
  const { responseError } = useFormatter();

  const onSubmitUpdate = async (data: gt.IUpdateUserData) => {
    try {
      if (
        !data.phone1 &&
        !data.phone2 &&
        !data.email1 &&
        !data.email2 &&
        !data.fullName &&
        !data.password
      ) {
        throw new Error("Não há nada para atualizar.", { cause: 400 });
      }

      !data.phone1 && delete data.phone1;
      !data.phone2 && delete data.phone2;
      !data.email1 && delete data.email1;
      !data.email2 && delete data.email2;
      !data.fullName && delete data.fullName;
      !data.password && delete data.password;

      await api.patch("users/", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Usuário atualizado", { icon: "🦆🟢" });

      await handleFetchUser();
    } catch (error: any) {
      if (!error.code) {
        console.log(error);
        toast.error(error.message, {
          icon: "🦆🔴",
          autoClose: 3000,
        });
      } else if (error.response.data.code === 400) {
        toast.error(responseError(error.response.data.message), {
          icon: "🦆🔴",
          autoClose: 3000,
        });
      } else if (error.response.data.code === 401) {
        toast.error("Senha atual incorreta", {
          icon: "🦆🔴",
          autoClose: 3000,
        });
      } else {
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
      }
      reset();
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmitUpdate)}>
      <div>
        <fieldset>
          <Comp.Input
            label="Nome"
            icon={FiUser}
            error={errors.fullName?.message?.toString()}
            placeholder="Digite seu nome completo"
            {...register("fullName")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="E-mail 1"
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
            label="Telefone 1"
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
            label="Senha"
            icon={FiLock}
            error={errors.password?.message?.toString()}
            placeholder="Digite uma senha"
            type="password"
            {...register("password")}
            width="16rem"
          />
          <Comp.Input
            label="Senha Atual*"
            icon={FiLock}
            error={errors.oldPassword?.message?.toString()}
            placeholder="Digite sua senha atual"
            type="password"
            {...register("oldPassword")}
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
