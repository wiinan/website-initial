import React from 'react'
import {Section, Content, Left, Title, Desc, Button} from './styles/HeroStyle';
import {MdKeyboardArrowRight} from 'react-icons/md';

export default function Hero() {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 2 FREE Stocks <br /> Value up to $1850!
                    </Title>
                        <Desc>
                            Open and fund a brokerage account with $100
                             or more and you will
                            have a chance of claiming stock like <span>
                                GOOG, FB, SBUX</span>{" "}
                            and more!
                        </Desc>
                        <Button href='https://google.com'>
                            <span>Claim your free stock now</span>
                            <MdKeyboardArrowRight />
                        </Button>
                </Left>
            </Content>
        </Section>
    )
}
