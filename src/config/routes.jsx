import { createBrowserRouter } from "react-router-dom";

import App from "../app/App";
import Home from "../pages/home/Home";
import AI from "../pages/ai/AI";
import Pricing from "../pages/price/Pricing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import About from "../pages/about/About";
import Services from "../pages/service/Services";
import JoinGroup from "../group/JoinGroup";
import Projects from "../pages/projects/Projects";
import Chatbot from "../pages/ai/Chatbot";
import PdfSummarizer from "../pages/ai/PdfSummarizer";
import OfferLetterGen from "../pages/ai/OfferLetterGen";
import LORGenerator from "../pages/ai/LORGenerator";
import ResumeAnalyzer from "../pages/ai/ResumeAnalyzer";
import CodeAssistant from "../pages/ai/CodeAssistant";
import CGPACalculator from "../pages/ai/CGPACalculator";
import PercentageConverter from "../pages/ai/PercentageConverter";
import PortfolioMaker from "../pages/ai/PortfolioMaker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ✅ PUBLIC ROUTES
      { index: true, element: <Home /> },
      { path: "project", element: <Projects /> },
      { path: "price", element: <Pricing /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "join-group", element: <JoinGroup /> },

      // 🔓 AUTH ROUTES (now normal routes)
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // 🤖 AI ROUTES (ALL PUBLIC NOW)
      {
        path: "ai",
        element: <AI />,

        children: [
          { index: true, element: <Chatbot /> },
          { path: "chatbot", element: <Chatbot /> },
          { path: "pdf", element: <PdfSummarizer /> },
          { path: "offer-letter", element: <OfferLetterGen /> },
          { path: "lor", element: <LORGenerator /> },
          { path: "resume", element: <ResumeAnalyzer /> },
          { path: "code", element: <CodeAssistant /> },

          { path: "cgpa", element: <CGPACalculator /> },
          { path: "percentage", element: <PercentageConverter /> },
          { path: "portfolio", element: <PortfolioMaker /> },
        ],
      },
    ],
  },
]);

export default router;
