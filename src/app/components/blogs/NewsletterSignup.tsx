"use client";

export default function NewsletterSignup() {
  return (
    <section className="border-t border-b border-gray-100 py-16 mt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-3">
          Sign up for our newsletters
        </h3>
        <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
          Get notified of the best deals on our WordPress themes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 border border-gray-300 px-4 py-3 text-xs outline-none focus:border-black transition"
          />
          <button className="w-full sm:w-auto bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

        <label className="flex items-center justify-center gap-2 text-[10px] text-gray-400 mt-4 cursor-pointer">
          <input type="checkbox" className="mt-0.5" />
          By checking this box, you confirm that you have read and are agreeing to our terms.
        </label>
      </div>
    </section>
  );
}
