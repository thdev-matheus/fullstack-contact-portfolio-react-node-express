import { IUpdateUserModalProps } from "./types";
import * as S from "./styles";
import { UpdateUserForm } from "../UpdateUserForm";
import { useSessionInfo } from "../../appHooks";
import { FiXSquare } from "react-icons/fi";

export const UpdateUserModal = ({
  setEditUserModal,
  setUser,
}: IUpdateUserModalProps) => {
  const { getUser } = useSessionInfo();

  const handleFetchUser = async () => {
    await getUser().then((res) => setUser(res));
    setEditUserModal(false);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <FiXSquare onClick={() => setEditUserModal(false)} />
        <h2>Editar Contato</h2>

        <UpdateUserForm handleFetchUser={handleFetchUser} />
      </S.FormContainer>
    </S.Container>
  );
};
