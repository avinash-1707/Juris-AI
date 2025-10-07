import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileSearch,
  Shield,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingDown,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning algorithms analyze contracts in seconds, identifying key clauses and potential issues.",
    icon: FileSearch,
  },
  {
    title: "Risk Detection",
    description:
      "Automatically flag high-risk terms, unfavorable clauses, and compliance gaps before they become problems.",
    icon: Shield,
  },
  {
    title: "Instant Insights",
    description:
      "Get actionable recommendations and summaries instantly, reducing review time by up to 90%.",
    icon: Zap,
  },
  {
    title: "Cost Savings",
    description:
      "Cut legal review costs dramatically while maintaining accuracy and thoroughness.",
    icon: TrendingDown,
  },
  {
    title: "Time Efficiency",
    description:
      "Complete comprehensive contract reviews in minutes instead of days.",
    icon: Clock,
  },
  {
    title: "Compliance Assured",
    description:
      "Stay compliant with automated checks against current regulations and industry standards.",
    icon: CheckCircle2,
  },
];

const stats = [
  { value: "90%", label: "Faster Reviews" },
  { value: "99.8%", label: "Accuracy Rate" },
  { value: "50+", label: "Contracts Analyzed" },
];

export default function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto relative">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Revolutionize Your
            <br />
            <span className="relative inline-block mt-2">
              Contract Analysis
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-black/5 -z-10"
                style={{ originX: 0 }}
              />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Transform complex legal documents into clear insights with
            AI-powered analysis. Make better decisions faster.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/dashboard")}
            className="group px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            Start Analyzing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            View Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-24 pb-24 border-b border-black/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="mb-12" id="features">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
          >
            Comprehensive tools designed to streamline your contract workflow
            from analysis to execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                {/* Hover gradient effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 0.03 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-black to-transparent"
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-black text-white rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-300 max-w-xl">
              Join thousands of legal professionals who trust our platform for
              contract analysis.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/dashboard")}
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg flex items-center gap-2 group cursor-pointer"
            >
              Start Analyzing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
