import { Languages as LanguagesIcon, MessageCircle, Star } from 'lucide-react';

interface Language {
	name: string;
	flag: string;
	proficiency: string;
	level: number; // 1-5 stars
}

function Languages() {
	const languages: Language[] = [
		{
			name: 'Cantonese',
			flag: '🇭🇰',
			proficiency: 'Native',
			level: 5
		},
		{
			name: 'English',
			flag: '🇬🇧',
			proficiency: 'Professional Working',
			level: 4
		},
		{
			name: 'Mandarin',
			flag: '🇨🇳',
			proficiency: 'Professional Working',
			level: 4
		}
	];

	return (
		<section id="languages" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden">
			{/* White Container Card - Same sizing as Hero */}
			<div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in">
				<div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
					{/* Subtle gradient overlay on white card */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-pink-50/30 pointer-events-none"></div>

					{/* Grid Pattern on White Card */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px]"></div>

					{/* Content */}
					<div className="relative z-10">
						{/* Section Header */}
						<div className="text-center mb-8 animate-fade-in">
							<div className="inline-flex items-center justify-center mb-4">
								<div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-400/50"></div>
								<div className="mx-3 p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
									<LanguagesIcon className="text-gray-700" size={20} />
								</div>
								<div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-400/50"></div>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2">
								<span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Languages</span>
							</h2>
							<p className="text-gray-600 text-sm">Multilingual communication skills</p>
						</div>

						{/* Languages Grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{languages.map((lang, index) => (
								<div key={index} className="group relative bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-blue-400/50 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
									{/* Glow effect on hover */}
									<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-pink-50/0 group-hover:from-blue-50/50 group-hover:to-pink-50/50 rounded-xl transition-all duration-300"></div>

									<div className="relative z-10 text-center">
										{/* Flag Icon */}
										<div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{lang.flag}</div>

										{/* Language Name */}
										<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{lang.name}</h3>

										{/* Proficiency */}
										<p className="text-sm text-gray-600 font-medium mb-3">{lang.proficiency}</p>

										{/* Divider */}
										<div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3"></div>

										{/* Star Rating */}
										<div className="flex justify-center gap-1">
											{[...Array(5)].map((_, i) => (
												<Star key={i} size={16} className={`${i < lang.level ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} transition-colors duration-300`} />
											))}
										</div>
									</div>

									{/* Corner Accent */}
									<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/0 to-transparent group-hover:from-blue-400/10 rounded-bl-full transition-opacity duration-300"></div>
								</div>
							))}
						</div>

						{/* Decorative element */}
						<div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-full shadow-md hover:border-blue-400/50 hover:shadow-lg transition-all duration-300">
								<MessageCircle className="text-blue-500" size={16} />
								<span className="text-gray-700 text-xs font-medium">Effective communicator across cultures</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Languages;
