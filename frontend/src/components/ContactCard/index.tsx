import { FiTrash2, FiEdit } from "react-icons/fi";
import { useSessionInfo } from "../../appHooks";
import * as S from "./styles";
import { IContactCardProps } from "./types";

export const ContactCard = ({ contact, setUser }: IContactCardProps) => {
  const { getUser, delContact } = useSessionInfo();

  const onDelClick = async () => {
    await delContact(contact.id);

    await getUser().then((res) => setUser(res));
  };

  return (
    <S.Container>
      <S.BoxName>
        <h4>{contact.name}</h4>
      </S.BoxName>
      <S.BoxInfo>
        <S.BoxPhone>
          <span>Phone 1: {contact.phone1}</span>
          {contact.phone2 && <span>Phone 2: {contact.phone2}</span>}
        </S.BoxPhone>
        <S.BoxEmail>
          <span>E-mail 1: {contact.email1}</span>
          {contact.email2 && <span>E-mail 2: {contact.email2}</span>}
        </S.BoxEmail>
        <S.BoxButtons>
          <FiEdit />
          <FiTrash2 onClick={() => onDelClick()} />
        </S.BoxButtons>
      </S.BoxInfo>
    </S.Container>
  );
};
