/* eslint-disable react-hooks/exhaustive-deps */
import { useFormatter, useSessionInfo } from "../../appHooks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./styles";
import * as Comp from "../../components";
import * as gt from "../../globalTypes";

export const Dashboard = () => {
  const [user, setUser] = useState<gt.IUser>({} as gt.IUser);
  const [editUserModal, setEditUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  const { fullName, email1, email2, phone1, phone2, getUser } =
    useSessionInfo();
  const { convertPhoneNumber } = useFormatter();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      await getUser().then((res) => setUser(res));
    };
    fetchUser();
  }, []);

  return (
    <>
      {editUserModal && (
        <Comp.UpdateUserModal
          setUser={setUser}
          setEditUserModal={setEditUserModal}
        />
      )}
      {deleteUserModal && (
        <Comp.DeleteUserModal setDeleteUserModal={setDeleteUserModal} />
      )}
      <S.Container>
        <section>
          <header>
            <div>
              <img src="https://i.ibb.co/m8HjKqj/logo.png" alt="imagem" />
              <h1>Contact Portfolio</h1>
            </div>
            <Comp.Button
              onClick={() => navigate("/")}
              type="button"
              text="Logout"
              height="2.5rem"
              width="7rem"
              bgColor="var(--light-green)"
              color="var(--dark-purple)"
              hBgColor="var(--dark-purple)"
              hColor="var(--light-green)"
            />
          </header>

          <S.BoxUser>
            <section>
              <section>
                <h2>{fullName}</h2>
                <section>
                  <FiEdit onClick={() => setEditUserModal(true)} />
                  <FiTrash2 onClick={() => setDeleteUserModal(true)} />
                </section>
              </section>
              <section>
                <div>
                  <p>E-mails: </p>
                  <span>{email1}</span>
                  {email2 && <span>{email2}</span>}
                </div>
                <div>
                  <p>Telefone: </p>
                  <span>{convertPhoneNumber(phone1!)}</span>
                  {phone2 && <span>{convertPhoneNumber(phone2)}</span>}
                </div>
              </section>
            </section>
          </S.BoxUser>
          <Comp.ContactForm setUser={setUser} />
        </section>

        <S.BoxContacts>
          <h2>Contatos</h2>
          <section>
            {user.contacts &&
              user.contacts.map((contact) => (
                <Comp.ContactCard
                  setUser={setUser}
                  contact={contact}
                  key={contact.id}
                />
              ))}
          </section>
        </S.BoxContacts>
      </S.Container>
    </>
  );
};
