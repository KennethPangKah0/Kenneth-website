import { Button, IconButton } from '@mui/material';
import { Code, Github, Linkedin, Mail, Phone } from 'lucide-react';

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
		<section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20 pb-24 overflow-hidden">
			{/* Inner White Content Card */}
			<div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in">
				<div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
					{/* Subtle gradient overlay on white card */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>

					{/* Grid Pattern on White Card */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px]"></div>

					{/* Content */}
					<div className="relative z-10 text-center">
						{/* Status Badge with Glow */}
						<div className="mb-5 animate-fade-in">
							<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
								<div className="relative flex items-center justify-center">
									<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
									<div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
								</div>
								<span className="text-gray-700 text-xs font-semibold">Available for Opportunities</span>
							</div>
						</div>

						{/* Profile Picture with Gradient Ring */}
						<div className="mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
							<div className="relative inline-block">
								{/* Animated Gradient Ring */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-md opacity-60 animate-spin-slow"></div>

								{/* <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 overflow-hidden">
									<img src="/kenneth.png" alt="Kenneth Pang" className="w-full h-full object-cover" />
								</div> */}
							</div>
						</div>

						{/* Main Heading with Gradient */}
						<div className="mb-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
							<h1 className="text-3xl md:text-5xl font-bold mb-3">
								<span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Hi, I'm Kenneth</span>
							</h1>
							<div className="flex justify-center">
								<div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
							</div>
						</div>

						{/* Details */}
						<div className="mb-5 space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
							<p className="text-lg md:text-xl text-gray-800 font-bold">Pang Ka Ho</p>
							<Code size={16} className="text-gray-600" />
							<p className="text-base md:text-lg text-gray-700 font-medium">Web & Mobile Developer</p>
						</div>

						{/* Description Card with Subtle Glow */}
						<div className="max-w-xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="relative bg-gray-50/70 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
									<p className="text-gray-700 text-sm md:text-base leading-relaxed">Crafting exceptional digital experiences with modern technologies. Specialized in React, React Native, and TypeScript with a passion for clean code and intuitive user interfaces.</p>
								</div>
							</div>
						</div>

						{/* CTA Buttons with Enhanced Style */}
						<div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
							<Button
								variant="contained"
								size="medium"
								startIcon={<Mail size={18} />}
								sx={{
									background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
									color: '#FFFFFF',
									textTransform: 'none',
									fontWeight: 600,
									px: 3,
									py: 1.25,
									borderRadius: '10px',
									fontSize: '0.875rem',
									boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
									'&:hover': {
										background: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
										transform: 'translateY(-2px)',
										boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
									},
									transition: 'all 0.3s ease'
								}}
								href="mailto:pangkaho8@gmail.com"
							>
								Get In Touch
							</Button>

							<Button
								variant="outlined"
								size="medium"
								startIcon={<Github size={18} />}
								sx={{
									borderColor: '#111827',
									color: '#111827',
									textTransform: 'none',
									fontWeight: 600,
									px: 3,
									py: 1.25,
									borderRadius: '10px',
									fontSize: '0.875rem',
									borderWidth: 2,
									backdropFilter: 'blur(8px)',
									backgroundColor: 'rgba(249, 250, 251, 0.5)',
									'&:hover': {
										borderColor: '#111827',
										backgroundColor: '#111827',
										color: '#FFFFFF',
										borderWidth: 2,
										transform: 'translateY(-2px)',
										boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
									},
									transition: 'all 0.3s ease'
								}}
								href="https://github.com/KennethPangKah0"
								target="_blank"
							>
								View Work
							</Button>
						</div>

						{/* Social Links with Gradient Hover */}
						<div className="flex justify-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
							{[
								{ icon: Github, href: 'https://github.com/KennethPangKah0', external: true, color: 'from-gray-600 to-gray-800' },
								{ icon: Linkedin, href: 'https://www.linkedin.com/in/kenneth-pang-271a23283/', external: true, color: 'from-blue-600 to-blue-800' },
								{ icon: Mail, href: 'mailto:pangkaho8@gmail.com', external: false, color: 'from-red-500 to-pink-600' },
								{ icon: Phone, href: 'tel:+85266002827', external: false, color: 'from-green-500 to-emerald-600' }
							].map((social, index) => {
								const Icon = social.icon;
								return (
									<a key={index} href={social.href} target={social.external ? '_blank' : undefined} rel={social.external ? 'noopener noreferrer' : undefined}>
										<IconButton
											className="group"
											sx={{
												backgroundColor: 'rgba(249, 250, 251, 0.8)',
												backdropFilter: 'blur(8px)',
												border: '2px solid rgba(229, 231, 235, 0.8)',
												color: '#6B7280',
												width: 40,
												height: 40,
												'&:hover': {
													background: `linear-gradient(135deg, ${social.color.split(' ')[0].replace('from-', '#')} 0%, ${social.color.split(' ')[1].replace('to-', '#')} 100%)`,
													borderColor: 'transparent',
													color: '#FFFFFF',
													transform: 'translateY(-4px) scale(1.1)',
													boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
												},
												transition: 'all 0.3s ease'
											}}
										>
											<Icon size={18} />
										</IconButton>
									</a>
								);
							})}
						</div>

						{/* Scroll Idicator with Glow */}
						{/* <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition-all bg-transparent border-0 outline-none focus:outline-none cursor-pointer group animate-fade-in" style={{ animationDelay: '0.7s' }}>
							<div className="flex flex-col items-center gap-1.5">
								<span className="text-xs font-medium">Scroll to explore</span>
								<div className="relative">
									<div className="absolute inset-0 bg-gray-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<div className="relative p-2 rounded-full bg-gray-50/80 backdrop-blur-sm border border-gray-200 group-hover:bg-gray-900 group-hover:border-gray-900 transition-all shadow-lg">
										<ChevronDown size={20} className="animate-bounce group-hover:text-white transition-colors" />
									</div>
								</div>
							</div>
						</button> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
