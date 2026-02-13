import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

interface EducationItem {
	degree: string;
	type?: string;
	institution: string;
	location: string;
	period: string;
}

function Education() {
	const education: EducationItem[] = [
		{
			degree: 'MicroMaster in A.I. & Programming',
			type: 'Full-time',
			institution: 'Tecky Academy',
			location: 'Hong Kong',
			period: '2023 — 2024'
		},
		{
			degree: 'Bachelor of Journalism and Communication',
			type: 'Honours',
			institution: 'The Hang Seng University of Hong Kong',
			location: 'Hong Kong',
			period: '2021 — 2023'
		},
		{
			degree: 'Higher Diploma in New Media and Communication',
			institution: 'HKU SPACE Community College',
			location: 'Hong Kong',
			period: '2019 — 2021'
		},
		{
			degree: 'The Standard Foundation Studies Programs',
			institution: 'The University of New South Wales',
			location: 'Australia',
			period: '2018'
		}
	];

	return (
		<section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center justify-center mb-6">
						<div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/50"></div>
						<div className="mx-4 p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
							<GraduationCap className="text-yellow-400" size={28} />
						</div>
						<div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/50"></div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">Academic foundation and continuous learning journey</p>
				</div>

				{/* Education Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{education.map((edu, index) => (
						<div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1 overflow-hidden">
							{/* Glow effect on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

							<div className="relative z-10">
								{/* Icon Badge */}
								<div className="inline-flex p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20 mb-4 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-300">
									<Award className="text-yellow-400 group-hover:text-black transition-colors duration-300" size={24} />
								</div>

								{/* Degree */}
								<h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{edu.degree}</h3>
								{edu.type && <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs font-semibold rounded-full mb-4 border border-yellow-400/30">{edu.type}</span>}

								{/* Institution */}
								<p className="text-white font-semibold text-lg mb-4">{edu.institution}</p>

								{/* Meta Information */}
								<div className="flex flex-wrap gap-4 text-gray-400 text-sm">
									<div className="flex items-center gap-2">
										<MapPin size={16} className="text-yellow-400/70" />
										<span>{edu.location}</span>
									</div>
									<div className="flex items-center gap-2">
										<Calendar size={16} className="text-yellow-400/70" />
										<span>{edu.period}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Decorative element */}
				<div className="mt-16 text-center">
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-full">
						<GraduationCap className="text-yellow-400" size={20} />
						<span className="text-gray-400 text-sm font-medium">Continuous learner with passion for growth</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Education;
