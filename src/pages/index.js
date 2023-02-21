import Head from 'next/head'
import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import 'regenerator-runtime/runtime';
import Dashboard from './dashboard'



export default function Home() {

  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      {address ? (<Dashboard address={address}/>) : (
        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>Connect Wallet</Button>
          <Details>
            You need a to be on Chrome/Firefox to be<br /> able to run this app
            {address}
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  )
}

// components

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #000;
  color:White;
  display:grid;
  place-items:center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  background-color: #3773f5;

  &:hover {
    cursor: pointer;
    background-color: #2a5ed1;
  }
`;

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f
`;


