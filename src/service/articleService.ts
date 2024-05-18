import {GET_REQUEST} from "@/service/genericService";
import {Article} from "@/service/model/article";
import {SuccessfulDataResponse} from "@/service/response/response";
import ArticleYearGroup from "@/service/model/ArticleYearGroup";

export const getAllGroupedAndDecreasedByYear = async (): Promise<ArticleYearGroup<Article>> => {
    debugger
    const result: SuccessfulDataResponse<ArticleYearGroup<Article>> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/article/groupedYear");

    console.log("hello")
    debugger
    return result.data;
}