// import { Link } from "react-router";
// import { FaCode, FaLaptopCode, FaUserFriends, FaChartLine, FaFire, FaTerminal } from "react-icons/fa";
// import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiGithub, SiLinkedin } from 'react-icons/si';
// import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

// const Landing = () => {
//     return (
//         <div className="font-poppins text-gray-800">

//             {/* Hero Section */}
//             <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white px-4 text-center">
//                 <h1 className="text-5xl md:text-6xl font-bold mb-4">Master Coding with <span className="text-yellow-400">CodeShaala</span></h1>
//                 <p className="text-lg md:text-xl mb-6">Practice, Compete, and Crack Interviews</p>
//                 <div className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl shadow-lg">
//                     <pre className="text-left text-sm text-green-400 animate-pulse">
//                         {`function solveProblem() {
//   console.log("Welcome to CodeShaala 🚀");
// }`}
//                     </pre>
//                 </div>
//                 <div className="absolute top-6 right-6 space-x-4 z-10">
//                     <Link to="/login">
//                         <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl hover:scale-105 transition">Login</button>
//                     </Link>
//                     <Link to="/signup">
//                         <button className="bg-white text-purple-800 px-5 py-2 rounded-xl hover:scale-105 transition">Signup</button>
//                     </Link>
//                 </div>

//             </section>

//             {/* Features */}
//             <section className="py-20 bg-white text-center px-6">
//                 <h2 className="text-3xl font-bold mb-10">Why Choose CodeShaala?</h2>
//                 <div className="grid md:grid-cols-4 gap-8">
//                     <div className="bg-purple-50 p-6 rounded-xl shadow">
//                         <FaCode size={40} className="mx-auto text-purple-700 mb-4" />
//                         <h3 className="font-semibold text-lg">Coding Challenges</h3>
//                         <p className="text-sm text-gray-600">Sharpen your DSA skills with hands-on practice.</p>
//                     </div>
//                     <div className="bg-purple-50 p-6 rounded-xl shadow">
//                         <FaUserFriends size={40} className="mx-auto text-purple-700 mb-4" />
//                         <h3 className="font-semibold text-lg">Live Collaboration</h3>
//                         <p className="text-sm text-gray-600">Pair program with friends or mentors in real time.</p>
//                     </div>
//                     <div className="bg-purple-50 p-6 rounded-xl shadow">
//                         <FaLaptopCode size={40} className="mx-auto text-purple-700 mb-4" />
//                         <h3 className="font-semibold text-lg">Interview Prep</h3>
//                         <p className="text-sm text-gray-600">Topic-wise tracks to ace coding interviews.</p>
//                     </div>
//                     <div className="bg-purple-50 p-6 rounded-xl shadow">
//                         <FaChartLine size={40} className="mx-auto text-purple-700 mb-4" />
//                         <h3 className="font-semibold text-lg">Analytics</h3>
//                         <p className="text-sm text-gray-600">Track your progress, speed, and accuracy.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Showcase */}
//             <section className="py-20 bg-gray-100 px-6 text-center">
//                 <h2 className="text-3xl font-bold mb-10">Supported Languages</h2>
//                 <div className="bg-white p-6 rounded-xl max-w-2xl mx-auto shadow">
//                     <pre className="text-left text-sm bg-black text-white p-4 rounded">
//                         {`# Python
// def greet():
//     print("Namaste CodeShaala")`}
//                     </pre>
//                     <p className="mt-4 text-gray-700">Also supports: JavaScript, Java, C++, Go and more!</p>
//                 </div>
//             </section>

