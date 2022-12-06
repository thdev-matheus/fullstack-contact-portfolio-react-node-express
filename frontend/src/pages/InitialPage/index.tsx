import * as S from "./styles";
import * as Comp from "../../components";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { toast } from "react-toastify";

export const InitialPage = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const [isRegister, setIsRegister] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(
      () =>
        toast("Faça login para continuar.", { icon: "🦆⚫", autoClose: 3000 }),
      1000
    );
  }, []);
  return (
    <S.Container>
      <S.WhiteBox>
        <img src="https://i.ibb.co/D5kCh4L/Cell-phone-amico.png" alt="hello" />
      </S.WhiteBox>
      <S.BlackBox>
        <AnimatePresence custom="wait">
          <MotionConfig transition={{ duration: 0.8 }}>
            {isRegister ? (
              <motion.div
                key="register"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <h1>Cadastro</h1>
                <Comp.RegisterForm setIsRegister={setIsRegister} />
                <p>
                  Já tem cadastro? Faça
                  <span onClick={() => setIsRegister(false)}> login</span>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <h1>Login</h1>
                <Comp.LoginForm />
                <p>
                  Não tem login? Faça seu
                  <span onClick={() => setIsRegister(true)}> cadastro</span>
                </p>
              </motion.div>
            )}
          </MotionConfig>
        </AnimatePresence>
      </S.BlackBox>
    </S.Container>
  );
};
