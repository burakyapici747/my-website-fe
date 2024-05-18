import {useEffect, useState} from "react";

export default function useFetch<T>(fetchMethod: ({}: any) => Promise<T>, params: {}) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        debugger
        (async () => {
            setLoading(true);
            setData(await fetchMethod(params));
            setTimeout(() => {
                setLoading(false);
            }, 350);
        })();
        debugger
    }, [params]);

    return [loading, data];
}