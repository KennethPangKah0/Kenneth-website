import { Briefcase, GraduationCap, Home, Mail, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
	const [activeSection, setActiveSection] = useState('about');

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
			{/* Horizontal Bottom Navigation */}
			<div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl px-3 py-2.5">
				<div className="flex items-center gap-1">
					{navigation.map((item) => {
						const Icon = item.icon;
						const isActive = activeSection === item.id;

						return (
							<button key={item.id} onClick={() => scrollToSection(item.id)} className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group cursor-pointer border-0 outline-none focus:outline-none" style={{ border: 'none' }}>
								{/* Icon */}
								<Icon size={20} className={`transition-all duration-300 ${isActive ? 'text-gray-900 scale-110' : 'text-gray-400 group-hover:text-gray-700 group-hover:scale-110'}`} strokeWidth={2} />

								{/* Hover Label Tooltip - Appears on Top */}
								<div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
									<div className="bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
										{item.name}
										{/* Arrow pointing down */}
										<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
									</div>
								</div>
							</button>
						);
					})}
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
