import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section className="pt-20 px-8" id="achievements">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center text-4xl font-semibold text-primary"
      >
        Achievements
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-stone-50/20 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">GitHub Stats</h3>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=rohit-cpp&theme=dark&background=00000000&border=ffffff33&stroke=ffaa00&ring=ffaa00&fire=ffaa00&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=ffaa00&sideLabels=ffffff&dates=888888&hide_border=true"
              alt="GitHub Streak"
              className="w-full"
            />
            <div className="mt-4">
              <p className="text-sm font-medium text-stone-300 mb-2">Contribution Graph</p>
              <div className="rounded-lg bg-black p-2">
                <img
                  src="https://ghchart.rshah.org/2ea043/rohit-cpp"
                  alt="GitHub Contribution Graph"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-stone-50/20 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">LeetCode Stats</h3>
            <img
              src="https://leetcard.jacoblin.cool/xOmTu32Lsy?theme=dark&font=Outfit&ext=heatmap&bg=00000000&animation=true"
              alt="LeetCode Stats"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
