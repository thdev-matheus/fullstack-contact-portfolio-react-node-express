/* eslint-disable react-hooks/rules-of-hooks */
import { useSessionInfo } from "../../appHooks";
import { FiXSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as t from "./types";
import * as S from "./styles";
import * as Comp from "../";

export const DeleteUserModal = ({
  setDeleteUserModal,
}: t.IUpdateUserModalProps) => {
  const navigate = useNavigate();

  const { delUser } = useSessionInfo();

  const handleDeleteUser = async () => {
    await delUser();
    toast.success("Usuário deletado com sucesso", {
      icon: "🦆🟢",
      autoClose: 3000,
    });
    navigate("/");
  };

  return (
    <S.Container>
      <S.FormContainer>
        <FiXSquare onClick={() => setDeleteUserModal(false)} />
        <h2>Deseja deletar esta conta?</h2>
        <div>
          <Comp.Button
            onClick={() => handleDeleteUser()}
            type="button"
            text="Deletar"
            height="2.5rem"
            width="7rem"
            bgColor="var(--light-green)"
            color="var(--dark-purple)"
            hBgColor="var(--medium-purple)"
            hColor="var(--light-green)"
          />
          <Comp.Button
            onClick={() => setDeleteUserModal(false)}
            type="button"
            text="Cancelar"
            height="2.5rem"
            width="15rem"
            bgColor="var(--light-green)"
            color="var(--dark-purple)"
            hBgColor="var(--medium-purple)"
            hColor="var(--light-green)"
          />
        </div>
      </S.FormContainer>
    </S.Container>
  );
};
