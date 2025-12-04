import { motion } from "framer-motion";

export const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
            <div className="relative flex flex-col items-center">
                {/* Outer glowing ring */}
                <motion.div
                    className="w-24 h-24 rounded-full border-2 border-primary/20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Inner rotating ring */}
                <motion.div
                    className="absolute w-20 h-20 rounded-full border-t-2 border-primary"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                

                {/* Loading text */}
                <motion.p
                    className="mt-8 text-primary font-light tracking-[0.2em] text-sm uppercase"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    Loading
                </motion.p>
            </div>
        </div>
    );
};
