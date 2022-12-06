import { useState } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { useSessionInfo } from "../../appHooks";
import * as Comp from "../";
import * as S from "./styles";
import * as t from "./types";

export const ContactCard = ({ contact, setUser }: t.IContactCardProps) => {
  const { getUser, delContact } = useSessionInfo();
  const [editContactModal, setEditContactModal] = useState(false);
  const [contactId, setContactId] = useState("");

  const onDelClick = async () => {
    await delContact(contact.id);

    await getUser().then((res) => setUser(res));
  };

  return (
    <>
      {editContactModal && (
        <Comp.UpdateContactModal
          contactId={contactId}
          setEditContactModal={setEditContactModal}
          setUser={setUser}
        />
      )}
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
            <FiEdit
              onClick={() => {
                setContactId(contact.id);
                setEditContactModal(true);
              }}
            />
            <FiTrash2 onClick={() => onDelClick()} />
          </S.BoxButtons>
        </S.BoxInfo>
      </S.Container>
    </>
  );
};
