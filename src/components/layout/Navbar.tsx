import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(36, 36, 36, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 1rem 2rem;
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`

const NavLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(36, 36, 36, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #646cff;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ThemeToggle = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.87);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #646cff;
    background: rgba(100, 108, 255, 0.1);
  }
`

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.87);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ['Home', 'About', 'Services', 'Products', 'Insights', 'Contact']

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo src={logo} alt="DLP Global Skillers" />
        
        <NavLinks isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavLink>
          ))}
        </NavLinks>

        <RightSection>
          <ThemeToggle>🌙/☀️</ThemeToggle>
          <HamburgerButton onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </HamburgerButton>
        </RightSection>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar