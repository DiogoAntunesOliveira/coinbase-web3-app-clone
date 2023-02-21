import React from 'react'
import styled from 'styled-components'

function Promos() {
    return (
        <Wrapper>
            <OfferCard>
                <Title>Yield earned</Title>
                <Description>Earn up to 2.84% APY on your crypto</Description>
                <Placeholder />
                <Additional>
                    $0.00066
                    <span>2.84 APY</span>
                </Additional>
            </OfferCard>
            <OfferCard>
                <Title>Learn and Learn</Title>
                <Description>Earn crypto by Learning</Description>
                <Placeholder />
                <Additional style={{ color: '#3773f5'}}>
                    Verify account
                </Additional>
            </OfferCard>
            <OfferCard>
                <Title>Yield earned</Title>
                <Description>Get $10 of free Bitcoin</Description>
            </OfferCard>
        </Wrapper>
    )
}

export default Promos


const Description = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.1rem;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
`;

const Placeholder = styled.div`
    flex: 1;
`;

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
`;

const OfferCard = styled.div`
    display: flex;
    flex-direction: column; 
    width: 21rem;
    height: 11rem;
    margin-bottom: 1rem;
    border: 1px solid #282b2f;
    padding: 1.5rem;
`;
const Additional = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 700;

    & > span {
        color: #8a919e;
        font-size: 1rem;
    }
`;



