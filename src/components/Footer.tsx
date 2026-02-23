import { Code, Heart } from 'lucide-react';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative overflow-hidden">
			<div className="relative z-10 pb-28 border-t-2 border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* White Container Card - Matching Hero sizing */}
					<div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
						{/* Subtle gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>

						{/* Grid Pattern on White Card */}
						<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px]"></div>

						{/* Content */}
						<div className="relative z-10 flex flex-col items-center space-y-4">
							{/* Logo/Name */}
							<div className="text-center">
								<h3 className="text-xl md:text-2xl font-bold mb-1">
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kenneth</span>
									<span className="text-gray-900"> Pang</span>
								</h3>
								<p className="text-gray-600 text-xs md:text-sm font-medium">Web & Mobile Developer</p>
							</div>

							{/* Divider */}
							<div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

							{/* Copyright and Credits */}
							<div className="text-center space-y-2">
								<p className="text-gray-700 text-xs font-medium">© {currentYear} Pang Ka Ho Kenneth. All rights reserved.</p>
								<div className="flex items-center justify-center gap-1.5 text-gray-600 text-xs">
									<span>Built with</span>
									<Heart size={12} className="text-red-500 fill-current animate-pulse" />
									<span>using</span>
									<Code size={12} className="text-blue-600" />
									<span className="font-medium">React, TypeScript & Tailwind CSS</span>
								</div>
							</div>

							{/* Decorative bottom line */}
							<div className="pt-2">
								<div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
