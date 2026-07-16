import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHeadset,
  faComments,
  faInfoCircle,
  faCogs,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function DropdownContact() {
  const contactItems = [
    {
      icon: faInfoCircle,
      title: "About Our Company",
      desc: "Discover our mission, vision, and journey",
      path: "/about",
    },
    {
      icon: faCogs,
      title: "Our Services",
      desc: "Explore powerful solutions we offer",
      path: "/services",
    },
    {
      icon: faUsers,
      title: "Join Our Community",
      desc: "Connect, learn, and grow with others",
      path: "/join-group",
    },
  ];

  return (
    <div className="bg-[#111] border border-[#222] rounded-2xl p-6 shadow-xl">
      <div className="grid md:grid-cols-3 gap-4">
        {contactItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="group p-4 rounded-xl bg-[#0d0d0d] hover:bg-[#1a1a1a] transition duration-300 border border-transparent hover:border-orange-500"
          >
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-gray-400 mt-1 text-sm group-hover:text-orange-400 transition"
              />

              <div>
                <h3 className="text-white font-semibold group-hover:text-orange-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