//             {/* Testimonials & Stats */}
//             <section className="py-16 bg-purple-900 text-white px-6 text-center">
//                 <h2 className="text-3xl font-bold mb-6">Join 50,000+ Coders</h2>
//                 <p className="text-lg mb-8">Trusted by top learners and partnered with major platforms</p>
//                 <div className="flex justify-center gap-10 text-4xl">
//                     <SiLeetcode />
//                     <SiCodechef />
//                     <SiGeeksforgeeks />
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-white py-10 px-6">
//                 <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
//                     <div className="mb-6 md:mb-0">
//                         <h3 className="text-xl font-semibold">CodeShaala</h3>
//                         <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
//                     </div>
//                     <div className="flex space-x-6 text-2xl">
//                         <a href="#"><AiFillGithub /></a>
//                         <a href="#"><AiFillLinkedin /></a>
//                         <a href="#"><AiFillTwitterCircle /></a>
//                     </div>
//                 </div>
//                 <div className="mt-6 text-center">
//                     <input type="email" placeholder="Subscribe to newsletter" className="p-2 rounded-l bg-white text-black" />
//                     <button className="bg-yellow-400 text-black px-4 py-2 rounded-r hover:bg-yellow-300">Subscribe</button>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// const Landing = () => {
//     return (
//         // New: Changed base font and text color for a sleek dark mode feel
//         <div className="font-sans text-gray-200 bg-gray-900 min-h-screen"> 

//             {/* Navigation (Moved out of Hero for standard structure) */}
//             <header className="fixed w-full z-20 bg-gray-900/90 backdrop-blur-sm shadow-xl p-4">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center">
//                     <Link to="/" className="text-2xl font-extrabold text-teal-400">
//                         CodeShaala<span className="text-yellow-500">.</span>
//                     </Link>
//                     <div className="space-x-4">
//                         <Link to="/login">
//                             <button className="text-white hover:text-teal-400 transition">Login</button>
//                         </Link>
//                         <Link to="/signup">
//                             <button className="bg-teal-400 text-gray-900 font-semibold px-5 py-2 rounded-full hover:bg-teal-300 transition duration-300 shadow-lg hover:shadow-teal-400/50">
//                                 Start Coding
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </header>

//             {/* Hero Section - Sleek Dark Background with Modern Code Mockup */}
//             <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 bg-gray-900 relative overflow-hidden">
//                 {/* Background Grid and Spotlight Effect */}
//                 <div className="absolute inset-0 bg-repeat [background-size:20px_20px] opacity-10" 
//                      style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23374151' stroke-width='1'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")"}}>
//                 </div>
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>

//                 <div className="max-w-4xl px-4 text-center relative z-10">
//                     <p className="text-sm font-medium uppercase text-teal-400 mb-2 flex items-center justify-center">
//                         <FaFire className="mr-2" /> Elevate Your Developer Journey
//                     </p>
//                     {/* Enhanced Typography and Color contrast */}
//                     <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
//                         Master <span className="text-teal-400">Coding</span> with
//                         <br /> CodeShaala
//                     </h1>
//                     <p className="text-xl md:text-2xl mb-10 text-gray-400">
//                         Practice, Compete, and Crack Interviews with our interactive coding environment.
//                     </p>
                    
//                     {/* Modern Code Block/Terminal Mockup */}
//                     <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 w-full shadow-2xl transition hover:shadow-teal-400/30">
//                         <div className="flex justify-start items-center space-x-2 mb-3">
//                             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                             <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                             <span className="text-sm text-gray-400 ml-4">CodeShaala IDE: app.js</span>
//                         </div>
//                         <pre className="text-left text-sm md:text-base text-green-400 font-mono overflow-x-auto">
//                             <code className="whitespace-pre-wrap">
//                                 <span className="text-pink-400">const</span> solveProblem = (<span className="text-yellow-400">problemName</span>) =&gt; <span className="text-pink-400">{`{`}</span>
//                                 <br />  <span className="text-cyan-400">if</span> (problemName <span className="text-teal-400">===</span> <span className="text-orange-400">"TwoSum"</span>) <span className="text-pink-400">{`{`}</span>
//                                 <br />    <span className="text-gray-400">// Optimized solution here...</span>
//                                 <br />    <span className="text-cyan-400">return</span> <span className="text-green-400">"Accepted!"</span>;
//                                 <br />  <span className="text-pink-400">{`}`}</span>
//                                 <br /><span className="text-pink-400">{`}`}</span>
//                                 <br /><span className="text-yellow-400">console</span>.log(<span className="text-green-400">solveProblem</span>(<span className="text-orange-400">"TwoSum"</span>)); <span className="text-gray-500">// Output: Accepted!</span>
//                             </code>
//                         </pre>
//                     </div>
//                 </div>
//             </section>

