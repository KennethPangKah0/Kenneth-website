import { Calendar, GraduationCap, MapPin } from 'lucide-react';

interface EducationItem {
	degree: string;
	school: string;
	period: string;
	location: string;
	description: string;
	achievements?: string[];
}

function Education() {
	const education: EducationItem[] = [
		{
			degree: 'Bachelor of Science in Computer Science',
			school: 'University of Technology',
			period: '2018 - 2022',
			location: 'Hong Kong',
			description: 'Focused on software engineering, algorithms, and full-stack development.',
			achievements: ["Dean's List for Academic Excellence", 'Led final year project on AI-powered chatbot', 'GPA: 3.8/4.0']
		},
		{
			degree: 'High School Diploma',
			school: 'International Secondary School',
			period: '2015 - 2018',
			location: 'Hong Kong',
			description: 'Completed with honors in Mathematics and Computer Science.',
			achievements: ['Mathematics Competition Winner', 'Computer Science Club President']
		}
	];

	return (
		<section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-yellow-400">Education</span> Background
					</h2>
					<div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-yellow-400/30 to-transparent transform -translate-x-1/2"></div>

					{/* Education Items */}
					<div className="space-y-12">
						{education.map((item, index) => (
							<div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
								{/* Timeline dot */}
								<div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
									<div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse"></div>
									<div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
								</div>

								{/* Spacer for alignment */}
								<div className="hidden md:block md:w-1/2"></div>

								{/* Content Card */}
								<div className="md:w-1/2">
									<div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1">
										{/* Glow effect on hover */}
										<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

										<div className="relative z-10">
											{/* Icon */}
											<div className="inline-flex p-3 bg-yellow-400/10 rounded-xl text-yellow-400 mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
												<GraduationCap className="w-6 h-6" />
											</div>

											{/* Degree */}
											<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{item.degree}</h3>

											{/* School */}
											<p className="text-lg text-gray-300 font-semibold mb-4">{item.school}</p>

											{/* Meta Info */}
											<div className="flex flex-wrap gap-4 mb-4 text-sm">
												<div className="flex items-center gap-2 text-gray-400">
													<Calendar className="w-4 h-4 text-yellow-400" />
													<span>{item.period}</span>
												</div>
												<div className="flex items-center gap-2 text-gray-400">
													<MapPin className="w-4 h-4 text-yellow-400" />
													<span>{item.location}</span>
												</div>
											</div>

											{/* Description */}
											<p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

											{/* Achievements */}
											{item.achievements && item.achievements.length > 0 && (
												<div className="mt-4 pt-4 border-t border-white/10">
													<h4 className="text-sm font-semibold text-yellow-400 mb-2">Achievements:</h4>
													<ul className="space-y-2">
														{item.achievements.map((achievement, idx) => (
															<li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
																<span className="text-yellow-400 mt-1">•</span>
																<span>{achievement}</span>
															</li>
														))}
													</ul>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Education;
