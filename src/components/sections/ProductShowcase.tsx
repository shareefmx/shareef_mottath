
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Robot, Code, ArrowRight } from "@phosphor-icons/react";

const products = [
    {
        id: 1,
        name: "QueryDoc.AI",
        icon: Brain,
        link: "https://query-doc-ai.vercel.app/",
        color: "text-blue-400"
    },
    {
        id: 2,
        name: "VibeCoder",
        icon: Robot,
        link: "https://404-issue.vercel.app/",
        color: "text-purple-400"
    },
    {
        id: 3,
        name: "DevAssist",
        icon: Code,
        link: "https://404-issue.vercel.app/",
        color: "text-green-400"
    }
];

export const ProductShowcase = () => {
    return (
        <section className="py-20 px-4 bg-background/50">
            <div className="container mx-auto max-w-6xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-light tracking-tighter mb-16"
                >
                    Products
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {products.map((product, index) => {
                        const isExternal = product.link.startsWith("http");
                        const CardContent = (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 py-8">
                                    <div className="space-y-2 text-center">
                                        {product.name === "QueryDoc.AI" ? (
                                            <h3 className="text-4xl font-bold tracking-tight text-foreground group-hover:scale-105 transition-transform duration-300">
                                                QueryDoc<span className="text-primary">.AI</span>
                                            </h3>
                                        ) : (
                                            <h3 className="text-3xl font-medium tracking-tight text-foreground/80 group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                                                {product.name}
                                            </h3>
                                        )}
                                    </div>
                                </div>
                            </>
                        );

                        const cardClasses = "group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 relative overflow-hidden";

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full max-w-xs"
                            >
                                {isExternal ? (
                                    <a href={product.link} className={cardClasses} target="_blank" rel="noopener noreferrer">
                                        {CardContent}
                                    </a>
                                ) : (
                                    <Link to={product.link} className={cardClasses}>
                                        {CardContent}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
