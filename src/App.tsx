import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import Portfolio from './components/Portfolio';
import { useTheme } from './context/ThemeContext';

function App() {
	const { theme: mode } = useTheme();

	// Create MUI theme based on current mode
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: mode, // 'light' or 'dark'
					primary: {
						main: '#FCD34D'
					},
					secondary: {
						main: mode === 'light' ? '#000000' : '#ffffff'
					},
					background: {
						default: mode === 'light' ? '#fafafa' : '#0a0a0a',
						paper: mode === 'light' ? '#ffffff' : '#1a1a1a'
					}
				}
			}),
		[mode]
	);

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Portfolio />
		</MuiThemeProvider>
	);
}

export default App;
