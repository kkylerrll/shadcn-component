import { faker } from "@faker-js/faker";
// fake/user.fake.ts
import Mock from "mockjs";
import { defineFakeRoute } from "vite-plugin-fake-server/client";
const emailDomains = [
  'gmail.com',
  'yahoo.com',
  'example.com',
  'tw.com',
];
const data = Mock.mock({
  'users|100-200': [
    {
      'id|+1': 1,
      username: '@cname()',
      email: `${'@last'}@${Mock.Random.pick(emailDomains)}`,
      avatar: '@image("200x200")',
      phone: (/^09\d{8}$/),
      'wid|+1': 1,
      workName: '@csentence(5, 10)',
      readCount: '@integer(0, 200000)',
      status: '@pick(["1", "2"])',
      createTime: '@date("yyyy-MM-dd")',
    },
  ],
}).users;

export default defineFakeRoute([
  // {
  //   url: '/mock/getUserList',
  //   timeout: 1000,
  //   method: 'GET',
  //   response: ({ query }: { query: Record<string, string | string[]> }) => {
  //     // 處理 query.page 和 query.per_page 的值，並確保它們是數字
  //     const page = parseInt(Array.isArray(query.page) ? query.page[0] : query.page, 10) || 1;
  //     const perPage = parseInt(Array.isArray(query.per_page) ? query.per_page[0] : query.per_page, 10) || 10;
      
  //     // 如果有 sort 的參數，解析並應用它
  //     const sort = query.sort ? JSON.parse(Array.isArray(query.sort) ? query.sort[0] : query.sort) : [];
  //     const filter = Array.isArray(query.filter) ? query.filter[0] : query.filter || '';
  //     // 篩選功能
  //     let filteredData = data.filter(
  //       (user: { username: string | string[]; email: string | string[]; }) => user.username.includes(filter) || user.email.includes(filter),
  //     );

  //     // 排序功能
  //     if (sort.length) {
  //       filteredData.sort((a: { x: string }, b: { x: string }) => {
  //         for (let i = 0; i < sort.length; i++) {
  //           const { id, desc } = sort[i];
  //           const direction = desc ? 'desc' : 'asc'; 
  //           const dir = direction === 'desc' ? -1 : 1;
  //           if (a[id] < b[id]) return -dir;
  //           if (a[id] > b[id]) return dir;
  //         }
  //         return 0;
  //       });
  //     }

  //     const start = (page - 1) * perPage;
  //     const end = page * perPage;
  //     const paginatedData = filteredData.slice(start, end);

  //     return {
  //       status: 'success',
  //       code: 200,
  //       data: {
  //         total: filteredData.length,
  //         page,
  //         per_page: perPage,
  //         total_pages: Math.ceil(filteredData.length / perPage),
  //         users: paginatedData,
  //       },
  //     };
  //   },
  // },
  {
    url: '/mock/getUserList',
    timeout: 1000,
    method: 'GET',
    response: ({ query }: { query: Record<string, string | string[]> }) => {
      // 解析 page 和 per_page 參數
      const page = parseInt(Array.isArray(query.page) ? query.page[0] : query.page, 10) || 1;
      const perPage = parseInt(Array.isArray(query.per_page) ? query.per_page[0] : query.per_page, 10) || 10;
  
      // 解析 filter 參數
      const filter = Array.isArray(query.filter) ? query.filter[0] : query.filter || '';
  
      // 解析 sortField 和 sortOrder 參數
      const sortField = Array.isArray(query.sortField) ? query.sortField[0] : query.sortField;
      const sortOrder = Array.isArray(query.sortOrder) ? query.sortOrder[0] : 'asc';
  
      // 篩選資料
      let filteredData = data.filter(
        (user: { username: string; phone: string; status: string }) =>
          user.username.includes(filter) || user.phone.includes(filter) || user.status.includes(filter)
      );
  
      // 排序資料
      // if (sortField) {
      //   filteredData = filteredData.sort((a, b) => {
      //     if (sortOrder === 'asc') return a[sortField] > b[sortField] ? 1 : -1;
      //     if (sortOrder === 'desc') return a[sortField] < b[sortField] ? 1 : -1;
      //     return 0;
      //   });
      // }
      const sortedData = filteredData.sort((a, b) => {
        if (sortField) {
          if (sortOrder === 'asc') return a[sortField] > b[sortField] ? 1 : -1;
          if (sortOrder === 'desc') return a[sortField] < b[sortField] ? 1 : -1;
        }
        return 0;
      });
  
      // 計算分頁範圍
      // const start = (page - 1) * perPage;
      // const end = page * perPage;
      // const paginatedData = filteredData.slice(start, end);
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;

      return {
        status: 'success',
        code: 200,
        data: {
          total: sortedData.length,
          page,
          per_page: perPage,
          total_pages: Math.ceil(sortedData.length / perPage),
          // users: paginatedData,
          users: sortedData.slice(startIndex, endIndex),
        },
      };
    },
  },
]);