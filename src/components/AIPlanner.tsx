import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

export default function AIPlanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  const generatePlan = async () => {
    if (!businessName || !industry || !goals) return;
    
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a detailed growth plan for a business named ${businessName} in the ${industry} industry. Their primary goals are: ${goals}. Provide specific strategies for branding, marketing, and digital scaling. Format the response with clear headings.`,
      });
      
      setPlan(response.text);
    } catch (error) {
      console.error("Error generating plan:", error);
      setPlan("Sorry, I couldn't generate your plan at this moment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-16 right-0 w-[400px] max-w-[90vw] bg-white rounded-[2rem] shadow-2xl border-4 border-brand-navy-violet/10 overflow-hidden flex flex-col max-h-[70vh]"
          >
            <div className="p-6 bg-gradient-to-r from-brand-navy-violet to-brand-purple text-white flex justify-between items-center shrink-0 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Sparkles className="h-6 w-6 text-brand-peach animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight">Growth Planner AI</h3>
                  <p className="text-[9px] text-brand-peach uppercase tracking-[0.15em] font-black">Elite Strategy</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-all">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {!plan && !loading && (
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm font-medium">Tell us about your business to get a custom scaling strategy.</p>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest block mb-1">Business Name</label>
                      <input 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Walt Designs"
                        className="w-full px-4 py-3 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-peach transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest block mb-1">Industry</label>
                      <input 
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        placeholder="e.g. Digital Marketing"
                        className="w-full px-4 py-3 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-peach transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest block mb-1">Your Growth Goals</label>
                      <textarea 
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        rows={3}
                        placeholder="e.g. Expand to international markets, increase conversion rate by 20%"
                        className="w-full px-4 py-3 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-peach transition-all resize-none"
                      />
                    </div>
                    <button 
                      onClick={generatePlan}
                      disabled={!businessName || !industry || !goals}
                      className="w-full py-4 bg-brand-navy-violet text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-purple transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Generate My Plan</span>
                    </button>
                  </div>
                </div>
              )}

              {loading && (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="h-10 w-10 text-brand-peach" />
                  </motion.div>
                  <div className="flex space-x-1 justify-center">
                    <span className="w-2 h-2 bg-brand-navy-violet rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-2 h-2 bg-brand-navy-violet rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-brand-navy-violet rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                  <p className="text-brand-navy-violet font-bold animate-pulse uppercase tracking-widest text-xs">Analyzing Market Data...</p>
                </div>
              )}

              {plan && (
                <div className="space-y-6">
                  <div className="prose prose-sm text-gray-700 max-w-none whitespace-pre-wrap font-medium leading-relaxed">
                    {plan}
                  </div>
                  <button 
                    onClick={() => { setPlan(null); setBusinessName(''); setIndustry(''); setGoals(''); }}
                    className="w-full py-3 border-2 border-brand-navy-violet/20 text-brand-navy-violet rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-navy-violet hover:text-white transition-all"
                  >
                    Start New Plan
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-brand-navy-violet to-brand-purple text-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(48,0,48,0.3)] flex items-center justify-center relative group border-2 border-white/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-peach/20 via-transparent to-white/10 opacity-50" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-peach opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-peach"></span>
        </span>
        
        {isOpen ? (
          <X className="h-7 w-7 text-brand-peach relative z-10" />
        ) : (
          <div className="relative z-10">
            <Sparkles className="h-7 w-7 text-brand-peach drop-shadow-[0_0_8px_rgba(255,180,120,0.5)]" />
          </div>
        )}
        
        {/* Tooltip */}
        <div className="absolute right-20 bg-brand-navy-violet text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
          AI Growth Planner
        </div>
      </motion.button>
</div>
  );
}
