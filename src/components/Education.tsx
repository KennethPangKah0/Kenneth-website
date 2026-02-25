import { Calendar, GraduationCap, MapPin } from 'lucide-react';

interface EducationItem {
	degree: string;
	type?: string;
	institution: string;
	location: string;
	period: string;
	logo?: string;
}

function Education() {
	const education: EducationItem[] = [
		{
			degree: 'MicroMaster in A.I. & Programming',
			type: 'Full-time',
			institution: 'Tecky Academy',
			location: 'Hong Kong',
			period: '2023 — 2024',
			logo: '/educationLogo/tecky.png'
		},
		{
			degree: 'Bachelor of Journalism and Communication',
			type: 'Honours',
			institution: 'The Hang Seng University of Hong Kong',
			location: 'Hong Kong',
			period: '2021 — 2023',
			logo: '/educationLogo/hsu.png'
		},
		{
			degree: 'The Standard Foundation Studies Programs',
			type: 'Full-time',
			institution: 'The University of New South Wales',
			location: 'Australia',
			period: '2018',
			logo: '/educationLogo/unsw.png'
		}
	];

	return (
		<section id="education" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden">
			{/* Container Card */}
			<div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in">
				<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-6 md:p-8 lg:p-10 relative overflow-hidden">
					{/* Subtle gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30 dark:from-green-900/10 dark:via-transparent dark:to-blue-900/10 pointer-events-none"></div>

					{/* Content */}
					<div className="relative z-10">
						{/* Section Header */}
						<div className="text-center mb-8 animate-fade-in">
							<div className="inline-flex items-center justify-center mb-4">
								<div className="h-px w-6 bg-gradient-to-r from-transparent to-green-400/50 dark:to-green-500/50"></div>
								<div className="mx-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md">
									<GraduationCap className="text-gray-700 dark:text-gray-300" size={20} />
								</div>
								<div className="h-px w-6 bg-gradient-to-l from-transparent to-green-400/50 dark:to-green-500/50"></div>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2">
								<span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">Education</span>
							</h2>
							<p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">Academic foundation and continuous learning journey</p>
						</div>

						{/* Compact List View */}
						<div className="space-y-4">
							{education.map((edu, index) => (
								<div
									key={index}
									className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:bg-white dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-green-400/50 dark:hover:border-green-500/50 rounded-xl p-4 transition-all duration-300 hover:shadow-lg dark:hover:shadow-green-500/10 animate-fade-in"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									{/* Hover glow */}
									<div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-blue-50/0 group-hover:from-green-50/50 group-hover:to-blue-50/50 dark:group-hover:from-green-900/20 dark:group-hover:to-blue-900/20 rounded-xl transition-all duration-300"></div>

									<div className="relative z-10 flex items-start gap-4">
										{/* Logo */}
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-xl border-2 border-gray-200 dark:border-gray-500 group-hover:border-green-400 dark:group-hover:border-green-500 flex items-center justify-center shadow-md transition-all duration-300 overflow-hidden">
												{edu.logo ? <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" /> : <GraduationCap size={24} className="text-gray-600 dark:text-gray-300" />}
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 min-w-0">
											<div className="flex items-start justify-between gap-2 mb-1">
												<div className="flex-1">
													<h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{edu.degree}</h3>
													<p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
														{edu.institution}
														{edu.type && <span className="text-gray-500 dark:text-gray-400 font-normal"> • {edu.type}</span>}
													</p>
												</div>
											</div>

											<div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 text-xs mt-2">
												<div className="flex items-center gap-1">
													<MapPin size={14} className="text-green-500 dark:text-green-400" />
													<span>{edu.location}</span>
												</div>
												<div className="flex items-center gap-1">
													<Calendar size={14} className="text-green-500 dark:text-green-400" />
													<span>{edu.period}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Education;
