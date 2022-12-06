import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiMail, FiLock } from "react-icons/fi";
import * as gt from "../../globalTypes";
import * as schema from "../../schemas";
import * as Comp from "../";
import * as S from "./styles";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<gt.ILoginData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema.loginSchema),
  });

  const onSubmitLogin = async (data: gt.ILoginData) => {
    try {
      const response = await api.post("login/", data);

      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      sessionStorage.setItem("id", JSON.stringify(response.data.user.id));
      sessionStorage.setItem(
        "fullName",
        JSON.stringify(response.data.user.fullName)
      );
      sessionStorage.setItem(
        "email1",
        JSON.stringify(response.data.user.email1)
      );
      sessionStorage.setItem(
        "email2",
        JSON.stringify(response.data.user.email2)
      );
      sessionStorage.setItem(
        "phone1",
        JSON.stringify(response.data.user.phone1)
      );
      sessionStorage.setItem(
        "phone2",
        JSON.stringify(response.data.user.phone2)
      );

      toast.success("Sucesso!", { icon: "🦆🟢", autoClose: 3000 });
      setTimeout(() => {
        toast.success(
          `Seja bem-vindo(a) ao Contact Portfolio, ${
            response.data.user.fullName.split(" ")[0]
          }!`,
          {
            icon: "🦆🟢",
            autoClose: 3000,
          }
        );
      }, 500);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Parece que houve um problema...", { icon: "🦆🔴" });
      setTimeout(() => {
        toast.error("Tente novamente!", { icon: "🦆🔴" });
      }, 500);
      reset();
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmitLogin)}>
      <Comp.Input
        label="email"
        icon={FiMail}
        error={errors.email?.message?.toString()}
        placeholder="Digite seu e-mail"
        {...register("email")}
        width="16rem"
      />
      <Comp.Input
        label="Senha"
        icon={FiLock}
        error={errors.password?.message?.toString()}
        placeholder="Digite sua senha"
        type="password"
        {...register("password")}
        width="16rem"
      />
      <Comp.Button
        type="submit"
        text="Entrar"
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
