import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Briefcase, MessageSquare, Loader2, Sparkles } from "lucide-react";
import { toast, Toaster } from "sonner";

const LeadForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", businessType: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", email: "", businessType: "", message: "" });

            toast.success("Strategy Call Requested!", {
                description: "Our AI expert will contact you within 24 hours.",
                duration: 5000,
            });
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden" id="contact">
            {/* 3. Add Toaster Component */}
            <Toaster position="top-center" richColors />

            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/10"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase mb-6">
                            <Sparkles className="w-4 h-4" /> Secure Your Growth Roadmap
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-poppins">
                            Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Visitors into Clients</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
                            Stop losing potential leads. Fill out the form below to get your
                            <span className="text-indigo-400 font-medium"> Custom AI Growth Roadmap </span>
                            and start scaling today.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors w-5 h-5" />
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Your Full Name"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-900/40 text-white rounded-2xl border border-white/5 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 ml-1">Business Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors w-5 h-5" />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-900/40 text-white rounded-2xl border border-white/5 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 ml-1">Business Sector</label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors w-5 h-5" />
                                <select
                                    required
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 bg-[#0f172a] text-white rounded-2xl border border-white/5 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled >Select your industry</option>
                                    <option value="ecommerce" className="bg-[#0f172a]">E-commerce</option>
                                    <option value="saas" className="bg-[#0f172a]">SaaS / Tech</option>
                                    <option value="agency" className="bg-[#0f172a]">Real Estate / Agency</option>
                                    <option value="other" className="bg-[#0f172a]">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 ml-1">Message</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors w-5 h-5" />
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="How can we help you grow?"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-900/40 text-white rounded-2xl border border-white/5 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status === "loading"}
                            type="submit"
                            className="w-full py-5 rounded-2xl font-black text-lg uppercase tracking-tight shadow-2xl transition-all flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    <span>Sending Request...</span>
                                </>
                            ) : (
                                "Get Free Strategy Call"
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadForm;