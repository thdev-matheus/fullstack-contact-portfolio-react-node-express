import { IUpdateContactModalProps } from "./types";
import * as S from "./styles";
import { useSessionInfo } from "../../appHooks";
import { FiXSquare } from "react-icons/fi";
import { UpdateContactForm } from "../UpdateContactForm";

export const UpdateContactModal = ({
  contactId,
  setEditContactModal,
  setUser,
}: IUpdateContactModalProps) => {
  const { getUser } = useSessionInfo();

  const handleUpdateContacts = async () => {
    await getUser().then((res) => setUser(res));
    setEditContactModal(false);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <FiXSquare onClick={() => setEditContactModal(false)} />
        <h2>Editar Contato</h2>

        <UpdateContactForm
          handleUpdateContacts={handleUpdateContacts}
          contactId={contactId}
        />
      </S.FormContainer>
    </S.Container>
  );
};
