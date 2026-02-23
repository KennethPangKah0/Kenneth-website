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
			icon: <Mail className="w-5 h-5" />,
			label: 'Email',
			value: 'pangkaho8@gmail.com',
			href: 'mailto:pangkaho8@gmail.com'
		},
		{
			icon: <Phone className="w-5 h-5" />,
			label: 'Phone',
			value: '+852 6600 2827',
			href: 'tel:+85266002827'
		},
		{
			icon: <MapPin className="w-5 h-5" />,
			label: 'Location',
			value: 'Hong Kong',
			href: null
		}
	];

	const socialLinks = [
		{
			icon: <Linkedin className="w-5 h-5" />,
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/kenneth'
		},
		{
			icon: <Github className="w-5 h-5" />,
			label: 'GitHub',
			href: 'https://github.com/kenneth'
		}
	];

	return (
		<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-yellow-400">Get In</span> Touch
					</h2>
					<div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full mb-4"></div>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out!</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
					{/* Contact Info Sidebar */}
					<div className="lg:col-span-2 space-y-6">
						{/* Contact Info Cards */}
						<div className="space-y-4">
							{contactInfo.map((item, index) => (
								<a key={index} href={item.href || '#'} className={`no-underline group block relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10 hover:-translate-y-1 ${!item.href ? 'pointer-events-none' : ''}`}>
									<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent rounded-xl transition-all duration-300"></div>

									<div className="relative z-10 flex items-center gap-4 ">
										<div className="p-3 bg-yellow-400/10 rounded-lg text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">{item.icon}</div>
										<div>
											<p className="text-sm text-gray-400 mb-1">{item.label}</p>
											<p className="text-white font-semibold">{item.value}</p>
										</div>
									</div>
								</a>
							))}
						</div>

						{/* Social Links */}
						<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-xl"></div>

							<div className="relative z-10">
								<h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
								<div className="flex gap-3">
									{socialLinks.map((social, index) => (
										<a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group p-3 bg-yellow-400/10 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110" aria-label={social.label}>
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-3">
						<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 hover:from-yellow-400/5 hover:to-transparent rounded-2xl transition-all duration-300"></div>

							<div className="relative z-10">
								{isSubmitted ? (
									<div className="flex flex-col items-center justify-center py-12 text-center">
										<div className="mb-4 p-4 bg-green-500/10 rounded-full">
											<CheckCircle className="w-16 h-16 text-green-400" />
										</div>
										<h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
										<p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="space-y-6">
										{/* Name */}
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
												Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												required
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
												placeholder="Your name"
											/>
										</div>

										{/* Email */}
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
												Email *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
												placeholder="your.email@example.com"
											/>
										</div>

										{/* Subject */}
										<div>
											<label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
												Subject *
											</label>
											<input
												type="text"
												id="subject"
												name="subject"
												required
												value={formData.subject}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
												placeholder="What's this about?"
											/>
										</div>

										{/* Message */}
										<div>
											<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
												Message *
											</label>
											<textarea
												id="message"
												name="message"
												required
												rows={6}
												value={formData.message}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
												placeholder="Your message..."
											/>
										</div>

										{/* Submit Button */}
										<button type="submit" className="w-full px-8 py-4 bg-yellow-400 text-black font-bold cursor-pointer rounded-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 group">
											<span>Send Message</span>
											<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
										</button>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
