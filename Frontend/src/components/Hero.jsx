import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 px-6 py-12 md:px-20 bg-gray-950 text-white">

            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />

            <div className=" absolute top-40 -right-32 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')]" />


            <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
            >
                <motion.p
                    className="text-blue-400 font-medium mb-4 tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}>
                    AI-Powered Lead Generation
                </motion.p>

                <motion.h1
                    className="text-4xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Turn Visitors Into Qualified Leads Using AI
                </motion.h1>

                <motion.p
                    className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 md:mx-0 mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Empowering your business with AI-driven conversion strategies and high-performance web solutions that convert traffic into real customers.
                </motion.p>

                <motion.button
                    className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors text-white font-semibold relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}

                >
                    Book Consultation
                </motion.button>

                <div className="mt-10 flex gap-8 items-center flex-wrap">
                    <span className="text-sm text-slate-400">Trusted by teams at</span>
                    <img src="/google.svg" alt="Google" className="h-6 opacity-80 hover:opacity-100 transition " />
                    <img src="/stripe.svg" alt="Stripe" className="h-6 opacity-80 hover:opacity-100 transition" />
                </div>



            </motion.div>



            <motion.div
                className="flex w-full md:w-1/2 justify-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 1,
                    y: {
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                    }

                }}
            >
                <div className="p-2 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                        alt="AI Lead Generation"
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-xl shadow-2xl object-cover"
                    />
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-slate-900" />

        </section>
    )
}

export default Hero;
