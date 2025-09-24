import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const FooterContainer = styled.footer`
  background: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Logo = styled.img`
  height: 32px;
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.9rem;
`

const CenterSection = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    order: -1;
  }
`

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #646cff;
  }
`

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const BackToTopButton = styled.button`
  background: rgba(100, 108, 255, 0.1);
  border: 1px solid #646cff;
  border-radius: 8px;
  color: #646cff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #646cff;
    color: white;
  }
`

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <Logo src={logo} alt="DLP Global Skillers" />
          <Copyright>© 2025 DLP Global Skillers. All rights reserved.</Copyright>
        </LeftSection>

        <CenterSection>
          <SocialLink href="#" title="LinkedIn">💼</SocialLink>
          <SocialLink href="#" title="Twitter">🐦</SocialLink>
          <SocialLink href="#" title="Facebook">📘</SocialLink>
          <SocialLink href="#" title="Instagram">📷</SocialLink>
        </CenterSection>

        <RightSection>
          <BackToTopButton onClick={scrollToTop}>
            ↑ Back to Top
          </BackToTopButton>
        </RightSection>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer