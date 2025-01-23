import { motion } from "framer-motion";
import { FaLightbulb, FaUserFriends, FaHandshake } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#402c6d] via-[#67489b] to-[#9a74d8] text-white p-6">
      {/* Header */}
      <header className="text-center py-8">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 RGPV Startup Pitching Session
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Join us on <strong>30th January 2025</strong> at the <strong>RISE Building</strong> to pitch your innovative ideas!
        </motion.p>
      </header>

      {/* Icons Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {/* First Feature */}
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg text-center">
          <FaLightbulb className="text-4xl text-[#402c6d] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Innovative Ideas</h3>
          <p>
            Showcase your groundbreaking solutions to industry experts and investors.
          </p>
        </div>

        {/* Second Feature */}
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg text-center">
          <FaUserFriends className="text-4xl text-[#402c6d] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Mentorship</h3>
          <p>
            Gain invaluable feedback and guidance from seasoned mentors.
          </p>
        </div>

        {/* Third Feature */}
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg text-center">
          <FaHandshake className="text-4xl text-[#402c6d] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Funding Opportunities</h3>
          <p>
            Seize the chance to secure funding for your startup's growth.
          </p>
        </div>
      </motion.div>

      {/* Event Details Section */}
      <motion.section
        className="mt-12 max-w-5xl mx-auto p-8 bg-[#402c6d] rounded-lg shadow-lg text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
        <p className="text-lg leading-relaxed">
          Get ready to pitch your ideas based on key criteria such as:
        </p>
        <ul className="list-disc list-inside text-left mt-4 space-y-2">
          <li>Problem Statement</li>
          <li>Market Scope</li>
          <li>Value Proposition</li>
          <li>Solution Design</li>
          <li>Team Credentials</li>
          <li>Competitive Landscape</li>
          <li>Business Model</li>
          <li>Funding Requirements</li>
        </ul>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.a
          href="#"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#9a74d8] to-[#402c6d] text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Register Now
        </motion.a>
      </motion.div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          © 2025 RGPV Incubation Centre. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default App;
