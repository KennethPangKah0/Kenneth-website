"use client";

import {
  Code2,
  Database,
  Globe,
  Grid3x3,
  Server,
  Terminal,
  TestTube,
} from "lucide-react";
import React, { useState } from "react";

interface TechItem {
  name: string;
  icon: string;
  color?: string;
  isImage?: boolean;
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
      title: "Programming Languages",
      subtitle: "Core Languages",
      icon: <Code2 className="w-4 h-4" />,
      items: [
        {
          name: "TypeScript",
          icon: "/techStackLogo/typescript.png",
          color: "#3178C6",
          isImage: true,
        },
        {
          name: "JavaScript",
          icon: "/techStackLogo/javascript.png",
          color: "#F7DF1E",
          isImage: true,
        },
        {
          name: "Python",
          icon: "/techStackLogo/python.png",
          color: "#3776AB",
          isImage: true,
        },
      ],
    },
    {
      title: "Frontend Development",
      subtitle: "UI Frameworks & Libraries",
      icon: <Globe className="w-4 h-4" />,
      items: [
        {
          name: "React",
          icon: "/techStackLogo/react.png",
          color: "#61DAFB",
          isImage: true,
        },
        {
          name: "React Native",
          icon: "/techStackLogo/react-native.png",
          color: "#61DAFB",
          isImage: true,
        },
        {
          name: "Next.js",
          icon: "/techStackLogo/nextjs.png",
          color: "#000000",
          isImage: true,
        },
        {
          name: "Vue.js",
          icon: "/techStackLogo/vuejs.png",
          color: "#4FC08D",
          isImage: true,
        },
        {
          name: "Tailwind CSS",
          icon: "/techStackLogo/tailwind.png",
          color: "#06B6D4",
          isImage: true,
        },
        {
          name: "Material UI",
          icon: "/techStackLogo/mui.png",
          color: "#007FFF",
          isImage: true,
        },
      ],
    },
    {
      title: "Backend & Database",
      subtitle: "Server & Data Management",
      icon: <Database className="w-4 h-4" />,
      items: [
        {
          name: "Node.js",
          icon: "/techStackLogo/nodejs.png",
          color: "#339933",
          isImage: true,
        },
        {
          name: "Flask",
          icon: "/techStackLogo/flask.png",
          color: "#000000",
          isImage: true,
        },
        {
          name: "FastAPI",
          icon: "/techStackLogo/fastapi.svg",
          color: "#009688",
          isImage: true,
        },
        {
          name: "MySQL",
          icon: "/techStackLogo/mysql.png",
          color: "#4479A1",
          isImage: true,
        },
        {
          name: "PostgreSQL",
          icon: "/techStackLogo/postgreSQL.png",
          color: "#336791",
          isImage: true,
        },
      ],
    },
    {
      title: "DevOps & Tools",
      subtitle: "Development Tools",
      icon: <Terminal className="w-4 h-4" />,
      items: [
        {
          name: "Docker",
          icon: "/techStackLogo/docker.png",
          color: "#2496ED",
          isImage: true,
        },
        {
          name: "Git",
          icon: "/techStackLogo/git.png",
          color: "#F05032",
          isImage: true,
        },
        {
          name: "GitHub",
          icon: "/techStackLogo/github.png",
          color: "#181717",
          isImage: true,
        },
        {
          name: "Sourcetree",
          icon: "/techStackLogo/sourcetree.png",
          color: "#2496ED",
          isImage: true,
        },
        {
          name: "VS Code",
          icon: "/techStackLogo/vscode.png",
          color: "#007ACC",
          isImage: true,
        },
        {
          name: "Jira",
          icon: "/techStackLogo/jira.png",
          color: "#0052CC",
          isImage: true,
        },
      ],
    },
    {
      title: "Testing & Quality",
      subtitle: "Testing Tools",
      icon: <TestTube className="w-4 h-4" />,
      items: [
        {
          name: "Jest",
          icon: "/techStackLogo/jest.png",
          color: "#C21325",
          isImage: true,
        },
        {
          name: "Postman",
          icon: "/techStackLogo/postman.svg",
          color: "#FF6C37",
          isImage: true,
        },
      ],
    },
  ];

  // Flatten all tech items for carousel
  const allTechItems = techCategories.flatMap((cat) => cat.items);

  // Render icon based on type
  const renderIcon = (item: TechItem, size: "small" | "medium" | "large") => {
    const sizeClasses = {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-10 h-10",
    };

    if (item.isImage) {
      return (
        <img
          src={item.icon}
          alt={item.name}
          className={`${sizeClasses[size]} object-contain`}
        />
      );
    }
    return <span className="text-3xl">{item.icon}</span>;
  };

  return (
    <section
      id="tech-stack"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-24 overflow-hidden"
    >
      {/* Changed from max-w-4xl to max-w-2xl */}
      <div className="max-w-2xl w-full mx-auto relative z-10 animate-fade-in">
        {/* Changed padding from p-6 md:p-8 lg:p-10 to p-4 md:p-6 lg:p-7 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-4 md:p-6 lg:p-7 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header - Made more compact */}
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-purple-400/50"></div>
                <div className="mx-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md transition-colors duration-300">
                  <Server
                    className="text-gray-700 dark:text-gray-300"
                    size={18}
                  />
                </div>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-purple-400/50"></div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Tech
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Stack
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                Technologies and tools I work with to build innovative solutions
              </p>
            </div>

            {!isExpanded ? (
              // Carousel View
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden py-6">
                  <div className="flex gap-4 tech-scroll">
                    {/* Duplicate items for infinite scroll effect */}
                    {[...allTechItems, ...allTechItems].map((item, index) => (
                      <div key={index} className="flex-shrink-0">
                        <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:bg-white dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer w-20 h-20">
                          {/* Hover glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 rounded-lg transition-all duration-300"></div>

                          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                            {/* Icon */}
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                              {renderIcon(item, "medium")}
                            </div>
                            {/* Name - Hidden on small cards, shown on hover */}
                            <p className="text-[9px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-5 whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>

                          {/* Color accent bar */}
                          {item.color && (
                            <div
                              className="tech-accent-bar"
                              style={{ backgroundColor: item.color }}
                            ></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient Overlays */}
                <div className="tech-carousel-fade-left dark:bg-gradient-to-r dark:from-gray-800 bg-gradient-to-r from-white to-transparent"></div>
                <div className="tech-carousel-fade-right dark:bg-gradient-to-l dark:from-gray-800 bg-gradient-to-l from-white to-transparent"></div>

                {/* Expand Button */}
                <div className="text-center mt-4">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none text-sm"
                  >
                    <Grid3x3 size={16} />
                    <span>View All Technologies</span>
                  </button>
                </div>
              </div>
            ) : (
              // Expanded Grid View
              <div className="space-y-6">
                {techCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="animate-fade-in"
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  >
                    {/* Category Header */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white shadow-md">
                          {category.icon}
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-gray-100">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tech Items Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:bg-white dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                        >
                          {/* Hover glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 rounded-lg transition-all duration-300"></div>

                          <div className="relative z-10 flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                              {renderIcon(item, "large")}
                            </div>
                            {/* Name */}
                            <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </p>
                          </div>

                          {/* Color accent bar */}
                          {item.color && (
                            <div
                              className="tech-accent-bar"
                              style={{ backgroundColor: item.color }}
                            ></div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Divider (except for last category) */}
                    {categoryIndex < techCategories.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent"></div>
                    )}
                  </div>
                ))}

                {/* Collapse Button */}
                <div className="text-center mt-6">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none text-sm"
                  >
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
