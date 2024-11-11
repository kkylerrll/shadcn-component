import { faker } from "@faker-js/faker";
// fake/user.fake.ts
import Mock from "mockjs";
import { defineFakeRoute } from "vite-plugin-fake-server/client";
const emailDomains = ["gmail.com", "yahoo.com", "example.com", "tw.com"];
const data = Mock.mock({
  "users|100-200": [
    {
      "id|+1": 1,
      username: "@cname()",
      email: `${"@last"}@${Mock.Random.pick(emailDomains)}`,
      avatar: '@image("200x200")',
      phone: /^09\d{8}$/,
      "wid|+1": 1,
      workname: "@csentence(5, 10)",
      readCount: "@integer(0, 200000)",
      status: '@pick(["1", "2"])',
      createTime: '@date("yyyy-MM-dd")',
    },
  ],
}).users;

export default defineFakeRoute([
  {
    url: "/mock/getUserList",
    timeout: 1000,
    method: "GET",
    response: ({ query }: { query: Record<string, string | string[]> }) => {
      // 解析 page 和 per_page 參數
      const page =
        parseInt(Array.isArray(query.page) ? query.page[0] : query.page, 10) ||
        1;
      const perPage =
        parseInt(
          Array.isArray(query.per_page) ? query.per_page[0] : query.per_page,
          10
        ) || 10;

      // 解析 sortField 和 sortOrder 參數
      const sortField = Array.isArray(query.sortField)
        ? query.sortField[0]
        : query.sortField;
      const sortOrder = Array.isArray(query.sortOrder)
        ? query.sortOrder[0]
        : "asc";
      const status = Array.isArray(query.status)
        ? query.status[0]
        : query.status || "";
      // const workname = Array.isArray(query.workname)
      //   ? query.workname[0]
      //   : query.workname || "";

      // 篩選資料
      let filteredData = data.filter(
        (item: { status: string; workname: string }) => {
          // 檢查狀態欄位是否符合條件
          const matchesStatus = status ? item.status === status : true;
          // const matchesWorkname = workname ? item.workname === workname : true;
          return matchesStatus;
        }
      );

      // 排序資料
      const sortedData = filteredData.sort(
        (a: { [x: string]: number }, b: { [x: string]: number }) => {
          if (sortField) {
            if (sortOrder === "asc")
              return a[sortField] > b[sortField] ? 1 : -1;
            if (sortOrder === "desc")
              return a[sortField] < b[sortField] ? 1 : -1;
          }
          return 0;
        }
      );

      // 計算分頁範圍
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;

      return {
        status: "success",
        code: 200,
        data: {
          total: sortedData.length,
          page,
          per_page: perPage,
          total_pages: Math.ceil(sortedData.length / perPage),
          users: sortedData.slice(startIndex, endIndex),
        },
      };
    },
  },
]);
