import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Briefcase, MessageSquare, Loader2, CreditCard, ChevronDown, Check, Zap, Shield } from "lucide-react";
import { toast, Toaster } from "sonner";

const Pricing = ({ onSelectPlan }) => {
    const pricingPlans = [
        {
            name: "Starter",
            price: "499",
            description: "Essential AI tools for early-stage ventures.",
            features: ["Custom Landing Page", "Basic AI Chatbot", "Lead Notifications", "3-Day Email Support"],
            theme: "emerald"
        },
        {
            name: "Professional",
            price: "999",
            description: "Scalable automation for growing organizations.",
            features: ["Premium UI/UX Design", "Advanced AI Workflows", "CRM Integration", "7-Day Priority Support", "Priority Delivery"],
            highlight: true,
            theme: "indigo"
        },
        {
            name: "Enterprise",
            price: "1,999",
            description: "Custom-built AI ecosystem for total dominance.",
            features: ["Custom AI Training", "Multi-page Architecture", "Unlimited Revisions", "24/7 Dedicated Manager", "Full Source Code Access"],
            theme: "purple"
        },
    ];

    return (
        <div className="py-24 relative overflow-hidden bg-[#0a0f1d]">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6 inline-block"
                    >
                        Pricing Models
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                        Scale at <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-emerald-400 to-teal-400">Your Speed</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
                        Transparent investment tiers designed for maximum ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {plan.highlight && (
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-[2.5rem] blur-sm opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                            )}

                            <div className={`relative h-full flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[2.4rem] border ${plan.highlight ? 'border-transparent' : 'border-white/10'} p-8 transition-all duration-500 hover:translate-y-[-8px]`}>

                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className={`text-sm font-black uppercase tracking-widest ${plan.highlight ? 'text-indigo-400' : 'text-slate-400'}`}>
                                            {plan.name}
                                        </h3>
                                        {plan.highlight ? <Zap className="w-5 h-5 text-indigo-400" /> : <Shield className="w-5 h-5 text-slate-600" />}
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-6xl font-black text-white tracking-tighter">${plan.price}</span>
                                        <span className="text-slate-500 font-bold">/one-off</span>
                                    </div>
                                    <p className="mt-4 text-slate-400 text-sm font-medium leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    <div className="w-full h-[1px] bg-white/5 mb-6" />
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-slate-300 text-[13px]">
                                            <div className="mt-1 p-[2px] rounded-full bg-emerald-500/20">
                                                <Check className="w-3 h-3 text-emerald-500 stroke-[4px]" />
                                            </div>
                                            <span className="font-medium group-hover:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => onSelectPlan(plan.name)}
                                    className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] transition-all relative overflow-hidden group/btn ${plan.highlight
                                        ? "bg-white text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                        }`}
                                >
                                    <span className="relative z-10">Select {plan.name}</span>
                                    {plan.highlight && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- MAIN LEAD FORM SECTION ---
const LeadForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", businessType: "", plan: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handlePlanAutoSelect = (planName) => {
        setFormData(prev => ({ ...prev, plan: planName }));
        document.getElementById('lead-form-section').scrollIntoView({ behavior: 'smooth' });

        toast.success(`${planName} Plan Selected!`, {
            description: "Please complete the form below.",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", email: "", businessType: "", plan: "", message: "" });
            toast.success("Strategy Call Scheduled!", {
                description: "Check your email for confirmation."
            });
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyles = "w-full pl-12 pr-10 py-4 bg-slate-900/60 text-white rounded-2xl border border-white/5 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all appearance-none placeholder:text-slate-600";

    return (
        <section className="bg-[#0f172a] min-h-screen pb-20" id="contact">
            <Toaster position="top-center" richColors theme="dark" />

            <Pricing onSelectPlan={handlePlanAutoSelect} />

            <div className="py-24 relative" id="lead-form-section">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 backdrop-blur-3xl p-8 md:p-16 rounded-[3.5rem] border border-white/10 shadow-3xl"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Secure Your <span className="text-indigo-400">Roadmap</span></h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3 block ml-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                        <input required name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className={inputStyles} />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3 block ml-2">Work Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputStyles} />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3 block ml-2">Industry</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                        <select required name="businessType" value={formData.businessType} onChange={handleChange} className={inputStyles}>
                                            <option value="" disabled>Select Industry</option>
                                            <option value="ecommerce" className="bg-[#0f172a]">E-commerce</option>
                                            <option value="saas" className="bg-[#0f172a]">SaaS / Tech</option>
                                            <option value="agency" className="bg-[#0f172a]">Agency</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3 block ml-2">Selected Plan</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                        <select
                                            required
                                            name="plan"
                                            value={formData.plan}
                                            onChange={handleChange}
                                            className={inputStyles}
                                        >
                                            <option value="" disabled>Choose a plan</option>
                                            <option value="Starter" className="bg-[#0f172a]">Starter - $499</option>
                                            <option value="Professional" className="bg-[#0f172a]">Professional - $999</option>
                                            <option value="Enterprise" className="bg-[#0f172a]">Enterprise - $1,999</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3 block ml-2">Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-5 text-slate-500 w-5 h-5" />
                                    <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project..." className="w-full pl-12 pr-4 py-4 bg-slate-900/60 text-white rounded-2xl border border-white/5 focus:border-indigo-500/50 outline-none transition-all resize-none" />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === "loading"}
                                className="w-full py-6 rounded-2xl font-black text-lg uppercase tracking-widest bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 disabled:opacity-50"
                            >
                                {status === "loading" ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "Initialize Strategy Call"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;