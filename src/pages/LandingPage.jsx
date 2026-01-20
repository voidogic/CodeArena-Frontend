import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTerminal, 
  FaPenNib, 
  FaDatabase, 
  FaProjectDiagram, 
  FaMicrochip, 
  FaNetworkWired, 
  FaServer, 
  FaCodeBranch, 
  FaFire, 
  FaChartLine, 
  FaCheckCircle 
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiGithub } from 'react-icons/si';

const Dashboard = () => {
  return (
    <div className="font-mono text-slate-700 bg-[#f8fafc] min-h-screen relative">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
               CODE<span className="text-indigo-600 underline">QUEST</span>
            </Link>
            <div className="hidden lg:flex gap-6 text-[10px] font-black uppercase text-slate-400">
               <a href="#" className="hover:text-indigo-600 transition-colors">Practice</a>
               <a href="#" className="hover:text-indigo-600 transition-colors">Articles</a>
               <a href="#" className="hover:text-indigo-600 transition-colors">Contests</a>
               <a href="#" className="hover:text-indigo-600 transition-colors">Library</a>
            </div>
          </div>
          <div className="flex gap-4">
             {/* Updated to use actual Routes */}
             <Link 
                to="/login" 
                className="text-[10px] font-black uppercase px-4 py-2 border-2 border-transparent hover:border-slate-900 transition-all"
             >
                Login
             </Link>
             <Link 
                to="/signup" 
                className="text-[10px] font-black uppercase bg-slate-900 text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] hover:shadow-none transition-all"
             >
                Join_Quest
             </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8 p-8">
        
        {/* LEFT COLUMN: PROFILE & CORE SUBJECTS */}
        <aside className="col-span-12 lg:col-span-3 space-y-8">
          <div className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center font-black rounded-sm border border-indigo-200">JD</div>
               <div>
                 <h3 className="font-black text-slate-900 text-sm">John_Doe</h3>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Specialist / 1420</p>
               </div>
             </div>
             <div className="space-y-4">
               <ProgressItem label="Operating_Systems" progress={72} color="bg-blue-500" />
               <ProgressItem label="DBMS_SQL" progress={45} color="bg-indigo-500" />
               <ProgressItem label="Networking" progress={30} color="bg-slate-500" />
             </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FaDatabase size={10}/> Master_Core_Subjects
            </h4>
            <SubjectLink icon={<FaMicrochip />} title="Computer Architecture" count="12 Modules" />
            <SubjectLink icon={<FaDatabase />} title="Database Systems" count="08 Modules" />
            <SubjectLink icon={<FaNetworkWired />} title="Computer Networks" count="15 Modules" />
            <SubjectLink icon={<FaServer />} title="Operating Systems" count="10 Modules" />
            <SubjectLink icon={<FaCodeBranch />} title="System Design" count="24 Modules" />
          </div>
        </aside>

        {/* MIDDLE COLUMN: DAILY TASKS & ARTICLES */}
        <main className="col-span-12 lg:col-span-6 space-y-8">
          <div className="bg-indigo-600 text-white p-6 rounded-sm flex justify-between items-center shadow-lg shadow-indigo-200">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Consistency_Engine</p>
              <h2 className="text-2xl font-black flex items-center gap-2">
                <FaFire className="text-orange-400" /> 18_DAY_STREAK
              </h2>
            </div>
            <div className="flex gap-2">
                {[1,1,1,1,1,1,0].map((s, i) => (
                    <div key={i} className={`w-2 h-8 rounded-full ${s ? 'bg-white' : 'bg-white/20'}`} />
                ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2">
              <h3 className="text-lg font-black uppercase tracking-tighter">Recent_Articles</h3>
              <span className="text-[10px] font-bold text-indigo-600 cursor-pointer hover:underline">/ See_All_Knowledge</span>
            </div>

            <ArticleCard 
              category="SYSTEM_DESIGN" 
              title="Implementing Distributed Locking with Redis"
              snippet="Understanding how to handle race conditions in high-availability distributed systems using Redlock logic..."
              author="admin_alpha"
              readTime="8 min"
            />
            
            

            <ArticleCard 
              category="CORE_SUBJECTS" 
              title="Deep Dive: The Linux Kernel Scheduler"
              snippet="An analysis of the Completely Fair Scheduler (CFS) and its impact on process priority and latency..."
              author="kernel_wiz"
              readTime="12 min"
            />
          </div>
        </main>

        {/* RIGHT COLUMN: PROGRESS & TASKS */}
        <aside className="col-span-12 lg:col-span-3 space-y-8">
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
            <h4 className="text-[10px] font-black uppercase text-slate-400 mb-6 flex items-center gap-2 tracking-widest">
              <FaChartLine /> Progress_Tracker
            </h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase">Solved_Daily</span>
                <span className="text-sm font-black text-slate-900">12 / 20</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: '60%' }} />
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(21)].map((_, i) => (
                  <div key={i} className={`h-4 rounded-sm ${i > 15 ? 'bg-slate-100' : 'bg-indigo-500'}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-100 p-6 rounded-sm shadow-xl">
            <h4 className="text-[10px] font-black uppercase text-indigo-400 mb-4 tracking-[0.2em]">Queue_Tasks</h4>
            <div className="space-y-4">
              <TaskItem icon={<FaCheckCircle className="text-emerald-500" />} text="TCP/IP Handshake" completed />
              <TaskItem icon={<div className="w-3 h-3 border-2 border-slate-700 rounded-full" />} text="Master B-Trees" />
              <TaskItem icon={<div className="w-3 h-3 border-2 border-slate-700 rounded-full" />} text="Shard Database Logic" />
            </div>
          </div>

          <div className="flex justify-between px-4 text-slate-300">
             <SiCodeforces size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
             <SiLeetcode size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
             <SiGithub size={18} className="hover:text-black cursor-pointer transition-colors" />
          </div>
        </aside>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const SubjectLink = ({ icon, title, count }) => (
  <div className="flex items-center justify-between p-3 border border-transparent hover:border-slate-200 hover:bg-white transition-all cursor-pointer group rounded-sm">
    <div className="flex items-center gap-3">
      <span className="text-slate-400 group-hover:text-indigo-600 transition-colors">{icon}</span>
      <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{title}</span>
    </div>
    <span className="text-[9px] font-black text-slate-300">{count}</span>
  </div>
);

const ArticleCard = ({ category, title, snippet, author, readTime }) => (
  <div className="bg-white border border-slate-200 p-6 hover:border-indigo-500 transition-all group cursor-pointer relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-slate-100 group-hover:bg-indigo-500 transition-colors" />
    <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-widest">{category}</span>
    <h4 className="text-xl font-black text-slate-900 mt-3 mb-2 leading-tight group-hover:underline">{title}</h4>
    <p className="text-sm text-slate-500 font-sans line-clamp-2 mb-4 leading-relaxed">{snippet}</p>
    <div className="flex justify-between items-center border-t border-slate-50 pt-4 text-[10px] font-black uppercase text-slate-400">
       <span className="hover:text-black transition-colors">@{author}</span>
       <span>{readTime} Read</span>
    </div>
  </div>
);

const ProgressItem = ({ label, progress, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[9px] font-black uppercase text-slate-500">
      <span>{label}</span>
      <span>{progress}%</span>
    </div>
    <div className="w-full h-1.5 bg-slate-100 rounded-full">
      <div className={`h-full ${color} transition-all duration-700 rounded-full`} style={{ width: `${progress}%` }} />
    </div>
  </div>
);

const TaskItem = ({ icon, text, completed = false }) => (
    <div className="flex items-center gap-3">
        {icon}
        <span className={`text-xs font-bold ${completed ? 'text-slate-400 line-through' : 'text-slate-200'}`}>{text}</span>
    </div>
);

export default Dashboard;