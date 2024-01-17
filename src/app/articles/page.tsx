import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";


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
               <section className="site-margin-bottom" id="2024">
                   <h2 className="article-taxonomy-year antialiased font-bold text-md mb-4 text-gray-400">
                       2024
                   </h2>
                   <div className="articles grid grid-cols-1 mb-8">
                       <div className="article-item">
                           <article className="article-archive-item flex flex-col mb-1">
                               <Link href="/"
                                     className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1">
                                   Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                               </Link>
                               <div className="flex flex-col gap-1">
                                   <div className="flex flex-row gap-1">
                                       <FontAwesomeIcon className="size-3" icon={faClock}/>
                                       <span className="flex flex-row gap-1">
                                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                       </span>
                                   </div>
                                   <p className="antialiased font-extralight text-xs">
                                       Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                       gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                       aldım.
                                   </p>
                               </div>
                           </article>
                       </div>
                   </div>
                   <div className="articles grid grid-cols-1 mb-8">
                       <div className="article-item">
                           <article className="article-archive-item flex flex-col mb-1">
                               <Link href="/"
                                     className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1">
                                   Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                               </Link>
                               <div className="flex flex-col gap-1">
                                   <div className="flex flex-row gap-1">
                                       <FontAwesomeIcon className="size-3" icon={faClock}/>
                                       <span className="flex flex-row gap-1">
                                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                       </span>
                                   </div>
                                   <p className="antialiased font-extralight text-xs">
                                       Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                       gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                       aldım.
                                   </p>
                               </div>
                           </article>
                       </div>
                   </div>
                   <div className="articles grid grid-cols-1 mb-8">
                       <div className="article-item">
                           <article className="article-archive-item flex flex-col mb-1">
                               <Link href="/"
                                     className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1">
                                   Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                               </Link>
                               <div className="flex flex-col gap-1">
                                   <div className="flex flex-row gap-1">
                                       <FontAwesomeIcon className="size-3" icon={faClock}/>
                                       <span className="flex flex-row gap-1">
                                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                       </span>
                                   </div>
                                   <p className="antialiased font-extralight text-xs">
                                       Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                       gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                       aldım.
                                   </p>
                               </div>
                           </article>
                       </div>
                   </div>
               </section>
               <section className="site-margin-bottom" id="2023">
                   <h2 className="article-taxonomy-year antialiased font-bold text-md mb-4 text-gray-400">
                       2023
                   </h2>
                   <div className="articles grid grid-cols-1 mb-8">
                       <div className="article-item">
                           <article className="article-archive-item flex flex-col mb-1">
                               <Link href="/"
                                     className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1">
                                   Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                               </Link>
                               <div className="flex flex-col gap-1">
                                   <div className="flex flex-row gap-1">
                                       <FontAwesomeIcon className="size-3" icon={faClock}/>
                                       <span className="flex flex-row gap-1">
                                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                       </span>
                                   </div>
                                   <p className="antialiased font-extralight text-xs">
                                       Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                       gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                       aldım.
                                   </p>
                               </div>
                           </article>
                       </div>
                   </div>
                   <div className="articles grid grid-cols-1 mb-8">
                       <div className="article-item">
                           <article className="article-archive-item flex flex-col mb-1">
                               <Link href="/"
                                     className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1">
                                   Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                               </Link>
                               <div className="flex flex-col gap-1">
                                   <div className="flex flex-row gap-1">
                                       <FontAwesomeIcon className="size-3" icon={faClock}/>
                                       <span className="flex flex-row gap-1">
                                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                       </span>
                                   </div>
                                   <p className="antialiased font-extralight text-xs">
                                       Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                       gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                       aldım.
                                   </p>
                               </div>
                           </article>
                       </div>
                   </div>
                   <div className="articles grid grid-cols-1 mb-8">
                       <div className="article-item">
                           <article className="article-archive-item flex flex-col mb-1">
                               <Link href="/"
                                     className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1">
                                   Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                               </Link>
                               <div className="flex flex-col gap-1">
                                   <div className="flex flex-row gap-1">
                                       <FontAwesomeIcon className="size-3" icon={faClock}/>
                                       <span className="flex flex-row gap-1">
                                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                       </span>
                                   </div>
                                   <p className="antialiased font-extralight text-xs">
                                       Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                       gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                       aldım.
                                   </p>
                               </div>
                           </article>
                       </div>
                   </div>
               </section>
           </div>
       </>
   )
};

export default BlogPage;