import React from 'react'
import styled from 'styled-components'

const Header = ({walletAddress, connectWallet}) => {
    return (
        <Wrapper>
            <Title>Assets</Title>
            <ButtonsContainer>
                <WalletLink>
                    <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                    <WalletAddress>{walletAddress.slice(0,7)}...{walletAddress.slice(35)}</WalletAddress>
                </WalletLink>
                <Button style={{ backgroundColor: '#3773f5', color: '#000' }}> Buy / Sell </Button>
                <Button> Send / Receive </Button>
            </ButtonsContainer>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    width: calc(100% - 1rem);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #282b2f;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    flex: 1;
`;

const WalletLink = styled.div`
    font-size: 0.8rem;
    border: 1px solid #282b2f;
    padding: 0 1rem;
    border-radius: 50rem;
    font-size: 1.2rem;
    display: flex;
    margin-right: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const WalletLinkTitle = styled.div`
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: #27ad75;
    font-weight: 600;
`;

const WalletAddress = styled.div`
    font-size: 0.8rem;
`;

const ButtonsContainer = styled.div`
    display: flex;
`;

const Button = styled.div`
    border: 1px solid #282b2f;
    padding: 0.8rem;
    font-size: 1.3rem;
    border-radius: 0.4rem;
    margin-right: 1rem;
    font-weight: 500;

    &:hover {
        cursor: pointer;
        /* background-color: #2a5ed1; */
    }
`


