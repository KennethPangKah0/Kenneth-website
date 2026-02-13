import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('about');
	const navigation = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = ['about', 'experience', 'skills', 'education', 'contact'];
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
		setMobileMenuOpen(false);
	};

	return (
		<nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-lg border-b border-yellow-400/20' : 'bg-transparent'}`}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex justify-between items-center py-5">
					{/* Logo */}
					<button onClick={() => scrollToSection('about')} className="text-2xl md:text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent border-0 outline-none focus:outline-none p-0" style={{ background: 'transparent' }}>
						<span className="text-yellow-400">Kenneth</span>
						<span className="text-white ml-2">Pang</span>
					</button>
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-2">
						{navigation.map((item) => (
							<button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 bg-transparent border-0 outline-none focus:outline-none cursor-pointer ${activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-300 hover:text-white'}`}>
								{/* Active background */}
								{activeSection === item.toLowerCase() && <span className="absolute inset-0 bg-yellow-400 rounded-lg shadow-lg shadow-yellow-400/50"></span>}

								{/* Hover background */}
								<span className={`absolute inset-0 rounded-lg transition-all duration-300 ${activeSection === item.toLowerCase() ? 'opacity-0' : 'bg-white/5 opacity-0 hover:opacity-100'}`}></span>

								{/* Text */}
								<span className="relative z-10">{item}</span>
							</button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden p-2 text-yellow-400 hover:text-yellow-300 hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-black/98 backdrop-blur-xl border-t border-yellow-400/20 animate-fade-in">
					<div className="px-6 py-4 space-y-2">
						{navigation.map((item) => (
							<button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`block w-full text-left px-5 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeSection === item.toLowerCase() ? 'bg-yellow-400 text-black shadow-lg' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
								{item}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navigation;
