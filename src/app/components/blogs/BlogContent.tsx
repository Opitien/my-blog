"use client";

import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function BlogContent() {
  return (
    <article className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">
        Lifestyle / Fashion
      </p>

      <h1 className="text-3xl md:text-3xl lg:text-4xl text-gray-900 mb-6 mt-2">
        Knicker Lining Concealed Back Zip Fasten Swing Style High Waisted Double
        Layer Full Pattern Floral.
      </h1>

      <p>
        Praesent vel mi bibendum, luctus magna id, semper felis. Curabitur maximus
        feugiat ante, non consequat ipsum discere sit amet. Maecenas scelerisque
        long ex, gravida pulvinar felis sollicitudin nec. Mauris ante nisi,
        dignissim eget velit ut, aliquam commodo est. Maecenas blandit accumsan
        felis.
      </p>

      <p>
        Nullam ipsum varius scelerisque, felis ipsum varius elit. Nunc vel
        suscipit ex. Curabitur pellentesque purus et est sollicitudin, blandit
        dapibus eros facilisis. Nunc agas quam leo, egestas eu auctor ac,
        sollicitudin vel ipsum.
      </p>

      <blockquote className="my-10 p-0 border-l-[3px] border-black pl-6 italic text-xl md:text-2xl font-serif text-gray-800 leading-normal">
        “Knicker lining concealed back zip fasten swing style high waisted double
        layer full pattern floral.”
      </blockquote>

      <p>
        Fusce scelerisque at velit quis tincidunt. Donec nibh turpis, pulvinar
        a pharetra eget, mattis vel elit. Sed nec scelerisque nisl. Suspendisse
        potenti.
      </p>

      <h3 className="text-xl md:text-2xl uppercase tracking-wide mt-10 mb-5">
        Eu Ridiculus Fringilla Aenean
      </h3>

      <p>
        Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
      </p>

      <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-black">
        <li>Crisp fresh iconic elegant timeless clean perfume</li>
        <li>Neck straight sharp silhouette and dart detail</li>
        <li>Machine wash cold slim fit premium stretch selvedge denim</li>
      </ul>

      <p className="mt-6">
        See-through delicate embroidered organza blue lining luxury acetate-mix
        stretch pleat detailing. Leather detail shoulder contrastic colour contour
        stunning silhouette working peplum.
      </p>

      {/* Share / Footer */}
      <div className="flex flex-wrap items-center justify-between mt-12 pt-8 border-t border-gray-100 text-xs text-gray-500 font-medium tracking-wide">
        <span>4.5K Shares</span>

        <div className="flex gap-4">
          {/* FB */}
          <button className="flex items-center gap-2 text-blue-800 hover:opacity-75">
            <FaFacebookF />
            <span>Share</span>
          </button>
          {/* TW */}
          <button className="flex items-center gap-2 text-sky-500 hover:opacity-75">
            <FaTwitter />
            <span>Tweet</span>
          </button>
          {/* PIN */}
          <button className="flex items-center gap-2 text-red-600 hover:opacity-75">
            <FaPinterestP />
            <span>Pin</span>
          </button>
        </div>
      </div>

      {/* View Comments Button */}
      <div className="mt-12">
        <button className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition">
          View Comments (0)
        </button>
      </div>
    </article>
  );
}
