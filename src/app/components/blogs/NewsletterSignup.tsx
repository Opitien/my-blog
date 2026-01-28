"use client";

export default function NewsletterSignup() {
  return (
    <section className="border-t border-b border-gray-100 py-12 mt-16 mb-16">
      <div className="w-full">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 text-black text-left">
          Sign up for our newsletters
        </h3>
        <p className="text-sm md:text-base text-gray-400 mb-6 font-medium text-left">
          GET NOTIFIED OF THE BEST DEALS ON OUR WORDPRESS THEMES.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-stretch mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 bg-white border border-gray-100 px-4 py-3 text-sm text-gray-600 outline-none focus:border-gray-300 transition placeholder:text-gray-400 font-light"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border border-gray-100 px-4 py-3 text-sm text-gray-600 outline-none focus:border-gray-300 transition placeholder:text-gray-400 font-light"
          />
          <button className="bg-[#111] text-white px-10 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-black transition whitespace-nowrap">
            Subscribe
          </button>
        </div>

        <label className="flex items-start gap-3 mt-4 cursor-pointer group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="peer mt-0.5 h-4 w-4 appearance-none border border-gray-400 checked:bg-black checked:border-black transition-colors"
            />
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-400 leading-tight select-none">
            By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
          </span>
        </label>
      </div>
    </section>
  );
}
