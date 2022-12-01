import * as S from "./styles";
import { useFormatter, useSessionInfo } from "../../appHooks";
import { FiEdit } from "react-icons/fi";
import { ContactForm } from "../../components/ContactForm";
import { ContactCard } from "../../components/ContactCard";
import { useEffect, useState } from "react";
import { IUser } from "../../globalTypes";

export const Dashboard = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const { fullName, email1, email2, phone1, phone2, getUser } =
    useSessionInfo();
  const { convertPhoneNumber } = useFormatter();

  useEffect(() => {
    const fetchUser = async () => {
      await getUser().then((res) => setUser(res));
    };
    fetchUser();
  }, [getUser]);

  return (
    <S.Container>
      <section>
        <header>
          <img src="https://i.ibb.co/m8HjKqj/logo.png" alt="imagem" />
          <h1>Contact Portfolio</h1>
        </header>

        <S.BoxUser>
          <section>
            <section>
              <h2>{fullName}</h2>
              <FiEdit />
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
        <ContactForm setUser={setUser} />
      </section>

      <S.BoxContacts>
        <h2>Contatos</h2>
        <section>
          {user.contacts &&
            user.contacts.map((contact) => (
              <ContactCard
                setUser={setUser}
                contact={contact}
                key={contact.id}
              />
            ))}
        </section>
      </S.BoxContacts>
    </S.Container>
  );
};
