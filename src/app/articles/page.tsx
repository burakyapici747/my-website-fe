import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const BlogPage = () => {
   return (
       <>
           <div className="site-main-container site-margin-top site-margin-bottom">
               <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2024</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2023</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2022</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2021</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2020</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2019</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
                   <li className="border-b border-[#525252]">
                       <Link href="/" className="flex flex-row justify-between">
                           <strong className="taxonomy-articles-year antialiased font-bold text-xs">2018</strong>
                           <span className="taxonomy-articles-count antialiased font-light text-xs">15</span>
                       </Link>
                   </li>
               </ul>
               <section id="2024">
                   <div className="articles grid grid-cols-1">
                       <div className="article-item">
                           <article className="article-archive-item">
                               <h2 className="article-title antialiased text-sm font-extralight underline underline-offset-2 truncate">Java
                                   Modül Sisteminin Durumu - Mark Reinhold (ÇEVİRİ)</h2>
                           </article>
                       </div>
                        <p>
                            <span className="flex flex-row gap-1">
                                <small className="text-text-xsm font-extralight text-gray-300 antialiased">60 dakika okuma süresi</small>
                            </span>
                        </p>
                   </div>
               </section>
           </div>
       </>
   )
};

export default BlogPage;