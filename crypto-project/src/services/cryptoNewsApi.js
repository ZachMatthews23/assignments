// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

// const cryptoNewsHeaders = {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '118cfa6a6amsh3ce5e19d7140502p11375bjsn0443684bc70c'
// }

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
//         })
//     })
// })

// export const {
//     useGetCryptoNewsQuery
// } = cryptoNewsApi