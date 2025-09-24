import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { Mesh } from 'three'

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
`

const Headline = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #646cff 0%, #61dafb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Subheadline = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #646cff 0%, #61dafb 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 108, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(100, 108, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

const SceneContainer = styled.div`
  flex: 1;
  height: 500px;
  min-height: 400px;

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
`

// 3D Rotating Box Component
const RotatingBox: React.FC = () => {
  const meshRef = useRef<Mesh>(null!)
  
  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.3
    meshRef.current.rotation.z += delta * 0.1
  })

  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <meshStandardMaterial 
        color="#646cff" 
        wireframe={false}
        transparent={true}
        opacity={0.8}
      />
    </Box>
  )
}

const HomePage: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const 
      }
    }
  }

  return (
    <HeroContainer>
      <ContentSection>
        <TextContent>
          <Headline
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Innovate, Transform, Succeed
          </Headline>
          
          <Subheadline
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Empowering businesses with cutting-edge technology solutions and expert guidance to drive growth and innovation in the digital age.
          </Subheadline>
          
          <CTAButton
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </TextContent>

        <SceneContainer>
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <RotatingBox />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </SceneContainer>
      </ContentSection>
    </HeroContainer>
  )
}

export default HomePage