import { useState } from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Hero from './Hero';
import Navigation from './Navigation';
import Skills from './Skills';

function Portfolio() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
			{/* Animated background grid - spans entire page */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
				<div className="absolute top-2/3 left-1/3 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
			</div>

			{/* Content */}
			<div className="relative z-10">
				<Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
				<Hero />
				<Experience />
				<Skills />
				<Education />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default Portfolio;
