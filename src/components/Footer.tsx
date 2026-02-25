import { Code, Heart } from 'lucide-react';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative overflow-hidden">
			<div className="relative z-10 pb-28 border-t-2 border-gray-200 dark:border-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Container Card */}
					<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-6 md:p-8 relative overflow-hidden">
						{/* Subtle gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>

						{/* Content */}
						<div className="relative z-10 flex flex-col items-center space-y-4">
							{/* Logo/Name */}
							<div className="text-center">
								<h3 className="text-xl md:text-2xl font-bold mb-1">
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Kenneth</span>
									<span className="text-gray-900 dark:text-gray-100"> Pang</span>
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">Web & Mobile Developer</p>
							</div>

							{/* Divider */}
							<div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

							{/* Copyright and Credits */}
							<div className="text-center space-y-2">
								<p className="text-gray-700 dark:text-gray-300 text-xs font-medium">© {currentYear} Pang Ka Ho Kenneth. All rights reserved.</p>
								<div className="flex items-center justify-center gap-1.5 text-gray-600 dark:text-gray-400 text-xs">
									<span>Built with</span>
									<Heart size={12} className="text-red-500 dark:text-red-400 fill-current animate-pulse" />
									<span>using</span>
									<Code size={12} className="text-blue-600 dark:text-blue-400" />
									<span className="font-medium">React, TypeScript & Tailwind CSS</span>
								</div>
							</div>

							{/* Decorative bottom line */}
							<div className="pt-2">
								<div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
