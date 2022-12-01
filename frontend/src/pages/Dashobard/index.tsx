import * as S from "./styles";
import { useFormatter, useSessionInfo } from "../../appHooks";
import { FiEdit } from "react-icons/fi";
import { ContactForm } from "../../components/ContactForm";

export const Dashboard = () => {
  const { fullName, email1, email2, phone1, phone2, token, saveSession } =
    useSessionInfo();
  const { convertPhoneNumber } = useFormatter();

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
        <ContactForm />
      </section>

      <S.BoxContacts></S.BoxContacts>
    </S.Container>
  );
};
