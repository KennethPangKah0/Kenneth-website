"use client";

import { Button, IconButton } from "@mui/material";
import { Code, Github, Linkedin, Mail, Phone } from "lucide-react";

function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20 pb-24 overflow-hidden"
    >
      {/* Changed from max-w-4xl to max-w-2xl */}
      <div className="max-w-2xl w-full mx-auto relative z-10 animate-fade-in">
        {/* Changed padding from p-6 md:p-8 lg:p-10 to p-4 md:p-6 lg:p-7 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-4 md:p-6 lg:p-7 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>

          <div className="relative z-10 text-center">
            {/* Changed mb-5 to mb-4 for tighter spacing */}
            <div className="mb-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-xs font-semibold">
                  Available for Opportunities
                </span>
              </div>
            </div>

            <div
              className="mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-md opacity-60 animate-spin-slow"></div>
              </div>
            </div>

            <div
              className="mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Changed text sizes slightly smaller */}
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Hi, I'm Kenneth
                </span>
              </h1>
              <div className="flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div
              className="mb-4 space-y-2 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 font-bold">
                Pang Ka Ho | 彭嘉晧 | 🇭🇰
              </p>
              <Code
                size={16}
                className="text-gray-600 dark:text-gray-400 inline-block"
              />
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                Software Developer
              </p>
              <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium">
                @ TrolMaster Agro Instruments Co. Ltd
              </p>
            </div>

            <div
              className="max-w-xl mx-auto mb-5 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Changed padding from p-4 to p-3 */}
                <div className="relative bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all">
                  <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                    "As a professional programmer, I am driven to leverage my
                    growing skills to develop high-quality, user-friendly mobile
                    applications and websites. Fueled by a passion for learning
                    and a flexible problem-solving mindset, I am eager to take
                    on new challenges and create value for the company and its
                    users."
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-wrap justify-center gap-3 mb-5 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                variant="contained"
                size="medium"
                startIcon={<Mail size={18} />}
                sx={{
                  background:
                    "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1.25,
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #111827 0%, #000000 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
                href="mailto:pangkaho8@gmail.com"
              >
                Get In Touch
              </Button>

              <Button
                variant="outlined"
                size="medium"
                startIcon={<Github size={18} />}
                sx={{
                  borderColor: "#111827",
                  color: "#111827",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1.25,
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  borderWidth: 2,
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(249, 250, 251, 0.5)",
                  "&:hover": {
                    borderColor: "#111827",
                    backgroundColor: "#111827",
                    color: "#FFFFFF",
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                  transition: "all 0.3s ease",
                  ".dark &": {
                    borderColor: "#E5E7EB",
                    color: "#E5E7EB",
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    "&:hover": {
                      borderColor: "#E5E7EB",
                      backgroundColor: "#E5E7EB",
                      color: "#111827",
                    },
                  },
                }}
                href="https://github.com/KennethPangKah0"
                target="_blank"
              >
                View Work
              </Button>
            </div>

            <div
              className="flex justify-center gap-2 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/KennethPangKah0",
                  external: true,
                  color: "from-gray-600 to-gray-800",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kenneth-pang-271a23283/",
                  external: true,
                  color: "from-blue-600 to-blue-800",
                },
                {
                  icon: Mail,
                  href: "mailto:pangkaho8@gmail.com",
                  external: false,
                  color: "from-red-500 to-pink-600",
                },
                {
                  icon: Phone,
                  href: "tel:+85266002827",
                  external: false,
                  color: "from-green-500 to-emerald-600",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                  >
                    <IconButton
                      className="group"
                      sx={{
                        backgroundColor: "rgba(249, 250, 251, 0.8)",
                        backdropFilter: "blur(8px)",
                        border: "2px solid rgba(229, 231, 235, 0.8)",
                        color: "#6B7280",
                        width: 40,
                        height: 40,
                        "&:hover": {
                          background: `linear-gradient(135deg, ${social.color.split(" ")[0].replace("from-", "#")} 0%, ${social.color.split(" ")[1].replace("to-", "#")} 100%)`,
                          borderColor: "transparent",
                          color: "#FFFFFF",
                          transform: "translateY(-4px) scale(1.1)",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                        },
                        transition: "all 0.3s ease",
                        ".dark &": {
                          backgroundColor: "rgba(55, 65, 81, 0.8)",
                          borderColor: "rgba(75, 85, 99, 0.8)",
                          color: "#9CA3AF",
                        },
                      }}
                    >
                      <Icon size={18} />
                    </IconButton>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
