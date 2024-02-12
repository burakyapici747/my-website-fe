import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {Box, Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";

const BlogPage = () => {
   return (
       <>
           <Container className="site-main-container site-margin-top site-margin-bottom" size="2">
               <Flex display="flex" direction="column" gap="8">
                    <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                       <li className="border-b border-[#525252]">
                           <Link href="#2023" className="flex flex-row justify-between">
                               <strong className="taxonomy-articles-year antialiased font-bold text-xs">2024</strong>
                               <Text as="span" className="taxonomy-articles-count antialiased" size="2" weight="regular">15</Text>
                           </Link>
                       </li>
                    </ul>
                   <section className="site-margin-bottom" id="2024">
                       <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato" mb="6">
                           2024
                       </Heading>
                       <Grid className="articles site-margin-bottom" gap="2" columns="1">
                           <Box className="article-item">
                               <article className="article-archive-item flex flex-col mb-1">
                                   <Link href=""
                                         className="article-title antialiased text-lg font-bold underline underline-offset-2 truncate text-white mb-1 hover:text-gray-300">
                                       Java Modül Sisteminin Durumu - Mark Reinhold (Ceviri)
                                   </Link>
                                   <Flex className="" display="flex" direction="column" gap="2">
                                       <Flex className="flex flex-row gap-1" display="flex" direction="row" gap="2" align="center">
                                           <FontAwesomeIcon className="size-3" icon={faClock}/>
                                           <Flex className="" display="flex" direction="row" gap="2">
                                                <small className="text-xxs font-light text-gray-300 antialiased">15 dakika okuma süresi</small>
                                           </Flex>
                                       </Flex>
                                       <Text as="p" size="2" className="antialiased font-extralight text-xs">
                                           Java’da Kurucu dışından final değişken initialize işlemleri nasıl
                                           gerçekleşir?Joshua Bloch Efektif Java Kitabındaki bir örnek üzerinde bu durumu el
                                           aldım.
                                       </Text>
                                   </Flex>
                               </article>
                           </Box>
                       </Grid>
                   </section>
               </Flex>
           </Container>
       </>
   )
};

export default BlogPage;