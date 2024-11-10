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
      readCount: '@integer(0, 200000)'
    },
  ],
}).users;

export default defineFakeRoute([
	{
		url: "/mock/getUserInfo",
    timeout: 1000,
    method: 'GET',
		response: () => {
			return {
        status: 'success',
        code: 200,
        data: Mock.mock({
          'users|1-2': [
            {
              id: '@increment',
              username: '@first',
              email: '@email',
              avatar: '@image("200x200")',
              role: '@pick(["admin", "user", "dealer"])',
            },
          ],
        }),
      } 
		},
	},
  {
    url: '/mock/getUserList',
    timeout: 1000,
    method: 'GET',
    response: ({ query }: { query: Record<string, string | string[]> }) => {
      // 處理 query.page 和 query.per_page 的值，並確保它們是數字
      const page = parseInt(Array.isArray(query.page) ? query.page[0] : query.page, 10) || 1;
      const perPage = parseInt(Array.isArray(query.per_page) ? query.per_page[0] : query.per_page, 10) || 10;
      
      // 如果有 sort 的參數，解析並應用它
      const sort = query.sort ? JSON.parse(Array.isArray(query.sort) ? query.sort[0] : query.sort) : [];
      const filter = Array.isArray(query.filter) ? query.filter[0] : query.filter || '';

      // 篩選功能
      let filteredData = data.filter(
        (user: { username: string | string[]; email: string | string[]; }) => user.username.includes(filter) || user.email.includes(filter),
      );

      // 排序功能
      if (sort.length) {
        filteredData.sort((a, b) => {
          for (let i = 0; i < sort.length; i++) {
            const { id, desc } = sort[i];
            const dir = desc ? -1 : 1;
            if (a[id] < b[id]) return -dir;
            if (a[id] > b[id]) return dir;
          }
          return 0;
        });
      }

      const start = (page - 1) * perPage;
      const end = page * perPage;
      const paginatedData = filteredData.slice(start, end);

      return {
        status: 'success',
        code: 200,
        data: {
          total: filteredData.length,
          page,
          per_page: perPage,
          total_pages: Math.ceil(filteredData.length / perPage),
          users: paginatedData,
        },
      };
    },
  },
	{
		url: "/fake/get-user-info",
		response: () => {
			return {
				id: faker.string.uuid(),
				avatar: faker.image.avatar(),
				birthday: faker.date.birthdate(),
				email: faker.internet.email(),
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				sex: faker.person.sexType(),
				role: "admin",
			};
		},
	},
]);