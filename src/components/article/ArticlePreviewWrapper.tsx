import {Box, Grid, Heading} from "@radix-ui/themes";
import {ArticlePreviewTitle} from "@/components/article/ArticlePreviewTitle";
import {ArticlePreviewBody} from "@/components/article/ArticlePreviewBody";
import useFetch from "@/hook/useFetch";
import {getAllGroupedAndDecreasedByYear} from "@/service/articleService";
import {useEffect} from "react";
import {setArticles} from "@/lib/features/articles/articleSlice";
import ArticleYearGroup from "@/service/model/ArticleYearGroup";
import {Article} from "@/service/model/article";
import {number} from "prop-types";

export const ArticlePreviewWrapper = () => {
    const [loading, data] = useFetch(getAllGroupedAndDecreasedByYear, {});

    useEffect(() => {
        if (data){
            debugger
            setArticles(data as ArticleYearGroup<Article>);
            debugger
        }
    }, [data])

    const renderArticles = () => {
        debugger
        return (
            <>
                {(!loading) ? (
                    Object.entries(data as ArticleYearGroup<Article>).map(([year, articles]) => (
                        <section id={year} key={year}>
                            <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato" mb="6">
                                {year}
                            </Heading>
                            <Grid className="articles site-margin-bottom" gap="2" columns="1">
                                {articles.map((article, index) => (
                                    <Box className="article-item">
                                        <article className="article-archive-item flex flex-col mb-1">
                                            <ArticlePreviewTitle title={article.title}/>
                                            <ArticlePreviewBody
                                                content={article.description}
                                                readingTime={article.readTimeInMinute}
                                            />
                                        </article>
                                    </Box>
                                ))}
                            </Grid>
                        </section>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </>
        )
    };

    /*
    <section className="" id={() ? year.toString() : '#'}>
                    <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato" mb="6">
                        2023
                    </Heading>
                    <Grid className="articles site-margin-bottom" gap="2" columns="1">
                        <Box className="article-item">
                            <article className="article-archive-item flex flex-col mb-1">
                                <ArticlePreviewTitle title={title}/>
                                <ArticlePreviewBody
                                    content={content}
                                    readingTime={readingTime}
                                />
                            </article>
                        </Box>
                    </Grid>
                </section>
     */

    const listArticles = () => {
        return(
            <>
                {renderArticles()}
            </>
        )
    };

    return(
        <>
            {listArticles()}
        </>
    )
};