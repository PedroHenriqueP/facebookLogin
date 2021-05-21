import { Section, Body, Options, Accounts, CardProfile, Profile, Form } from './styled';

import { FiPlusCircle } from 'react-icons/fi';

import Perfil from './assets/perfil.jpeg';

function App() {
  return (
    <Section>
      <Body>
        <Options>
          <h2>facebook</h2>
          <a className = 'access'>Acessos recentes</a>
          <a className = 'click'>Clica na tua foto ou adiciona uma conta.</a>
          <Accounts>
            <CardProfile>
              <Profile src={Perfil}/>
              <a>Pedro</a>
            </CardProfile>

            <CardProfile>
              <FiPlusCircle/>
              <a>Adicionar Conta</a>
            </CardProfile>
          </Accounts>
        </Options>
        <Form>

        </Form>
      </Body>
    </Section>
  );
}

export default App;
