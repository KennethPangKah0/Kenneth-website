import { Code, Heart } from 'lucide-react';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-yellow-400/20 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="flex flex-col items-center space-y-6">
					{/* Logo/Name */}
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-2">
							<span className="text-yellow-400">Kenneth</span>
							<span className="text-white"> Pang</span>
						</h3>
						<p className="text-gray-500 text-sm">Web & Mobile Developer</p>
					</div>

					{/* Quick Links */}
					{/* <div className="flex flex-wrap justify-center gap-6 text-sm">
						<a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
							About
						</a>
						<a href="#experience" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
							Experience
						</a>
						<a href="#skills" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
							Skills
						</a>
						<a href="#education" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
							Education
						</a>
						<a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
							Contact
						</a>
					</div> */}

					{/* Divider */}
					<div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

					{/* Copyright and Credits */}
					<div className="text-center space-y-2">
						<p className="text-gray-400 text-sm">© {currentYear} Pang Ka Ho Kenneth. All rights reserved.</p>
						<div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
							<span>Built with</span>
							<Heart size={14} className="text-red-500 fill-current animate-pulse" />
							<span>using</span>
							<Code size={14} className="text-yellow-400" />
							<span>React, TypeScript & Tailwind CSS</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