//             {/* Features - Grid with subtle effects */}
//             <section className="py-20 bg-gray-800 text-center px-6 border-t border-gray-700">
//                 <h2 className="text-4xl font-bold mb-14 text-white">Why CodeShaala is Your Next <span className="text-teal-400">Upgrade</span></h2>
//                 <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
//                     {/* Feature Card Component */}
//                     {[
//                         { icon: FaCode, title: 'Deep Challenges', description: 'Sharpen your DSA and competitive programming skills with a vast problem library.', color: 'teal' },
//                         { icon: FaUserFriends, title: 'Live Collab IDE', description: 'Pair program with friends or mentors in real-time, just like a professional setting.', color: 'purple' },
//                         { icon: FaLaptopCode, title: 'Interview Tracks', description: 'Curated topic-wise roadmaps to efficiently ace your FAANG and startup coding interviews.', color: 'yellow' },
//                         { icon: FaChartLine, title: 'Detailed Analytics', description: 'Track your speed, accuracy, and weak areas with progress reports and visualizations.', color: 'red' },
//                     ].map((feature, index) => (
//                         <div key={index} className={`bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-${feature.color}-500/50`}>
//                             <feature.icon size={40} className={`mx-auto text-${feature.color}-400 mb-4`} />
//                             <h3 className="font-bold text-xl mb-2 text-white">{feature.title}</h3>
//                             <p className="text-sm text-gray-400">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Language Showcase - Enhanced Terminal Look */}
//             <section className="py-20 bg-gray-900 px-6 text-center">
//                 <h2 className="text-4xl font-bold mb-10 text-white">Your Code, Your <span className="text-yellow-400">Language</span></h2>
//                 <div className="max-w-3xl mx-auto">
//                     {/* Modern Terminal/Code Snippet */}
//                     <div className="bg-black p-6 rounded-2xl shadow-2xl border border-gray-700">
//                         <div className="flex justify-start items-center space-x-2 mb-4">
//                             <FaTerminal className="text-green-500" />
//                             <span className="text-sm text-gray-300 font-mono">codewars@codeshaala:~$ python3 solution.py</span>
//                         </div>
//                         <pre className="text-left text-base font-mono overflow-x-auto">
//                             <code className="whitespace-pre-wrap">
//                                 <span className="text-blue-500"># Python Example for Prime Check</span>
//                                 <br /><span className="text-orange-500">def</span> <span className="text-yellow-400">is_prime</span>(<span className="text-teal-400">n</span>):
//                                 <br />    <span className="text-orange-500">if</span> n <span className="text-white">&lt;=</span> 1:
//                                 <br />        <span className="text-orange-500">return</span> <span className="text-red-400">False</span>
//                                 <br />    <span className="text-orange-500">for</span> i <span className="text-orange-500">in</span> range(2, int(n**0.5) <span className="text-white">+</span> 1):
//                                 <br />        <span className="text-orange-500">if</span> n <span className="text-white">%</span> i <span className="text-white">==</span> 0:
//                                 <br />            <span className="text-orange-500">return</span> <span className="text-red-400">False</span>
//                                 <br />    <span className="text-orange-500">return</span> <span className="text-green-400">True</span>
//                             </code>
//                         </pre>
//                     </div>
//                     <p className="mt-8 text-lg text-gray-400">
//                         We support **10+ major languages** including: JavaScript, Java, C++, Go, and Rust.
//                     </p>
//                 </div>
//             </section>

