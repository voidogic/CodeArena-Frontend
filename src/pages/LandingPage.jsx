import { Link } from "react-router";
import { FaCode, FaLaptopCode, FaUserFriends, FaChartLine, FaFire, FaTerminal } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiGithub, SiLinkedin } from 'react-icons/si';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

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

const Landing = () => {
    return (
        // New: Changed base font and text color for a sleek dark mode feel
        <div className="font-sans text-gray-200 bg-gray-900 min-h-screen"> 

            {/* Navigation (Moved out of Hero for standard structure) */}
            <header className="fixed w-full z-20 bg-gray-900/90 backdrop-blur-sm shadow-xl p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-extrabold text-teal-400">
                        CodeShaala<span className="text-yellow-500">.</span>
                    </Link>
                    <div className="space-x-4">
                        <Link to="/login">
                            <button className="text-white hover:text-teal-400 transition">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="bg-teal-400 text-gray-900 font-semibold px-5 py-2 rounded-full hover:bg-teal-300 transition duration-300 shadow-lg hover:shadow-teal-400/50">
                                Start Coding
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section - Sleek Dark Background with Modern Code Mockup */}
            <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 bg-gray-900 relative overflow-hidden">
                {/* Background Grid and Spotlight Effect */}
                <div className="absolute inset-0 bg-repeat [background-size:20px_20px] opacity-10" 
                     style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23374151' stroke-width='1'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")"}}>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>

                <div className="max-w-4xl px-4 text-center relative z-10">
                    <p className="text-sm font-medium uppercase text-teal-400 mb-2 flex items-center justify-center">
                        <FaFire className="mr-2" /> Elevate Your Developer Journey
                    </p>
                    {/* Enhanced Typography and Color contrast */}
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
                        Master <span className="text-teal-400">Coding</span> with
                        <br /> CodeShaala
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-400">
                        Practice, Compete, and Crack Interviews with our interactive coding environment.
                    </p>
                    
                    {/* Modern Code Block/Terminal Mockup */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 w-full shadow-2xl transition hover:shadow-teal-400/30">
                        <div className="flex justify-start items-center space-x-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-400 ml-4">CodeShaala IDE: app.js</span>
                        </div>
                        <pre className="text-left text-sm md:text-base text-green-400 font-mono overflow-x-auto">
                            <code className="whitespace-pre-wrap">
                                <span className="text-pink-400">const</span> solveProblem = (<span className="text-yellow-400">problemName</span>) =&gt; <span className="text-pink-400">{`{`}</span>
                                <br />  <span className="text-cyan-400">if</span> (problemName <span className="text-teal-400">===</span> <span className="text-orange-400">"TwoSum"</span>) <span className="text-pink-400">{`{`}</span>
                                <br />    <span className="text-gray-400">// Optimized solution here...</span>
                                <br />    <span className="text-cyan-400">return</span> <span className="text-green-400">"Accepted!"</span>;
                                <br />  <span className="text-pink-400">{`}`}</span>
                                <br /><span className="text-pink-400">{`}`}</span>
                                <br /><span className="text-yellow-400">console</span>.log(<span className="text-green-400">solveProblem</span>(<span className="text-orange-400">"TwoSum"</span>)); <span className="text-gray-500">// Output: Accepted!</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Features - Grid with subtle effects */}
            <section className="py-20 bg-gray-800 text-center px-6 border-t border-gray-700">
                <h2 className="text-4xl font-bold mb-14 text-white">Why CodeShaala is Your Next <span className="text-teal-400">Upgrade</span></h2>
                <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {/* Feature Card Component */}
                    {[
                        { icon: FaCode, title: 'Deep Challenges', description: 'Sharpen your DSA and competitive programming skills with a vast problem library.', color: 'teal' },
                        { icon: FaUserFriends, title: 'Live Collab IDE', description: 'Pair program with friends or mentors in real-time, just like a professional setting.', color: 'purple' },
                        { icon: FaLaptopCode, title: 'Interview Tracks', description: 'Curated topic-wise roadmaps to efficiently ace your FAANG and startup coding interviews.', color: 'yellow' },
                        { icon: FaChartLine, title: 'Detailed Analytics', description: 'Track your speed, accuracy, and weak areas with progress reports and visualizations.', color: 'red' },
                    ].map((feature, index) => (
                        <div key={index} className={`bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-${feature.color}-500/50`}>
                            <feature.icon size={40} className={`mx-auto text-${feature.color}-400 mb-4`} />
                            <h3 className="font-bold text-xl mb-2 text-white">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Language Showcase - Enhanced Terminal Look */}
            <section className="py-20 bg-gray-900 px-6 text-center">
                <h2 className="text-4xl font-bold mb-10 text-white">Your Code, Your <span className="text-yellow-400">Language</span></h2>
                <div className="max-w-3xl mx-auto">
                    {/* Modern Terminal/Code Snippet */}
                    <div className="bg-black p-6 rounded-2xl shadow-2xl border border-gray-700">
                        <div className="flex justify-start items-center space-x-2 mb-4">
                            <FaTerminal className="text-green-500" />
                            <span className="text-sm text-gray-300 font-mono">codewars@codeshaala:~$ python3 solution.py</span>
                        </div>
                        <pre className="text-left text-base font-mono overflow-x-auto">
                            <code className="whitespace-pre-wrap">
                                <span className="text-blue-500"># Python Example for Prime Check</span>
                                <br /><span className="text-orange-500">def</span> <span className="text-yellow-400">is_prime</span>(<span className="text-teal-400">n</span>):
                                <br />    <span className="text-orange-500">if</span> n <span className="text-white">&lt;=</span> 1:
                                <br />        <span className="text-orange-500">return</span> <span className="text-red-400">False</span>
                                <br />    <span className="text-orange-500">for</span> i <span className="text-orange-500">in</span> range(2, int(n**0.5) <span className="text-white">+</span> 1):
                                <br />        <span className="text-orange-500">if</span> n <span className="text-white">%</span> i <span className="text-white">==</span> 0:
                                <br />            <span className="text-orange-500">return</span> <span className="text-red-400">False</span>
                                <br />    <span className="text-orange-500">return</span> <span className="text-green-400">True</span>
                            </code>
                        </pre>
                    </div>
                    <p className="mt-8 text-lg text-gray-400">
                        We support **10+ major languages** including: JavaScript, Java, C++, Go, and Rust.
                    </p>
                </div>
            </section>

            {/* Testimonials & Stats - Partnered with a cleaner look */}
            <section className="py-16 bg-gray-800 border-t border-b border-gray-700 text-white px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Join <span className="text-teal-400">50,000+</span> Coders Worldwide</h2>
                <p className="text-lg mb-10 text-gray-400">Trusted by top learners and recognized by major coding platforms.</p>
                {/* Logo Showcase with subtle hover effect */}
                <div className="flex justify-center items-center gap-8 md:gap-14 text-5xl text-gray-500 max-w-4xl mx-auto">
                    <SiLeetcode className="hover:text-yellow-500 transition duration-300 cursor-pointer" title="LeetCode" />
                    <SiCodechef className="hover:text-red-500 transition duration-300 cursor-pointer" title="CodeChef" />
                    <SiGeeksforgeeks className="hover:text-green-500 transition duration-300 cursor-pointer" title="GeeksforGeeks" />
                    <SiGithub className="hover:text-white transition duration-300 cursor-pointer" title="GitHub" />
                </div>
            </section>

            {/* Footer - Updated for better layout and a cleaner newsletter CTA */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-3 text-teal-400">CodeShaala</h4>
                            <p className="text-sm text-gray-400">The premier platform for DSA mastery.</p>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3">Links</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-teal-400 transition">Pricing</a></li>
                                <li><a href="#" className="hover:text-teal-400 transition">Contests</a></li>
                                <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Resources</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-teal-400 transition">DSA Guides</a></li>
                                <li><a href="#" className="hover:text-teal-400 transition">Roadmaps</a></li>
                                <li><a href="#" className="hover:text-teal-400 transition">Support</a></li>
                            </ul>
                        </div>
                        
                        <div className="md:col-span-1">
                            <h4 className="font-semibold mb-3">Stay Updated</h4>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="p-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:ring-teal-400 focus:border-teal-400 outline-none w-full" 
                                />
                                <button className="bg-teal-400 text-gray-900 px-4 py-3 rounded-r-lg font-semibold hover:bg-teal-300 transition">
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex space-x-5 text-2xl mt-4 text-gray-400">
                                <a href="#" aria-label="GitHub" className="hover:text-white transition"><SiGithub /></a>
                                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><SiLinkedin /></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} CodeShaala. All rights reserved. Built for developers, by developers.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
