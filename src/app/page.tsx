import {M_PLUS_Rounded_1c, Open_Sans, Playfair_Display} from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const mPlusRounded = M_PLUS_Rounded_1c({
    subsets: ['vietnamese'],
    weight: ['400'],
});

const openSans = Open_Sans({
   subsets: ['latin'],
   weight: ['400'],
});

function Page() {
    return (
        <>
            <div className="w-full bg-white/[.08]">
                <div className="site-main-container mb-10 p-6">
                    <h1 className="text-2xl text-white">Hello there...</h1>
                    <p className="text-md antialiased font-light mt-3 hyphens-auto leading-7 indent-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className="site-main-container flex flex-row mb-8 justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h2 className={`text-4xl mb-2 ${mPlusRounded.className}`}>Burak Yapıcı</h2>
                        <p className="text-md font-extralight mb-2">Backend Developer</p>
                    </div>
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Link href="https://www.linkedin.com/in/burakyapici/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 16 16">
                                    <path fill="white" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://leetcode.com/burakyapici/">
                                <svg width="27px" height="27px" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none">
                                    <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/burakyapici747">
                                <svg height="27px" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="27px" data-view-component="true">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="white"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-start">
                    <div className="mt-0 rounded-full h-100px w-100px border-solid border-white">
                        <Image width={100} height={100} src="/img/profile.png" alt="profile" className="h-100px w-100px rounded-full border-2 border-solid border-white/[.8]"/>
                    </div>
                </div>
            </div>
            <div className="site-main-container mb-10 flex flex-col gap-1">
                <h3 className={`text-xl underline decoration-4 underline-offset-4 decoration-[#525252] mb-2 ${mPlusRounded.className}`}>Bio</h3>
                <div className={`flex flex-row`}>
                    <span className="mr-4 font-bold">1997</span>
                    <p className={`font-extralight text-md antialiased ${openSans.className}`}>
                        Born in Osaka (大阪), Japan.
                    </p>
                </div>
                <div className={`flex flex-row`}>
                    <span className="mr-4 font-bold">2016</span>
                    <p className={`font-extralight text-md antialiased ${openSans.className}`}>
                        Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)
                    </p>
                </div>
                <div className={`flex flex-row`}>
                    <span className="mr-4 font-bold">2019</span>
                    <p className={`font-extralight text-md antialiased ${openSans.className}`}>
                        Worked at Yahoo! Japan (ヤフー株式会社入社)
                    </p>
                </div>
                <div className={`flex flex-row`}>
                    <span className="mr-4 font-bold">2023</span>
                    <p className={`font-extralight text-md antialiased ${openSans.className}`}>
                        Working as a freelancer
                    </p>
                </div>
            </div>
            <div className="site-main-container mb-10">
                <h3 className={`text-xl underline decoration-4 underline-offset-4 decoration-[#525252] mb-2 ${mPlusRounded.className}`}>I ♥</h3>
                <p className={`font-extralight text-md antialiased ${openSans.className}`}>
                     🏊‍ swimming 🏕️ camping 🎿 skiing 🕹️ computer games
                </p>
            </div>
        </>
    );
}

export default Page;