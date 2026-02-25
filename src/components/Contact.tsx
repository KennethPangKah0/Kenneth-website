import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ name: '', email: '', subject: '', message: '' });
		}, 3000);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const contactInfo = [
		{
			icon: <Mail className="w-4 h-4" />,
			label: 'Email',
			value: 'pangkaho8@gmail.com',
			href: 'mailto:pangkaho8@gmail.com'
		},
		{
			icon: <Phone className="w-4 h-4" />,
			label: 'Phone',
			value: '+852 6600 2827',
			href: 'tel:+85266002827'
		},
		{
			icon: <MapPin className="w-4 h-4" />,
			label: 'Location',
			value: 'Hong Kong',
			href: null
		}
	];

	const socialLinks = [
		{
			icon: <Linkedin className="w-4 h-4" />,
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/kenneth-pang-271a23283/'
		},
		{
			icon: <Github className="w-4 h-4" />,
			label: 'GitHub',
			href: 'https://github.com/KennethPangKah0'
		}
	];

	return (
		<section id="contact" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden">
			{/* Container Card */}
			<div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in">
				<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-6 md:p-8 lg:p-10 relative overflow-hidden">
					{/* Subtle gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>

					{/* Content */}
					<div className="relative z-10">
						{/* Header */}
						<div className="text-center mb-8 animate-fade-in">
							<div className="inline-flex items-center justify-center mb-4">
								<div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-400/50 dark:to-blue-500/50"></div>
								<div className="mx-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md">
									<Mail className="text-gray-700 dark:text-gray-300" size={20} />
								</div>
								<div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-400/50 dark:to-blue-500/50"></div>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2">
								<span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">Get In</span>{' '}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Touch</span>
							</h2>
							<p className="text-gray-600 dark:text-gray-400 text-sm">Have a project in mind or want to collaborate? Feel free to reach out!</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
							{/* Contact Info Sidebar */}
							<div className="lg:col-span-2 space-y-4">
								{/* Contact Info Cards */}
								<div className="space-y-3">
									{contactInfo.map((item, index) => (
										<a
											key={index}
											href={item.href || '#'}
											className={`no-underline group block relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-3 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 hover:-translate-y-1 animate-fade-in ${!item.href ? 'pointer-events-none' : ''}`}
											style={{ animationDelay: `${index * 0.1}s` }}
										>
											<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 rounded-lg transition-all duration-300"></div>

											<div className="relative z-10 flex items-center gap-3">
												<div className="p-2 bg-white dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300 shadow-md">{item.icon}</div>
												<div>
													<p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
													<p className="text-sm text-gray-900 dark:text-gray-100 font-semibold">{item.value}</p>
												</div>
											</div>
										</a>
									))}
								</div>

								{/* Social Links */}
								<div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
									<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg"></div>

									<div className="relative z-10">
										<h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Connect With Me</h3>
										<div className="flex gap-2">
											{socialLinks.map((social, index) => (
												<a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group p-2 bg-white dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md border border-gray-200 dark:border-gray-500" aria-label={social.label}>
													{social.icon}
												</a>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Contact Form */}
							<div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
								<div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-5 md:p-6 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-lg dark:shadow-blue-500/5">
									<div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 hover:from-blue-50/30 hover:to-purple-50/30 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10 rounded-xl transition-all duration-300"></div>

									<div className="relative z-10">
										{isSubmitted ? (
											<div className="flex flex-col items-center justify-center py-8 text-center">
												<div className="mb-3 p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
													<CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
												</div>
												<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Message Sent!</h3>
												<p className="text-sm text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
											</div>
										) : (
											<form onSubmit={handleSubmit} className="space-y-4">
												{/* Name */}
												<div>
													<label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
														Name *
													</label>
													<input
														type="text"
														id="name"
														name="name"
														required
														value={formData.name}
														onChange={handleChange}
														className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300"
														placeholder="Your name"
													/>
												</div>

												{/* Email */}
												<div>
													<label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
														Email *
													</label>
													<input
														type="email"
														id="email"
														name="email"
														required
														value={formData.email}
														onChange={handleChange}
														className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300"
														placeholder="your.email@example.com"
													/>
												</div>

												{/* Subject */}
												<div>
													<label htmlFor="subject" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
														Subject *
													</label>
													<input
														type="text"
														id="subject"
														name="subject"
														required
														value={formData.subject}
														onChange={handleChange}
														className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300"
														placeholder="What's this about?"
													/>
												</div>

												{/* Message */}
												<div>
													<label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
														Message *
													</label>
													<textarea
														id="message"
														name="message"
														required
														rows={5}
														value={formData.message}
														onChange={handleChange}
														className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 resize-none"
														placeholder="Your message..."
													/>
												</div>

												{/* Submit Button */}
												<button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white text-sm font-bold cursor-pointer rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl shadow-lg group">
													<span>Send Message</span>
													<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
												</button>
											</form>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;