//             {/* Testimonials & Stats - Partnered with a cleaner look */}
//             <section className="py-16 bg-gray-800 border-t border-b border-gray-700 text-white px-6 text-center">
//                 <h2 className="text-3xl font-bold mb-6">Join <span className="text-teal-400">50,000+</span> Coders Worldwide</h2>
//                 <p className="text-lg mb-10 text-gray-400">Trusted by top learners and recognized by major coding platforms.</p>
//                 {/* Logo Showcase with subtle hover effect */}
//                 <div className="flex justify-center items-center gap-8 md:gap-14 text-5xl text-gray-500 max-w-4xl mx-auto">
//                     <SiLeetcode className="hover:text-yellow-500 transition duration-300 cursor-pointer" title="LeetCode" />
//                     <SiCodechef className="hover:text-red-500 transition duration-300 cursor-pointer" title="CodeChef" />
//                     <SiGeeksforgeeks className="hover:text-green-500 transition duration-300 cursor-pointer" title="GeeksforGeeks" />
//                     <SiGithub className="hover:text-white transition duration-300 cursor-pointer" title="GitHub" />
//                 </div>
//             </section>

//             {/* Footer - Updated for better layout and a cleaner newsletter CTA */}
//             <footer className="bg-gray-900 text-white py-12 px-6">
//                 <div className="max-w-6xl mx-auto">
                    
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
//                         <div>
//                             <h4 className="text-xl font-semibold mb-3 text-teal-400">CodeShaala</h4>
//                             <p className="text-sm text-gray-400">The premier platform for DSA mastery.</p>
//                         </div>
                        
//                         <div>
//                             <h4 className="font-semibold mb-3">Links</h4>
//                             <ul className="space-y-2 text-sm text-gray-400">
//                                 <li><a href="#" className="hover:text-teal-400 transition">Pricing</a></li>
//                                 <li><a href="#" className="hover:text-teal-400 transition">Contests</a></li>
//                                 <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h4 className="font-semibold mb-3">Resources</h4>
//                             <ul className="space-y-2 text-sm text-gray-400">
//                                 <li><a href="#" className="hover:text-teal-400 transition">DSA Guides</a></li>
//                                 <li><a href="#" className="hover:text-teal-400 transition">Roadmaps</a></li>
//                                 <li><a href="#" className="hover:text-teal-400 transition">Support</a></li>
//                             </ul>
//                         </div>
                        
//                         <div className="md:col-span-1">
//                             <h4 className="font-semibold mb-3">Stay Updated</h4>
//                             <div className="flex">
//                                 <input 
//                                     type="email" 
//                                     placeholder="Your Email" 
//                                     className="p-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:ring-teal-400 focus:border-teal-400 outline-none w-full" 
//                                 />
//                                 <button className="bg-teal-400 text-gray-900 px-4 py-3 rounded-r-lg font-semibold hover:bg-teal-300 transition">
//                                     Subscribe
//                                 </button>
//                             </div>
//                             <div className="flex space-x-5 text-2xl mt-4 text-gray-400">
//                                 <a href="#" aria-label="GitHub" className="hover:text-white transition"><SiGithub /></a>
//                                 <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><SiLinkedin /></a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="text-center text-sm text-gray-500">
//                         © {new Date().getFullYear()} CodeShaala. All rights reserved. Built for developers, by developers.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };


import React from "react";
import { Link } from "react-router-dom"; // Assumed standard router
import { 
  FaCode, 
  FaLaptopCode, 
  FaUserGraduate, 
  FaChartLine, 
  FaRocket, 
  FaTerminal, 
  FaRobot 
} from "react-icons/fa";
import { 
  SiLeetcode, 
  SiCodechef, 
  SiGeeksforgeeks, 
  SiGithub, 
  SiLinkedin, 
  SiOpenai 
} from 'react-icons/si';
import { BsStars } from "react-icons/bs";

