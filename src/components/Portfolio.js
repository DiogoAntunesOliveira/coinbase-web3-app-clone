import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../../static/coins'
import Coin from '../components/Coin'
import BalanceChart from '../components/BalanceChart'

const Portfolio = ({ thirdWebTokens, sanityTokens, walletAddress }) => {

    console.log('sanityTokens', sanityTokens)

    const tokenUsd = {}

    sanityTokens.forEach(token => {
        tokenUsd[token.contractAddress] = Number(token.usdPrice)
    })
    
    console.table('tokenUsd', tokenUsd)

    const calculateTotalBalance = async () => {
        let total = 0
        for (const token of thirdWebTokens) {
            const balance = await token.balanceOf(walletAddress)
            total += Number(balance.displayValue) * tokenUsd[token.address]
        }
        console.log('total', total)
        return total
    }

    //calculateTotalBalance()

    return (
        <Wrapper>
            <Content>
                <Chart>
                    <div style={{ flex: 1 }}>
                        <Balance>
                            <BalanceTitle>Portfolio Balance</BalanceTitle>
                            <BalanceValue>{'$'} 17,314,23
                                {/* {WalletBalance.toLocaleString()} */}
                            </BalanceValue>
                        </Balance>
                    </div>
                    <BalanceChart />
                </Chart>
                <PortfolioTable>
                    <TableItem>
                        <Title>Your Assets</Title>
                    </TableItem>
                    <Divider />
                    <Table>
                        <TableItem>
                            <TableRow>
                                <div style={{ flex: 3 }}>Name</div>
                                <div style={{ flex: 2 }}>Balance</div>
                                <div style={{ flex: 1 }}>Price</div>
                                <div style={{ flex: 1 }}>Allocation</div>
                                <div style={{ flex: 0 }}><BsThreeDotsVertical /></div>
                            </TableRow>
                        </TableItem>
                        <Divider />
                        <div>
                            {coins.map(coin => (
                                <div>
                                    <Coin coin={coin} />
                                    <Divider />
                                </div>
                            ))}
                        </div>
                    </Table>
                </PortfolioTable>
            </Content>
        </Wrapper>
    )
}

export default Portfolio

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;

const Content = styled.div`
    padding: 2rem 1rem;
    width: 100%;
    max-width: 1000px;
`;

const PortfolioTable = styled.div`
    margin-top: 1 rem;
    border: 1px solid #282b2f; 
`;

const Table = styled.table`
    width: 100%;
`;

const TableRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > th {
        text-align: left;
    }
`;

const TableItem = styled.div`
    padding: 1rem 2rem;
`;

const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
`;


const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
`;

const BalanceTitle = styled.div`
    color: #8a919e;
    font-size: 0.9rem;
`;

const Balance = styled.div``

const BalanceValue = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0.5rem 0;
`;











