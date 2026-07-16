import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLaptopCode,
  faCertificate,
  faUsers,
  faBriefcase,
  faRocket,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function DropdownPrograms() {
  const programs = [
    {
      icon: faGraduationCap,
      title: "Internships",
      desc: "Gain real-world experience through industry internships.",
      path: "/programs/internship",
    },
    {
      icon: faLaptopCode,
      title: "Live Projects",
      desc: "Work on enterprise-level projects with mentors.",
      path: "/programs/live-projects",
    },
    {
      icon: faCertificate,
      title: "Certifications",
      desc: "Earn industry-recognized certificates.",
      path: "/programs/certifications",
    },
    {
      icon: faUsers,
      title: "Workshops",
      desc: "Hands-on sessions on trending technologies.",
      path: "/programs/workshops",
    },
    {
      icon: faBriefcase,
      title: "Placement Support",
      desc: "Resume review, mock interviews and hiring support.",
      path: "/programs/placement",
    },
    {
      icon: faRocket,
      title: "Career Development",
      desc: "Mentorship and career guidance from experts.",
      path: "/programs/career",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#222] bg-[#111] shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 border-b border-[#222]">
        <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400 border border-orange-500/20">
          Programs
        </span>

        <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-white">
          Learn, Build & Grow
        </h2>

        <p className="mt-2 text-sm lg:text-base text-gray-400 max-w-2xl">
          Explore career-focused programs designed to help students and
          professionals build practical skills and accelerate their careers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {programs.map((program, index) => (
          <Link
            key={index}
            to={program.path}
            className="group rounded-xl border border-[#262626] bg-[#181818] p-5 transition-all duration-300 hover:border-orange-500 hover:bg-[#1f1f1f] hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition">
                <FontAwesomeIcon icon={program.icon} />
              </div>

              <div>
                <h3 className="font-semibold text-white group-hover:text-orange-400 transition">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {program.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#222] px-6 py-5">
        <div>
          <h4 className="font-semibold text-white">
            Ready to start your journey?
          </h4>

          <p className="mt-1 text-sm text-gray-400">
            Explore all learning opportunities offered by Lyient.
          </p>
        </div>

        <Link
          to="/programs"
          className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          View All Programs
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}

export default DropdownPrograms;
