import { Button, IconButton } from '@mui/material';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Hero() {
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
		<section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 pb-8">
			<div className="max-w-6xl mx-auto text-center relative z-10">
				{/* Status Badge */}
				<div className="mb-6 animate-fade-in">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
						<div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
						<span className="text-yellow-400 text-sm font-semibold">Available for opportunities</span>
					</div>
				</div>

				{/* Main Heading */}
				<div className="mb-6">
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 leading-none">
						<span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Pang Ka Ho</span>
					</h1>
					<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 leading-none">Kenneth</h2>
				</div>

				{/* Role & Location */}
				<div className="mb-6 space-y-2">
					<p className="text-xl md:text-2xl text-yellow-400 font-semibold tracking-wide">Web & Mobile Developer</p>
					<div className="flex items-center justify-center gap-2 text-gray-400">
						<MapPin size={18} />
						<span>Hong Kong</span>
					</div>
				</div>

				{/* Description */}
				<div className="max-w-3xl mx-auto mb-8">
					<p className="text-gray-400 text-base md:text-lg leading-relaxed">Crafting exceptional digital experiences with modern technologies. Specialized in React, React Native, and TypeScript with a passion for clean code and intuitive user interfaces.</p>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mb-10">
					<Button
						variant="contained"
						size="large"
						startIcon={<Mail size={20} />}
						className="px-6 py-3 text-base font-semibold rounded-xl"
						sx={{
							backgroundColor: '#FCD34D',
							color: '#000',
							textTransform: 'none',
							boxShadow: '0 0 30px rgba(252, 211, 77, 0.3)',
							'&:hover': {
								backgroundColor: '#FDE047',
								boxShadow: '0 0 40px rgba(252, 211, 77, 0.5)',
								transform: 'translateY(-2px)'
							},
							transition: 'all 0.3s ease'
						}}
						href="mailto:pangkaho8@gmail.com"
					>
						Get In Touch
					</Button>
					<Button
						variant="outlined"
						size="large"
						startIcon={<Download size={20} />}
						className="px-6 py-3 text-base font-semibold rounded-xl"
						sx={{
							borderColor: '#FCD34D',
							color: '#FCD34D',
							borderWidth: '2px',
							textTransform: 'none',
							'&:hover': {
								backgroundColor: 'rgba(252, 211, 77, 0.1)',
								borderColor: '#FDE047',
								borderWidth: '2px',
								transform: 'translateY(-2px)'
							},
							transition: 'all 0.3s ease'
						}}
					>
						Download CV
					</Button>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-4 mb-10">
					<a href="https://github.com/KennethPangKah0" target="_blank" rel="noopener noreferrer">
						<IconButton
							className="transition-all"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								color: '#9CA3AF',
								'&:hover': {
									backgroundColor: 'rgba(252, 211, 77, 0.1)',
									borderColor: '#FCD34D',
									color: '#FCD34D',
									transform: 'translateY(-4px)',
									boxShadow: '0 10px 20px rgba(252, 211, 77, 0.2)'
								},
								transition: 'all 0.3s ease'
							}}
						>
							<Github size={24} />
						</IconButton>
					</a>
					<a href="https://www.linkedin.com/in/kenneth-pang-271a23283/" target="_blank" rel="noopener noreferrer">
						<IconButton
							className="transition-all"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								color: '#9CA3AF',
								'&:hover': {
									backgroundColor: 'rgba(252, 211, 77, 0.1)',
									borderColor: '#FCD34D',
									color: '#FCD34D',
									transform: 'translateY(-4px)',
									boxShadow: '0 10px 20px rgba(252, 211, 77, 0.2)'
								},
								transition: 'all 0.3s ease'
							}}
						>
							<Linkedin size={24} />
						</IconButton>
					</a>
					<a href="mailto:pangkaho8@gmail.com">
						<IconButton
							className="transition-all"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								color: '#9CA3AF',
								'&:hover': {
									backgroundColor: 'rgba(252, 211, 77, 0.1)',
									borderColor: '#FCD34D',
									color: '#FCD34D',
									transform: 'translateY(-4px)',
									boxShadow: '0 10px 20px rgba(252, 211, 77, 0.2)'
								},
								transition: 'all 0.3s ease'
							}}
						>
							<Mail size={24} />
						</IconButton>
					</a>
					<a href="tel:+85266002827">
						<IconButton
							className="transition-all"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								color: '#9CA3AF',
								'&:hover': {
									backgroundColor: 'rgba(252, 211, 77, 0.1)',
									borderColor: '#FCD34D',
									color: '#FCD34D',
									transform: 'translateY(-4px)',
									boxShadow: '0 10px 20px rgba(252, 211, 77, 0.2)'
								},
								transition: 'all 0.3s ease'
							}}
						>
							<Phone size={24} />
						</IconButton>
					</a>
				</div>

				{/* Scroll Indicator */}
				<button onClick={() => scrollToSection('experience')} className="text-yellow-400 hover:text-yellow-300 transition-all bg-transparent border-none focus:outline-none cursor-pointer hover:scale-110">
					<div className="flex flex-col items-center gap-2 animate-bounce">
						<span className="text-sm text-gray-500">Scroll to explore</span>
						<ChevronDown size={32} />
					</div>
				</button>
			</div>
		</section>
	);
}

export default Hero;
