import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

interface pageProps{
    params: {articleId: String}
}

const ArticleDetailPage: FC<pageProps> = ({params}) => {
    return(
        <>
            <div className="article-title w-full bg-white/[.08] site-margin-bottom pt-6 pb-6">
                <div className="site-navbar-container flex flex-col gap-3">
                    <h4 className="text-2xl text-white antialiased font-bold">Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)</h4>
                    <p className="text-sm antialiased font-extralight hyphens-auto leading-5 indent-4 text-gray-200">
                        Bu bölümde Java’da derleyici kurallarının 1. serisi olan bu videoda,
                        java’da sınıf deklerasyonu sırasında derleyicinin bizim için arka planda yaptıklarını anlatmaya çalıştım.
                    </p>
                    <div className="flex flex-row gap-2">
                        <FontAwesomeIcon className="size-3" icon={faClock}/>
                        <span className="flex flex-row gap-1">
                            <small className="text-xxs font-light text-gray-300 antialiased">15 dakika tahmini okuma süresi</small>
                        </span>
                    </div>
                </div>
            </div>
            <article className="article-content site-margin-bottom">
                <div className="">

                </div>
            </article>
        </>
    )
};

export default ArticleDetailPage;