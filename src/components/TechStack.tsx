import { Code2, Database, Globe, Grid3x3, Server, Terminal } from 'lucide-react';
import React, { useState } from 'react';

interface TechItem {
	name: string;
	icon: string; // Can be emoji or image URL
	color?: string;
	isImage?: boolean; // Flag to indicate if icon is an image
}

interface TechCategory {
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	items: TechItem[];
}

function TechStack() {
	const [isExpanded, setIsExpanded] = useState(false);

	const techCategories: TechCategory[] = [
		{
			title: 'Programming Languages',
			subtitle: 'Core Languages',
			icon: <Code2 className="w-5 h-5" />,
			items: [
				{ name: 'TypeScript', icon: '/typescript.png', color: '#3178C6', isImage: true },
				{ name: 'JavaScript', icon: '/javascript.png', color: '#F7DF1E', isImage: true },
				{ name: 'Python', icon: '/python.png', color: '#3776AB', isImage: true }
			]
		},
		{
			title: 'Frontend Development',
			subtitle: 'UI Frameworks & Libraries',
			icon: <Globe className="w-5 h-5" />,
			items: [
				{ name: 'React', icon: '/react.png', color: '#61DAFB', isImage: true },
				{ name: 'React Native', icon: '/react-native.png', color: '#61DAFB', isImage: true },
				{ name: 'Next.js', icon: '/nextjs.png', color: '#000000', isImage: true },
				{ name: 'Tailwind CSS', icon: '/tailwind.png', color: '#06B6D4', isImage: true },
				{ name: 'Material UI', icon: '/mui.png', color: '#007FFF', isImage: true },
				{ name: 'Framer Motion', icon: '/framer.png', color: '#FF0055', isImage: true }
			]
		},
		{
			title: 'Backend & Database',
			subtitle: 'Server & Data Management',
			icon: <Database className="w-5 h-5" />,
			items: [
				{ name: 'Node.js', icon: '/nodejs.png', color: '#339933', isImage: true },
				{ name: 'Flask', icon: '/flask.png', color: '#000000', isImage: true },
				{ name: 'FastAPI', icon: '/fastapi.svg', color: '#009688', isImage: true },
				{ name: 'PostgreSQL', icon: '/postgreSQL.png', color: '#4479A1', isImage: true }
			]
		},
		{
			title: 'DevOps & Tools',
			subtitle: 'Development Tools',
			icon: <Terminal className="w-5 h-5" />,
			items: [
				{ name: 'Git', icon: '/git.png', color: '#F05032', isImage: true },
				{ name: 'GitHub', icon: '/github.png', color: '#181717', isImage: true },
				{ name: 'Sourcetree', icon: '/sourcetree.png', color: '#2496ED', isImage: true },
				{ name: 'VS Code', icon: '/vscode.png', color: '#007ACC', isImage: true },
				{ name: 'Postman', icon: '/postman.svg', color: '#007ACC', isImage: true }
			]
		}
	];

	// Flatten all tech items for carousel
	const allTechItems = techCategories.flatMap((cat) => cat.items);

	// Render icon based on type
	const renderIcon = (item: TechItem, size: 'small' | 'medium' | 'large') => {
		const sizeClasses = {
			small: 'w-8 h-8',
			medium: 'w-10 h-10',
			large: 'w-12 h-12'
		};

		if (item.isImage) {
			return <img src={item.icon} alt={item.name} className={`${sizeClasses[size]} object-contain`} />;
		}
		// Fallback to emoji if not an image
		return <span className="text-4xl">{item.icon}</span>;
	};

	return (
		<section id="tech-stack" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden">
			{/* White Container Card */}
			<div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in">
				<div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
					{/* Subtle gradient overlay on white card */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>

					{/* Grid Pattern on White Card */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px]"></div>

					{/* Content */}
					<div className="relative z-10">
						{/* Header */}
						<div className="text-center mb-8 animate-fade-in">
							<div className="inline-flex items-center justify-center mb-4">
								<div className="h-px w-6 bg-gradient-to-r from-transparent to-purple-400/50"></div>
								<div className="mx-3 p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
									<Server className="text-gray-700" size={20} />
								</div>
								<div className="h-px w-6 bg-gradient-to-l from-transparent to-purple-400/50"></div>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2">
								<span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Tech</span> <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stack</span>
							</h2>
							<p className="text-gray-600 text-sm">Technologies and tools I work with to build innovative solutions.</p>
						</div>

						{!isExpanded ? (
							// Carousel View
							<div className="relative">
								{/* Carousel Container */}
								<div className="overflow-hidden py-8">
									<div className="flex gap-6 tech-scroll">
										{/* Duplicate items for infinite scroll effect */}
										{[...allTechItems, ...allTechItems].map((item, index) => (
											<div key={index} className="flex-shrink-0">
												<div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 hover:bg-white border-2 border-gray-200 hover:border-purple-400 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer w-24 h-24">
													{/* Hover glow */}
													<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 rounded-lg transition-all duration-300"></div>

													<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
														{/* Icon */}
														<div className="transform group-hover:scale-110 transition-transform duration-300">{renderIcon(item, 'medium')}</div>
														{/* Name - Hidden on small cards, shown on hover */}
														<p className="text-[10px] font-semibold text-gray-800 group-hover:text-purple-600 transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-6 whitespace-nowrap">{item.name}</p>
													</div>

													{/* Color accent bar */}
													{item.color && <div className="tech-accent-bar" style={{ backgroundColor: item.color }}></div>}
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Gradient Overlays */}
								<div className="tech-carousel-fade-left"></div>
								<div className="tech-carousel-fade-right"></div>

								{/* Expand Button */}
								<div className="text-center mt-6">
									<button onClick={() => setIsExpanded(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none">
										<Grid3x3 size={18} />
										<span>View All Technologies</span>
									</button>
								</div>
							</div>
						) : (
							// Expanded Grid View
							<div className="space-y-8">
								{techCategories.map((category, categoryIndex) => (
									<div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
										{/* Category Header */}
										<div className="mb-4">
											<div className="flex items-center gap-2 mb-1">
												<div className="p-1.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white shadow-md">{category.icon}</div>
												<h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
											</div>
											{/* <p className="text-gray-600 text-xs ml-9">{category.subtitle}</p> */}
										</div>

										{/* Tech Items Grid */}
										<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
											{category.items.map((item, itemIndex) => (
												<div key={itemIndex} className="group relative bg-gradient-to-br from-gray-50 to-gray-100 hover:bg-white border-2 border-gray-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
													{/* Hover glow */}
													<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 rounded-lg transition-all duration-300"></div>

													<div className="relative z-10 flex flex-col items-center text-center">
														{/* Icon */}
														<div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">{renderIcon(item, 'large')}</div>
														{/* Name */}
														<p className="text-xs font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{item.name}</p>
													</div>

													{/* Color accent bar */}
													{item.color && <div className="tech-accent-bar" style={{ backgroundColor: item.color }}></div>}
												</div>
											))}
										</div>

										{/* Divider (except for last category) */}
										{categoryIndex < techCategories.length - 1 && <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>}
									</div>
								))}

								{/* Collapse Button */}
								<div className="text-center mt-8">
									<button onClick={() => setIsExpanded(false)} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none">
										{/* <Grid3x3 size={18} /> */}
										<span>Show Less</span>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default TechStack;
