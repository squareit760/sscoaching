import React from "react";
import { Phone, Mail, Clock, Users, BookOpen } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='white' stroke-width='2' fill='none' /%3E%3C/svg%3E")`,
            backgroundRepeat: "space",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Academic Journey?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Join hundreds of successful students who have achieved their
          educational goals with SS Coaching.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="#contact"
            className="group bg-yellow-400 text-blue-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 flex items-center"
          >
            <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Call Now: +91 123-456-7890
          </a>
          <a
            href="#contact"
            className="bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </a>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <Clock className="w-12 h-12 text-yellow-400 mb-3 mx-auto" />
            <h4 className="font-semibold text-lg mb-1">Admissions Open</h4>
            <p className="text-sm text-gray-200">2025-26 session</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <Users className="w-12 h-12 text-yellow-400 mb-3 mx-auto" />
            <h4 className="font-semibold text-lg mb-1">Free Demo Classes</h4>
            <p className="text-sm text-gray-200">Experience our teaching</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <BookOpen className="w-12 h-12 text-yellow-400 mb-3 mx-auto" />
            <h4 className="font-semibold text-lg mb-1">Study Material</h4>
            <p className="text-sm text-gray-200">Comprehensive notes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
