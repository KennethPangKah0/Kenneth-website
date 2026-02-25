import { Briefcase, GraduationCap, Home, Mail, Moon, Server, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
	const [activeSection, setActiveSection] = useState('about');
	const { theme, toggleTheme } = useTheme();

	const navigation = [
		{ name: 'About', id: 'about', icon: Home },
		{ name: 'Experience', id: 'experience', icon: Briefcase },
		{ name: 'Tech Stack', id: 'tech-stack', icon: Server },
		{ name: 'Education', id: 'education', icon: GraduationCap },
		{ name: 'Contact', id: 'contact', icon: Mail }
	];

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['about', 'experience', 'tech-stack', 'education', 'contact'];
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
			<div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-full shadow-2xl px-3 py-2.5 transition-colors duration-300">
				<div className="flex items-center gap-1">
					{navigation.map((item) => {
						const Icon = item.icon;
						const isActive = activeSection === item.id;

						return (
							<button key={item.id} onClick={() => scrollToSection(item.id)} className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group cursor-pointer border-0 outline-none focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800" style={{ border: 'none' }}>
								<Icon size={20} className={`transition-all duration-300 ${isActive ? 'text-gray-900 dark:text-white scale-110' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 group-hover:scale-110'}`} strokeWidth={2} />

								<div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
									<div className="bg-gray-900 dark:bg-gray-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
										{item.name}
										<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
									</div>
								</div>
							</button>
						);
					})}

					<div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-1 transition-colors duration-300"></div>

					{/* Dark Mode Toggle */}
					<button onClick={toggleTheme} className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group cursor-pointer border-0 outline-none focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800" aria-label="Toggle dark mode">
						{theme === 'light' ? <Moon size={20} className="text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 group-hover:scale-110 transition-all duration-300" strokeWidth={2} /> : <Sun size={20} className="text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" strokeWidth={2} />}

						<div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
							<div className="bg-gray-900 dark:bg-gray-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
								{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
							</div>
						</div>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
