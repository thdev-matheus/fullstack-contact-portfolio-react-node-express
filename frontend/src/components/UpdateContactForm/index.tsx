import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useFormatter, useSessionInfo } from "../../appHooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Comp from "..";
import * as S from "./styles";
import * as gt from "../../globalTypes";
import * as schema from "../../schemas";
import * as t from "./types";

export const UpdateContactForm = ({
  contactId,
  handleUpdateContacts,
}: t.IUpdateContactFormProps) => {
  const { token } = useSessionInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<gt.IUpdateContactData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema.updateContactSchema),
  });
  const { responseError } = useFormatter();

  const onSubmitEditContact = async (data: gt.IUpdateContactData) => {
    try {
      if (
        !data.phone1 &&
        !data.phone2 &&
        !data.email1 &&
        !data.email2 &&
        !data.name
      ) {
        throw new Error("Não há nada para atualizar.");
      }
      !data.name && delete data.name;
      !data.email1 && delete data.email1;
      !data.email2 && delete data.email2;
      !data.phone1 && delete data.phone1;
      !data.phone2 && delete data.phone2;

      await api.patch(`contacts/${contactId}/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato editado", { icon: "🦆🟢" });
      await handleUpdateContacts();
    } catch (error: any) {
      console.log(error);
      if (!error.code) {
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
      // reset();
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmitEditContact)}>
      <div>
        <fieldset>
          <Comp.Input
            label="Nome"
            icon={FiUser}
            error={errors.name?.message?.toString()}
            placeholder="Digite o nome do contato"
            {...register("name")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="E-mail 1"
            icon={FiMail}
            error={errors.email1?.message?.toString()}
            placeholder="Digite um e-mail do contato"
            {...register("email1")}
            width="16rem"
          />
          <Comp.Input
            label="E-mail 2"
            icon={FiMail}
            error={errors.email2?.message?.toString()}
            placeholder="Digite outro email"
            {...register("email2")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="Telefone 1"
            icon={FiPhone}
            error={errors.phone1?.message?.toString()}
            placeholder="Digite um telefone do contato"
            {...register("phone1")}
            width="16rem"
          />
          <Comp.Input
            label="Telefone 2"
            icon={FiPhone}
            error={errors.phone2?.message?.toString()}
            placeholder="Digite outro telefone do contato"
            {...register("phone2")}
            width="16rem"
          />
        </fieldset>
      </div>
      <Comp.Button
        type="submit"
        text="Atualizar"
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
