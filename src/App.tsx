import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Portfolio from './components/Portfolio';
const theme = createTheme({
	palette: {
		primary: {
			main: '#FCD34D'
		},
		secondary: {
			main: '#000000'
		}
	}
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Portfolio />
		</ThemeProvider>
	);
}
export default App;
