import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Job {
	title: string;
	company: string;
	location: string;
	period: string;
	responsibilities: string[];
	isCurrent?: boolean;
	logo?: string; // Company logo emoji or icon
	type?: string; // Job type (Full-time, Contract, etc.)
}

function Experience() {
	const [isExpanded, setIsExpanded] = useState(false);

	const jobs: Job[] = [
		{
			title: 'Web Developer',
			company: 'TrolMaster Agro Instruments Co. Ltd',
			location: 'Hong Kong',
			period: 'April 2025 - Present',
			logo: '🌱',
			type: 'Full-time',
			isCurrent: true,
			responsibilities: [
				'Developed and implemented user-friendly web interfaces and applications using HTML, CSS, TypeScript and JavaScript (React + React Native)',
				'Developed web applications from ground up, conducting comprehensive research and planning for optimal framework and library selection',
				'Proof-of-concept development to efficient production transition and provide flexible development capabilities',
				'Maintained regular communication with users to gather requirements, provide project updates, and ensure deliverables met business objectives'
			]
		},
		{
			title: 'Mobile Developer',
			company: 'Automated Systems Holdings Ltd',
			location: 'Hong Kong',
			period: 'April 2024 - April 2025',
			logo: '🚇',
			type: 'Full-time',
			responsibilities: [
				'Developed and implemented user-friendly applications using HTML, CSS, TypeScript and JavaScript (React Native)',
				'Collaborated with back-end developers to ensure seamless integration of front-end and back-end components',
				'Wrote clean, maintainable, and well-documented code following best practices and coding standard',
				'Presented the progress of development work to users, including demonstrations of new features and functionalities'
			]
		}
	];

	return (
		<section id="experience" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden">
			{/* White Container Card */}
			<div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in">
				<div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
					{/* Subtle gradient overlay on white card */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>

					{/* Grid Pattern on White Card */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px]"></div>

					{/* Content */}
					<div className="relative z-10">
						{/* Section Header */}
						<div className="text-center mb-8 animate-fade-in">
							<div className="inline-flex items-center justify-center mb-4">
								<div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-400/50"></div>
								<div className="mx-3 p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
									<Briefcase className="text-gray-700" size={20} />
								</div>
								<div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-400/50"></div>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2">
								<span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Work</span> <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
							</h2>
							<p className="text-gray-600 text-sm max-w-2xl mx-auto">Building innovative solutions and delivering exceptional results</p>
						</div>

						{!isExpanded ? (
							// Compact List View
							<div className="space-y-4">
								{jobs.map((job, index) => (
									<div key={index} className="group relative bg-gradient-to-br from-gray-50 to-gray-100 hover:bg-white border-2 border-gray-200 hover:border-blue-400/50 rounded-xl p-4 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
										{/* Hover glow */}
										<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 rounded-xl transition-all duration-300"></div>

										<div className="relative z-10 flex items-start gap-4">
											{/* Logo */}
											<div className="flex-shrink-0">
												<div className="w-12 h-12 bg-white rounded-xl border-2 border-gray-200 group-hover:border-blue-400 flex items-center justify-center text-2xl shadow-md transition-all duration-300">{job.logo}</div>
											</div>

											{/* Content */}
											<div className="flex-1 min-w-0">
												<div className="flex items-start justify-between gap-2 mb-1">
													<div className="flex-1">
														<h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
														<p className="text-sm text-gray-700 font-medium">
															{job.company}
															{job.type && <span className="text-gray-500 font-normal"> • {job.type}</span>}
														</p>
													</div>
													{job.isCurrent && <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-md flex-shrink-0">CURRENT</span>}
												</div>

												<div className="flex flex-wrap items-center gap-3 text-gray-600 text-xs mt-2">
													<div className="flex items-center gap-1">
														<MapPin size={14} className="text-green-500" />
														<span>{job.location}</span>
													</div>
													<div className="flex items-center gap-1">
														<Calendar size={14} className="text-green-500" />
														<span className={job.isCurrent ? 'text-green-600 font-semibold' : ''}>{job.period}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}

								{/* View Details Button */}
								<div className="text-center mt-6 pt-4">
									<button onClick={() => setIsExpanded(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none">
										<ChevronDown size={18} />
										<span>View Details</span>
									</button>
								</div>
							</div>
						) : (
							// Expanded Timeline View
							<div className="relative">
								{/* Timeline line */}
								<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/50 via-purple-400/30 to-transparent"></div>

								<div className="space-y-6">
									{jobs.map((job, index) => (
										<div key={index} className={`relative animate-fade-in ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6 md:ml-auto'} md:w-1/2`} style={{ animationDelay: `${index * 0.2}s` }}>
											{/* Timeline dot */}
											<div className="hidden md:flex absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2 z-10">
												<div className={`w-3 h-3 rounded-full shadow-lg ${job.isCurrent ? 'bg-green-500 shadow-green-500/50 animate-pulse' : 'bg-blue-500 shadow-blue-500/50'}`}></div>
												{job.isCurrent && <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>}
											</div>

											{/* Grey Card */}
											<div className={`group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border-2 ${job.isCurrent ? 'border-green-400/50' : 'border-gray-200 hover:border-blue-400/50'}`}>
												{/* Glow effect */}
												<div className={`absolute inset-0 rounded-xl transition-all duration-300 ${job.isCurrent ? 'bg-gradient-to-br from-green-50/50 to-transparent' : 'bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50'}`}></div>

												<div className="relative z-10 p-5">
													{/* Header */}
													<div className="mb-3">
														<div className="flex items-start justify-between gap-2 mb-2">
															<div className="flex-1">
																<h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{job.title}</h3>
																<p className="text-gray-800 text-sm md:text-base font-semibold">{job.company}</p>
															</div>
															{job.isCurrent && <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/30 flex-shrink-0">CURRENT</span>}
														</div>
														<div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
															<div className="flex items-center gap-1">
																<MapPin size={14} className="text-green-500" />
																<span>{job.location}</span>
															</div>
															<div className="flex items-center gap-1">
																<Calendar size={14} className="text-green-500" />
																<span className={job.isCurrent ? 'text-green-600 font-semibold' : ''}>{job.period}</span>
															</div>
														</div>
													</div>

													{/* Divider */}
													<div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-3"></div>

													{/* Responsibilities */}
													<div>
														<h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Key Responsibilities</h4>
														<ul className="space-y-1.5">
															{job.responsibilities.map((responsibility, idx) => (
																<li key={idx} className="flex items-start text-gray-700 leading-relaxed text-xs">
																	<span className="flex-shrink-0 mr-2 mt-1">
																		<div className={`w-1 h-1 rounded-full ${job.isCurrent ? 'bg-green-500' : 'bg-blue-500'}`}></div>
																	</span>
																	<span className="flex-1">{responsibility}</span>
																</li>
															))}
														</ul>
													</div>
												</div>

												{/* Corner Accent */}
												<div className={`absolute top-0 right-0 w-12 h-12 rounded-bl-full transition-opacity duration-300 ${job.isCurrent ? 'bg-gradient-to-br from-green-400/10 to-transparent' : 'bg-gradient-to-br from-blue-400/0 to-transparent group-hover:from-blue-400/10'}`}></div>
											</div>
										</div>
									))}
								</div>

								{/* Show Less Button */}
								<div className="text-center mt-8">
									<div className="text-center mt-6 pt-4">
										<button onClick={() => setIsExpanded(false)} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none">
											<ChevronUp size={18} />
											<span>Show Less</span>
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
