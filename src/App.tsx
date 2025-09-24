import styled from 'styled-components'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Account for fixed navbar */
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <HomePage />
      </MainContent>
      <Footer />
    </AppContainer>
  )
}

export default App
