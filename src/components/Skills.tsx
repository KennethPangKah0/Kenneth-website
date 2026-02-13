import { Code2, Database, Languages, Zap } from 'lucide-react';
import React from 'react';

interface Skill {
	name: string;
	level: number;
}

interface SkillCategory {
	title: string;
	icon: React.ReactNode;
	skills: Skill[];
}

function Skills() {
	const skillCategories: SkillCategory[] = [
		{
			title: 'Programming Languages',
			icon: <Code2 className="w-6 h-6" />,
			skills: [
				{ name: 'TypeScript', level: 85 },
				{ name: 'JavaScript', level: 80 },
				{ name: 'Python', level: 75 }
			]
		},
		{
			title: 'Frontend Development',
			icon: <Zap className="w-6 h-6" />,
			skills: [
				{ name: 'React', level: 80 },
				{ name: 'React Native', level: 80 },
				{ name: 'Next.js', level: 80 },
				{ name: 'Tailwind CSS', level: 90 },
				{ name: 'Material UI', level: 85 },
				{ name: 'AmChart', level: 70 },
				{ name: 'Motion animation', level: 70 }
			]
		},
		{
			title: 'Backend & Tools',
			icon: <Database className="w-6 h-6" />,
			skills: [
				{ name: 'Node.js', level: 70 },
				{ name: 'Flask/FastAPI', level: 70 },
				{ name: 'MySQL', level: 70 },
				{ name: 'Docker', level: 60 },
				{ name: 'Git version control', level: 85 }
			]
		}
	];

	const languages = [
		{ name: 'Cantonese', level: 100 },
		{ name: 'Mandarin', level: 80 },
		{ name: 'English', level: 75 }
	];

	return (
		<section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-yellow-400">Technical</span> Skills
					</h2>
					<div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{skillCategories.map((category, index) => (
						<div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1">
							{/* Glow effect on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

							<div className="relative z-10">
								{/* Icon & Title */}
								<div className="flex items-center gap-3 mb-6">
									<div className="p-2.5 bg-yellow-400/10 rounded-lg text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">{category.icon}</div>
									<h3 className="text-xl font-bold text-white">{category.title}</h3>
								</div>

								{/* Skills */}
								<div className="space-y-4">
									{category.skills.map((skill, idx) => (
										<div key={idx}>
											<div className="flex justify-between mb-2">
												<span className="text-gray-300 text-sm font-medium">{skill.name}</span>
												<span className="text-yellow-400 text-sm font-bold">{skill.level}%</span>
											</div>
											<div className="h-2 bg-white/5 rounded-full overflow-hidden">
												<div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-yellow-400/50" style={{ width: `${skill.level}%` }}></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Languages Section */}
				<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300">
					<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

					<div className="relative z-10">
						{/* Header */}
						<div className="flex items-center gap-3 mb-8">
							<div className="p-2.5 bg-yellow-400/10 rounded-lg text-yellow-400">
								<Languages className="w-6 h-6" />
							</div>
							<h3 className="text-2xl font-bold text-white">Languages</h3>
						</div>

						{/* Language Circles */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
							{languages.map((language, index) => (
								<div key={index} className="flex flex-col items-center group">
									{/* Circular Progress */}
									<div className="relative w-40 h-40 mb-4">
										{/* Background circle */}
										<svg className="w-full h-full transform -rotate-90">
											<circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/5" />
											{/* Progress circle */}
											<circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 70}`} strokeDashoffset={`${2 * Math.PI * 70 * (1 - language.level / 100)}`} className="text-yellow-400 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" strokeLinecap="round" />
										</svg>
										{/* Percentage text */}
										<div className="absolute inset-0 flex items-center justify-center">
											<span className="text-4xl font-bold text-yellow-400">{language.level}%</span>
										</div>
									</div>

									{/* Language name */}
									<h4 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">{language.name}</h4>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
