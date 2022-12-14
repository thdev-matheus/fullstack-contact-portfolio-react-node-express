import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useSessionInfo } from "../../appHooks";
import * as schema from "../../schemas";
import * as t from "./types";
import * as Comp from "../";
import * as S from "./styles";
import * as gt from "../../globalTypes";

export const ContactForm = ({ setUser }: t.IContactFormProps) => {
  const { token } = useSessionInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<gt.IContactData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema.contactSchema),
  });

  const { getUser } = useSessionInfo();

  const onSubmitContact = async (data: gt.IContactData) => {
    try {
      !data.phone2 && delete data.phone2;
      !data.email2 && delete data.email2;

      await api.post("contacts/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato salvo", { icon: "🦆🟢" });

      await getUser().then((res) => setUser(res));

      reset();
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
    <S.Container onSubmit={handleSubmit(onSubmitContact)}>
      <h3>Cadastrar contato</h3>
      <div>
        <fieldset>
          <Comp.Input
            label="Nome*"
            icon={FiUser}
            error={errors.name?.message?.toString()}
            placeholder="Digite o nome do contato"
            {...register("name")}
            width="16rem"
          />
        </fieldset>
        <fieldset>
          <Comp.Input
            label="E-mail 1*"
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
            label="Telefone 1*"
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
        text="Salvar"
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
