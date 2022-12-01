import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiUser, FiLock } from "react-icons/fi";
import { ILoginData } from "../../globalTypes";
import { loginSchema } from "../../schemas";
import { Input, Button } from "../";
import * as S from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmitLogin = async (data: ILoginData) => {
    try {
      const response = await api.post("login/", data);

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("username", response.data.user.username);
      toast.success("Sucesso!", { icon: "🦆🟢", autoClose: 3000 });
      setTimeout(() => {
        toast.success(
          `Seja bem-vindo(a) ao File Request, ${response.data.user.username}!`,
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
      <Input
        label="email"
        icon={FiUser}
        error={errors.email?.message?.toString()}
        placeholder="Digite seu e-mail"
        {...register("email")}
        width="16rem"
      />
      <Input
        label="Senha"
        icon={FiLock}
        error={errors.password?.message?.toString()}
        placeholder="Digite sua senha"
        type="password"
        {...register("password")}
        width="16rem"
      />
      <Button
        type="submit"
        text="Entrar"
        height="2rem"
        width="16rem"
        bgColor="var(--white)"
        color="var(--black)"
        hBgColor="var(--gray)"
      />
    </S.Container>
  );
};