const LandingPage = () => {
    return (
        <div className="font-sans text-slate-300 bg-slate-950 min-h-screen selection:bg-blue-500 selection:text-white"> 

            {/* Navigation - Glassmorphic */}
            <header className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-tight">
                        <span className="bg-blue-600 text-white p-1 rounded-lg"><FaCode /></span>
                        CodeQuest
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="hover:text-blue-400 transition text-sm font-medium">Features</a>
                        <a href="#demo" className="hover:text-blue-400 transition text-sm font-medium">AI Demo</a>
                        <a href="#pricing" className="hover:text-blue-400 transition text-sm font-medium">Pricing</a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login">
                            <button className="text-white hover:text-blue-400 font-medium transition">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                        <BsStars /> AI-Powered Learning
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Code Faster. Learn Deeper. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 animate-gradient-x">
                            With AI Guidance.
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Stop getting stuck on syntax. CodeQuest combines a professional IDE with an intelligent AI tutor that explains logic, fixes bugs, and prepares you for interviews.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                        <Link to="/signup">
                            <button className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2">
                                <FaRocket /> Start Quest For Free
                            </button>
                        </Link>
                        <button className="w-full md:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:border-slate-500 transition">
                            View Demo
                        </button>
                    </div>

                    {/* HERO VISUAL: Split Screen IDE + AI Chat */}
                    <div className="relative mx-auto max-w-5xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[400px] md:h-[500px]">
                        
                        {/* Fake Browser Header */}
                        <div className="absolute top-0 w-full bg-slate-800 h-8 flex items-center px-4 space-x-2 z-10">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="ml-4 text-xs text-slate-400">main.py - CodeQuest IDE</div>
                        </div>

                        {/* Left Side: Code Editor */}
                        <div className="w-full md:w-2/3 pt-12 p-6 text-left font-mono text-sm border-r border-slate-700">
                            <div className="flex text-slate-500 mb-2">
                                <span className="mr-4">1</span> import sys
                            </div>
                            <div className="flex text-slate-500 mb-2">
                                <span className="mr-4">2</span> 
                            </div>
                            <div className="flex text-slate-300 mb-2">
                                <span className="mr-4 text-slate-500">3</span> def <span className="text-yellow-400">two_sum</span>(nums, target):
                            </div>
                            <div className="flex text-slate-300 mb-2">
                                <span className="mr-4 text-slate-500">4</span> &nbsp;&nbsp; map_data = {}
                            </div>
                            <div className="flex text-slate-300 mb-2">
                                <span className="mr-4 text-slate-500">5</span> &nbsp;&nbsp; for i, num in enumerate(nums):
                            </div>
                            <div className="flex text-slate-300 mb-2">
                                <span className="mr-4 text-slate-500">6</span> &nbsp;&nbsp;&nbsp;&nbsp; diff = target - num
                            </div>
                            <div className="flex text-slate-300 mb-2 relative">
                                <span className="mr-4 text-slate-500">7</span> &nbsp;&nbsp;&nbsp;&nbsp; if diff in map_data:
                                {/* Error Highlight */}
                                <div className="absolute left-0 w-full h-full bg-red-500/10 border-b border-red-500/50"></div> 
                            </div>
                            <div className="flex text-slate-300">
                                <span className="mr-4 text-slate-500">8</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return [map_data[diff], i]
                            </div>
                        </div>

                        {/* Right Side: AI Chatbot Interface */}
                        <div className="w-full md:w-1/3 bg-slate-900 pt-12 flex flex-col">
                            <div className="bg-slate-800 p-3 border-b border-slate-700 flex items-center gap-2">
                                <div className="bg-blue-600 p-1.5 rounded-lg"><FaRobot className="text-white text-sm" /></div>
                                <span className="font-semibold text-sm text-white">Quest AI Helper</span>
                            </div>
                            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                                {/* User Message */}
                                <div className="flex justify-end">
                                    <div className="bg-blue-600 text-white text-xs p-3 rounded-l-lg rounded-tr-lg max-w-[90%]">
                                        Why is line 7 throwing an error?
                                    </div>
                                </div>
                                {/* AI Response */}
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 border border-slate-700 text-slate-300 text-xs p-3 rounded-r-lg rounded-tl-lg max-w-[90%]">
                                        <p className="mb-2">It looks like a logic check, but make sure <code>map_data</code> is populated.</p>
                                        <p className="text-blue-400">Suggestion: You need to add the number to the map at the end of the loop.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Input Field */}
                            <div className="p-3 border-t border-slate-700">
                                <div className="bg-slate-950 rounded-lg h-8 border border-slate-700 flex items-center px-3 text-xs text-slate-500">
                                    Ask Quest AI to fix code...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners / Social Proof */}
            <section className="py-10 border-y border-slate-800 bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm text-slate-500 mb-6 font-medium">TRUSTED BY STUDENTS FROM UNIVERSITIES & CODING CLUBS</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-3xl text-slate-600">
                        <SiLeetcode className="hover:text-yellow-500 transition duration-300" />
                        <SiCodechef className="hover:text-amber-700 transition duration-300" />
                        <SiGeeksforgeeks className="hover:text-green-500 transition duration-300" />
                        <SiGithub className="hover:text-white transition duration-300" />
                        <SiOpenai className="hover:text-teal-400 transition duration-300" />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need to <span className="text-blue-500">Level Up</span></h2>
                        <p className="text-slate-400">A complete ecosystem designed for your growth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition duration-300 group">
                            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition duration-300">
                                <FaRobot className="text-blue-400 text-xl group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI Pair Programmer</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Get instant feedback, complexity analysis, and debugging help without leaving your editor. It's like having a senior dev beside you.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/50 transition duration-300 group">
                            <div className="w-12 h-12 bg-violet-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-violet-600 transition duration-300">
                                <FaUserGraduate className="text-violet-400 text-xl group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Curated Study Paths</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Structured roadmaps for Data Structures, Algorithms, and System Design. Don't just code randomly—follow a quest.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition duration-300 group">
                            <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition duration-300">
                                <FaChartLine className="text-green-400 text-xl group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Performance Analytics</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Visualize your consistency, problem-solving speed, and topic strengths. Gamify your progress with leaderboards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Language Showcase */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-10">Speaks your <span className="text-violet-400">Language</span></h2>
                    <div className="bg-black/40 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm shadow-xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                            <FaTerminal className="text-green-500" />
                            <span className="text-xs text-slate-400 font-mono">user@codequest:~/languages</span>
                        </div>
                        <div className="text-left font-mono text-sm md:text-base space-y-2">
                            <p><span className="text-green-400">✔</span> Loaded <span className="text-blue-400">Python 3.11</span> support...</p>
                            <p><span className="text-green-400">✔</span> Loaded <span className="text-yellow-400">JavaScript (Node v18)</span> support...</p>
                            <p><span className="text-green-400">✔</span> Loaded <span className="text-red-400">Java & C++</span> environments...</p>
                            <p className="animate-pulse text-slate-500 mt-4">_ Ready to compile.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="text-2xl font-bold text-white mb-4 block">CodeQuest</Link>
                            <p className="text-slate-400 text-sm max-w-xs mb-6">
                                The ultimate AI-powered platform for students to master coding, ace interviews, and build the future.
                            </p>
                            <div className="flex space-x-4 text-xl text-slate-400">
                                <a href="#" className="hover:text-white transition"><SiGithub /></a>
                                <a href="#" className="hover:text-blue-400 transition"><SiLinkedin /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Platform</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-blue-400 transition">Coding Challenges</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">Interview Prep</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">IDE</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} CodeQuest. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
