import {
  Section,
  Body,
  Options,
  Accounts,
  CardProfile,
  Profile,
  AddAccount,
  LimitProfile,
  Form,
  Itens,
  Login,
  Password,
  ButtonLogin,
  Line
} from "./styled";

import { FiPlusCircle } from "react-icons/fi";

import Perfil from "./assets/perfil.jpeg";
import Add from "./assets/add.png";

function App() {
  return (
    <Section>
      <Body>
        <Options>
          <h2>facebook</h2>
          <a className="access">Acessos recentes</a>
          <a className="click">Clica na tua foto ou adiciona uma conta.</a>
          <Accounts>
            <CardProfile>
              <Profile src={Perfil} />
              <a>Pedro</a>
            </CardProfile>

            <CardProfile>
              <LimitProfile>
                <AddAccount src={Add} />
              </LimitProfile>
              <a className = 'add'>Adicionar Conta</a>
            </CardProfile>
          </Accounts>
        </Options>

        <Form>
          <Itens>
            <Login placeholder = 'E-mail ou número de telemóvel' type = 'e-mail' required/>
            <Password placeholder = 'Palavra-passe' type = 'password'/>
            <ButtonLogin>Iniciar sessão</ButtonLogin>
            <a href = '#'>Não sabes tua palavra-passe?</a>
            <Line/>
            <a className = 'create'>Criar nova conta</a>
          </Itens>
          <a>Criar Uma Página para uma celebridade, banda ou empresa.</a>
        </Form>
      </Body>
    </Section>
  );
}

export default App;