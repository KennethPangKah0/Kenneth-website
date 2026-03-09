"use client";

import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { useState } from "react";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isCurrent?: boolean;
  logo?: string;
  type?: string;
}

function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const jobs: Job[] = [
    {
      title: "Software Developer",
      company: "TrolMaster Agro Instruments Co. Ltd",
      location: "Hong Kong",
      period: "April 2025 - Present",
      logo: "🌱",
      type: "Full-time",
      isCurrent: true,
      responsibilities: [
        "Built a commercial-grade smart farming control platform from the ground up using Next.js, Redux and WebSocket, enabling farm operators to remotely control temperature, humidity, and lighting systems in real time",
        "Integrated AI-driven data analysis with interactive amCharts 5 visualisations, providing actionable insights to improve crop yield and consistency",
        "Integrated and tested RESTful APIs using Postman and wrote unit tests with Jest to ensure code reliability and quality",
        "Collaborated directly with clients and end-users to gather requirements and deliver intuitive UI/UX solutions, ensuring a seamless user experience",
        "Managed project delivery in an Agile Scrum environment using Jira, ensuring timely completion of sprint goals",
      ],
    },
    {
      title: "Mobile Developer",
      company: "Automated Systems Holdings Ltd",
      location: "Hong Kong",
      period: "April 2024 - April 2025",
      logo: "🏥",
      type: "Full-time",
      responsibilities: [
        "Developed and delivered multiple Mini Apps within HA Go, the official Hong Kong Hospital Authority mobile application, including an AI-powered body joint angle detection feature using the device camera, an insulin tracking system, and a blood pressure monitoring tool",
        "Translated Figma designs into production-ready mobile interfaces using React Native and TypeScript, ensuring pixel-perfect implementation aligned with UX specifications",
        "Refactored legacy codebase by migrating JavaScript class components to TypeScript functional components, improving code maintainability and type safety",
        "Conducted API testing using Postman and integrated RESTful APIs into the frontend layer, collaborating closely with the backend team to ensure seamless data flow",
        "Optimised application performance by implementing appropriate React Hooks, reducing unnecessary re-renders and improving overall user experience",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden"
    >
      <div className="max-w-2xl w-full mx-auto relative z-10 animate-fade-in">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-4 md:p-6 lg:p-7 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-400/50"></div>
                <div className="mx-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md transition-colors duration-300">
                  <Briefcase
                    className="text-gray-700 dark:text-gray-300"
                    size={18}
                  />
                </div>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-400/50"></div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Work
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
                2 years building impactful applications with React, React
                Native, and TypeScript
              </p>
            </div>

            {!isExpanded ? (
              // Compact List View
              <div className="space-y-3">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:bg-white dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400/50 dark:hover:border-blue-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 rounded-xl transition-all duration-300"></div>

                    <div className="relative z-10 flex items-start gap-3">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-white dark:bg-gray-600 rounded-xl border-2 border-gray-200 dark:border-gray-500 group-hover:border-blue-400 dark:group-hover:border-blue-500 flex items-center justify-center text-xl shadow-md transition-all duration-300">
                          {job.logo}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex-1">
                            <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">
                              {job.company}
                              {job.type && (
                                <span className="text-gray-500 dark:text-gray-400 font-normal">
                                  {" "}
                                  • {job.type}
                                </span>
                              )}
                            </p>
                          </div>
                          {job.isCurrent && (
                            <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-md flex-shrink-0">
                              CURRENT
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 text-xs mt-1.5">
                          <div className="flex items-center gap-1">
                            <MapPin size={12} className="text-green-500" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-green-500" />
                            <span
                              className={
                                job.isCurrent
                                  ? "text-green-600 dark:text-green-400 font-semibold"
                                  : ""
                              }
                            >
                              {job.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* View Details Button */}
                <div className="text-center mt-4 pt-3">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none text-sm"
                  >
                    <ChevronDown size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ) : (
              // Expanded Timeline View
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/50 via-purple-400/30 to-transparent dark:from-blue-500/50 dark:via-purple-500/30"></div>

                <div className="space-y-5">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className={`relative animate-fade-in ${index % 2 === 0 ? "md:pr-5" : "md:pl-5 md:ml-auto"} md:w-1/2`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:flex absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div
                          className={`w-2.5 h-2.5 rounded-full shadow-lg ${job.isCurrent ? "bg-green-500 shadow-green-500/50 animate-pulse" : "bg-blue-500 shadow-blue-500/50"}`}
                        ></div>
                        {job.isCurrent && (
                          <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                        )}
                      </div>

                      {/* Grey Card */}
                      <div
                        className={`group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border-2 ${
                          job.isCurrent
                            ? "border-green-400/50 dark:border-green-500/50"
                            : "border-gray-200 dark:border-gray-600 hover:border-blue-400/50 dark:hover:border-blue-500/50"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                            job.isCurrent
                              ? "bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/20 dark:to-transparent"
                              : "bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20"
                          }`}
                        ></div>

                        <div className="relative z-10 p-4">
                          {/* Header */}
                          <div className="mb-2.5">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <div className="flex-1">
                                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                                  {job.title}
                                </h3>
                                <p className="text-gray-800 dark:text-gray-200 text-xs md:text-sm font-semibold">
                                  {job.company}
                                </p>
                              </div>
                              {job.isCurrent && (
                                <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/30 flex-shrink-0">
                                  CURRENT
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 text-xs">
                              <div className="flex items-center gap-1">
                                <MapPin size={12} className="text-green-500" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar
                                  size={12}
                                  className="text-green-500"
                                />
                                <span
                                  className={
                                    job.isCurrent
                                      ? "text-green-600 dark:text-green-400 font-semibold"
                                      : ""
                                  }
                                >
                                  {job.period}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 mb-2.5"></div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                            <ul className="space-y-1.5">
                              {job.responsibilities.map(
                                (responsibility, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed text-xs"
                                  >
                                    <span className="flex-shrink-0 mr-2 mt-1">
                                      <div
                                        className={`w-1 h-1 rounded-full ${job.isCurrent ? "bg-green-500" : "bg-blue-500"}`}
                                      ></div>
                                    </span>
                                    <span className="flex-1">
                                      {responsibility}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div
                          className={`absolute top-0 right-0 w-10 h-10 rounded-bl-full transition-opacity duration-300 ${
                            job.isCurrent
                              ? "bg-gradient-to-br from-green-400/10 to-transparent dark:from-green-500/10"
                              : "bg-gradient-to-br from-blue-400/0 to-transparent dark:from-blue-500/0 group-hover:from-blue-400/10 dark:group-hover:from-blue-500/10"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show Less Button */}
                <div className="text-center mt-6">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none text-sm"
                  >
                    <ChevronUp size={16} />
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

export default Experience;
