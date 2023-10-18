import logo from './logo.svg';
import HorizontalLinearStepper from './components/table';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
  <div>
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc'}} style={{padding:"30px 30px 30px 30px "}}>
        <HorizontalLinearStepper/>
     </Box>
      </Container>
  </div>
  );
}

export default App;
