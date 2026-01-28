import { FaFacebookF, FaTwitter, FaPinterestP, FaQuoteLeft } from "react-icons/fa";
import ScrollReveal from "../layout/ScrollReveal";

export default function BlogContent() {
  return (
    <article className="prose max-w-none hover:prose-a:text-black prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-xs prose-p:leading-7 prose-p:text-gray-500 prose-li:text-xs prose-li:text-gray-500">
      <ScrollReveal delay={0.1}>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-4">
          Lifestyle / Fashion
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-[13px] leading-relaxed text-gray-500 mb-6 text-justify">
          Structured gripped tape invisible moulded cups for sauppor firm hold
          strong powermesh front liner sport detail. Warmth comfort hangs loosely
          from the body large pocket at the front full button detail cotton blend
          cute functional. Bodycon skirts bright primary colours punchy palette
          pleated cheerleader vibe stripe trims. Staple court shoe chunky mid
          block heel almond toe flexible rubber sole simple chic ideal handmade
          metallic detail. Contemporary pure silk pocket square sophistication
          luxurious coral print pocket pattern On trend inspired shades.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-[13px] leading-relaxed text-gray-500 mb-10 text-justify">
          Striking pewter studded epaulettes silver zips inner drawstring waist
          channel urban edge single-breasted jacket. Engraved attention to detail
          elegant with neutral colours cheme quartz leather strap fastens with a
          pin a buckle clasp. Workwear bow detailing a slingback buckle strap
          stiletto heel timeless go-to shoe sophistication slipper shoe. Flats
          elegant pointed toe design cut-out sides luxe leather lining versatile
          shoe must-have new season glamorous.
        </p>
      </ScrollReveal>

      {/* BIG BOLD QUOTE */}
      <ScrollReveal>
        <div className="my-14 relative pl-12 pr-4">
          <FaQuoteLeft className="text-5xl text-gray-300 absolute -top-2 left-0 z-0 opacity-100" />
          <h2 className="relative z-10 text-[26px] font-bold uppercase leading-[1.3] text-[#1a1a1a] tracking-wide font-sans">
            Knicker Lining Concealed Back Zip Fasten Swing Style High Waisted
            Double Layer Full Pattern Floral.
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-[13px] leading-relaxed text-gray-500 mb-6 text-justify">
          Foam padding in the insoles leather finest quality staple flat slip-on
          design pointed toe off-duty shoe. Black knicker lining concealed back
          zip fasten swing style high waisted double layer full pattern floral.
          Polished finish elegant court shoe work duty stretchy slingback strap
          mid kitten heel this ladylike design
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-[13px] leading-relaxed text-gray-500 mb-16 text-justify">
          Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium
          metus nullam quam aenean sociis quis sem neque vici libero. Veneratis
          nullam fringilla pretium magnis aliquam nunc vulputate integer augue
          ultricies cras. Eget viverra feugiat cras ut. Sit natoauqe montes
          tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo
          condimentum aenean.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-[#1a1a1a]">
          Eu Ridiculus Fringilla Aenean
        </h3>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-[13px] leading-relaxed text-gray-500 mb-6 text-justify">
          Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque
          vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus
          mus ac ante viverra. A aenean sit augue curabitur et parturient nisl sed
          enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget
          venenatis dui ante luctus ultricies tellus montes. Quis in sapien
          tempus.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <ul className="list-disc pl-5 space-y-2 mt-6 mb-8 marker:text-gray-400 text-gray-500">
          <li className="pl-2">Crisp fresh iconic elegant timeless clean perfume</li>
          <li className="pl-2">Neck straight sharp silhouette and dart detail</li>
          <li className="pl-2">
            Machine wash cold slim fit premium stretch selvedge denim comfortable low waist
          </li>
        </ul>
      </ScrollReveal>

      <ScrollReveal>
        <p className="mb-12">
          See-through delicate embroidered organza blue lining luxury acetate-mix
          stretch pleat detailing. Leather detail shoulder contrastic colour
          contour stunning silhouette working peplum. Statement buttons cover-up
          tweaks patch pockets perennial lapel collar flap chest pockets topline
          stitching cropped jacket. Effortless comfortable full leather lining
          eye-catching unique detail to the toe low 'cut-away' sides clean and
          sleek. Polished finish elegant court shoe work duty stretchy slingback
          strap mid kitten heel this ladylike design.
        </p>
      </ScrollReveal>

      {/* SHARE ROW */}
      <ScrollReveal>
        <div className="flex items-stretch mt-16 pt-0">
          {/* Total Shares */}
          <div className="flex-1 flex items-center border-b-2 border-gray-200 pb-4">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest italic font-serif">
              694 Shares
            </span>
          </div>

          {/* Share FB */}
          <button className="flex-1 flex items-center justify-center gap-2 border-b-2 border-[#3b5998] pb-4 text-[#3b5998] hover:bg-gray-50 transition">
            <FaFacebookF size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Share <span className="ml-1 opacity-70">694</span>
            </span>
          </button>

          {/* Tweet */}
          <button className="flex-1 flex items-center justify-center gap-2 border-b-2 border-[#1DA1F2] pb-4 text-[#1DA1F2] hover:bg-gray-50 transition">
            <FaTwitter size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Tweet
            </span>
          </button>

          {/* Share Pinterest */}
          <button className="flex-1 flex items-center justify-center gap-2 border-b-2 border-[#bd081c] pb-4 text-[#bd081c] hover:bg-gray-50 transition">
            <FaPinterestP size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              694
            </span>
          </button>
        </div>
      </ScrollReveal>

      {/* View Comments Button */}
      <ScrollReveal>
        <div className="mt-8 mb-16">
          <button className="w-full bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-4 hover:bg-black transition">
            View Comments (0)
          </button>
        </div>
      </ScrollReveal>

      {/* Inline Newsletter */}
      <ScrollReveal>
        <div className="mt-12 mb-12">
          <h4 className="text-xl font-bold uppercase tracking-wide text-gray-900 mb-2">
            Sign up for our newsletters
          </h4>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-6">
            Get notified of the best deals on our WordPress themes.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_160px] gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-200 px-4 py-3 text-xs outline-none focus:border-black placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 px-4 py-3 text-xs outline-none focus:border-black placeholder:text-gray-400"
            />
            <button className="bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition px-6">
              Subscribe
            </button>
          </form>
          <label className="flex gap-3 items-start mt-4 cursor-pointer group">
            <input type="checkbox" className="mt-1 accent-black" />
            <span className="text-[10px] text-gray-400 leading-relaxed max-w-2xl">
              By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
            </span>
          </label>
        </div>
      </ScrollReveal>
    </article>
  );
}
