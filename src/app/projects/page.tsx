import {M_PLUS_Rounded_1c} from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const mPlusRounded = M_PLUS_Rounded_1c({
    subsets: ['cyrillic'],
    weight: ['700'],
});

const ProjectsPage = () => {
    return(
        <>
            <div className="site-main-container site-margin-bottom">
                <h1 className={`text-2xl mb-2 ${mPlusRounded}`}>Projects</h1>
                <div className="grid grid-cols-2 overflow-y-auto gap-8">
                    <div className="">
                        <div className="flex flex-col gap-1">
                            <Image src="/img/project.webp" alt="" width="1280" height="720" className="rounded-xl"/>
                            <Link href="" className="project-detail flex flex-col">
                                <h6 className="project-title text-md font-bold underline underline-offset-4 cursor-pointer">Game
                                    of life</h6>
                                <p className="antialiased font-extralight text-sm truncate">
                                    Selamlar millet bu benim projem ben proeje yapmayı çok severim çünkü bu beni
                                    geliştirir
                                </p>
                                <div className="flex flex-row items-center gap-1">
                                    <span
                                        className="programming-language-color rounded-full size-2.5 bg-amber-100"></span>
                                    <span
                                        className="programming-language-name antialiased font-extralight text-xs">Java</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-1">
                            <Image src="/img/project.webp" alt="" width="1280" height="720" className="rounded-xl"/>
                            <Link href="" className="project-detail flex flex-col">
                                <h6 className="project-title text-md font-bold underline underline-offset-4 cursor-pointer">Game
                                    of life</h6>
                                <p className="antialiased font-extralight text-sm truncate">
                                    Selamlar millet bu benim projem ben proeje yapmayı çok severim çünkü bu beni
                                    geliştirir
                                </p>
                                <div className="flex flex-row items-center gap-1">
                                    <span
                                        className="programming-language-color rounded-full size-2.5 bg-amber-100"></span>
                                    <span
                                        className="programming-language-name antialiased font-extralight text-xs">Java</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-1">
                            <Image src="/img/project.webp" alt="" width="1280" height="720" className="rounded-xl"/>
                            <Link href="" className="project-detail flex flex-col">
                                <h6 className="project-title text-md font-bold underline underline-offset-4 cursor-pointer">Game
                                    of life</h6>
                                <p className="antialiased font-extralight text-sm truncate">
                                    Selamlar millet bu benim projem ben proeje yapmayı çok severim çünkü bu beni
                                    geliştirir
                                </p>
                                <div className="flex flex-row items-center gap-1">
                                    <span
                                        className="programming-language-color rounded-full size-2.5 bg-amber-100"></span>
                                    <span
                                        className="programming-language-name antialiased font-extralight text-xs">Java</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-1">
                            <Image src="/img/project.webp" alt="" width="1280" height="720" className="rounded-xl"/>
                            <Link href="" className="project-detail flex flex-col">
                                <h6 className="project-title text-md font-bold underline underline-offset-4 cursor-pointer">Game
                                    of life</h6>
                                <p className="antialiased font-extralight text-sm truncate">
                                    Selamlar millet bu benim projem ben proeje yapmayı çok severim çünkü bu beni
                                    geliştirir
                                </p>
                                <div className="flex flex-row items-center gap-1">
                                    <span
                                        className="programming-language-color rounded-full size-2.5 bg-amber-100"></span>
                                    <span
                                        className="programming-language-name antialiased font-extralight text-xs">Java</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-1">
                            <Image src="/img/project.webp" alt="" width="1280" height="720" className="rounded-xl"/>
                            <Link href="" className="project-detail flex flex-col">
                                <h6 className="project-title text-md font-bold underline underline-offset-4 cursor-pointer">Game
                                    of life</h6>
                                <p className="antialiased font-extralight text-sm truncate">
                                    Selamlar millet bu benim projem ben proeje yapmayı çok severim çünkü bu beni
                                    geliştirir
                                </p>
                                <div className="flex flex-row items-center gap-1">
                                    <span
                                        className="programming-language-color rounded-full size-2.5 bg-amber-100"></span>
                                    <span
                                        className="programming-language-name antialiased font-extralight text-xs">Java</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectsPage;