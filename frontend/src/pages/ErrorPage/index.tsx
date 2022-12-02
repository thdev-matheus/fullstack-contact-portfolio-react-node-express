import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src="https://i.ibb.co/DfMqY3h/404-error-with-people-holding-the-numbers-amico.png"
        alt="error_image"
      />
      <h2>Ops, por aqui é só mato ainda...</h2>
      <div>
        <span>
          Essa rota que vosmicê tentou acessar não existe na aplicação
        </span>
        <span>Mas não se preocupe</span>
        <span>
          Ou vosmicê pode ir no meu
          <a href="https://www.linkedin.com/in/th-matheus/"> Linkedin</a> e
          conectar-se comigo. que tal?
        </span>
        <span>ou vosmicê pode</span>
        <p onClick={() => navigate("/dashboard")}>voltar</p>
      </div>
    </Container>
  );
};
