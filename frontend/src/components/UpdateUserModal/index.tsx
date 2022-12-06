import { useSessionInfo } from "../../appHooks";
import { FiXSquare } from "react-icons/fi";
import * as t from "./types";
import * as S from "./styles";
import * as Comp from "../UpdateUserForm";

export const UpdateUserModal = ({
  setEditUserModal,
  setUser,
}: t.IUpdateUserModalProps) => {
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
        <Comp.UpdateUserForm handleFetchUser={handleFetchUser} />
      </S.FormContainer>
    </S.Container>
  );
};
