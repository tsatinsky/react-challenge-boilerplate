import styled from 'styled-components';

import logo from './logo.png'

const AppWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 300px;
  
  border: 1px #000 solid;
  border-radius: 6px;
  
  text-align: center;
  
  & > p {
    margin: 1rem 0 0 0;
  }
`;

function App() {
  return (
    <AppWrapper>
      <img src={logo} alt='Primer logo' width="128" height="128" />
      <p>Primer React Challenge Boilerplate</p>
    </AppWrapper>
  );
}

export default App;
