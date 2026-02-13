import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Job {
	title: string;
	company: string;
	location: string;
	period: string;
	responsibilities: string[];
	isCurrent?: boolean;
}

function Experience() {
	const jobs: Job[] = [
		{
			title: 'Web Developer',
			company: 'TrolMaster Agro Instruments Co. Ltd',
			location: 'Hong Kong',
			period: 'April 2025 - Present',
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
			company: 'Automated Systems Holdings Ltd.',
			location: 'Hong Kong',
			period: 'April 2024 - April 2025',
			responsibilities: [
				'Developed and implemented user-friendly applications using HTML, CSS, TypeScript and JavaScript (React Native)',
				'Collaborated with back-end developers to ensure seamless integration of front-end and back-end components',
				'Wrote clean, maintainable, and well-documented code following best practices and coding standard',
				'Presented the progress of development work to users, including demonstrations of new features and functionalities'
			]
		}
	];

	return (
		<section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center justify-center mb-6">
						<div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/50"></div>
						<div className="mx-4 p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
							<Briefcase className="text-yellow-400" size={28} />
						</div>
						<div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/50"></div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						<span className="text-yellow-400">Work</span> Experience
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">Building innovative solutions and delivering exceptional results</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-transparent"></div>

					<div className="space-y-12">
						{jobs.map((job, index) => (
							<div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'} md:w-1/2`}>
								{/* Timeline dot */}
								<div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
									<div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse"></div>
									<div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
								</div>

								{/* Card */}
								<div className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1 ${job.isCurrent ? 'border-yellow-400/50 bg-gradient-to-br from-yellow-400/10 to-transparent' : 'border-white/10 hover:border-yellow-400/50'}`}>
									{/* Glow effect on hover */}
									<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

									<div className="relative z-10">
										{/* Header */}
										<div className="mb-6">
											<div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
												<div className="flex items-center gap-3 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
													<h3 className="text-2xl md:text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">{job.title}</h3>
													{job.isCurrent && <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full animate-pulse shadow-lg shadow-yellow-400/50">CURRENT</span>}
												</div>
												<p className="text-white text-lg md:text-xl font-semibold mb-2">{job.company}</p>
												<div className="flex items-center gap-4 text-gray-400 text-sm" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
													<div className="flex items-center gap-1">
														<MapPin size={16} className="text-yellow-400" />
														<span>{job.location}</span>
													</div>
													<div className="flex items-center gap-1">
														<Calendar size={16} className="text-yellow-400" />
														<span className={job.isCurrent ? 'text-yellow-400 font-semibold' : ''}>{job.period}</span>
													</div>
												</div>
											</div>
										</div>

										{/* Responsibilities */}
										<ul className={`space-y-3 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
											{job.responsibilities.map((responsibility, idx) => (
												<li key={idx} className="flex items-start text-gray-300 leading-relaxed" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
													<span className={`text-yellow-400 flex-shrink-0 ${index % 2 === 0 ? 'ml-3' : 'mr-3'} mt-1`}>
														<div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
													</span>
													<span>{responsibility}</span>
												</li>
											))}
										</ul>
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

export default Experience;
