#!/usr/bin/env node

const Express = require('express');
const cors = require('cors');

const jsonData = [
    {
        id: 17648,
        level: 'нуб',
        currency: 42,
        total: 7834,
    },
    {
        id: 23579,
        level: 'опытный',
        currency: 65,
        total: 6215,
    },
    {
        id: 11876,
        level: 'мастер',
        currency: 91,
        total: 5692,
    },
    {
        id: 29651,
        level: 'нуб',
        currency: 28,
        total: 7319,
    },
    {
        id: 14895,
        level: 'опытный',
        currency: 76,
        total: 9812,
    },
    {
        id: 19025,
        level: 'мастер',
        currency: 86,
        total: 5975,
    },
    {
        id: 20371,
        level: 'нуб',
        currency: 16,
        total: 6723,
    },
    {
        id: 23263,
        level: 'опытный',
        currency: 49,
        total: 7315,
    },
    {
        id: 12687,
        level: 'мастер',
        currency: 74,
        total: 6211,
    },
    {
        id: 12342,
        level: 'нуб',
        currency: 37,
        total: 5303,
    },
    {
        id: 21496,
        level: 'опытный',
        currency: 61,
        total: 8156,
    },
    {
        id: 25672,
        level: 'мастер',
        currency: 52,
        total: 9227,
    },
    {
        id: 28214,
        level: 'нуб',
        currency: 22,
        total: 8541,
    },
    {
        id: 27435,
        level: 'опытный',
        currency: 82,
        total: 6587,
    },
    {
        id: 14729,
        level: 'мастер',
        currency: 93,
        total: 6699,
    },
    {
        id: 10147,
        level: 'нуб',
        currency: 12,
        total: 8275,
    },
    {
        id: 19364,
        level: 'опытный',
        currency: 31,
        total: 9011,
    },
    {
        id: 25439,
        level: 'мастер',
        currency: 55,
        total: 7973,
    },
    {
        id: 14657,
        level: 'нуб',
        currency: 84,
        total: 7487,
    },
    {
        id: 17624,
        level: 'опытный',
        currency: 98,
        total: 5298,
    },
];

const app = new Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const routes = {
    api: (id) => `/api:${id}`,
  };

app.get(routes.api(id), (req, res) => {
    res.json(jsonData.find((item) => id === item.id));
    res.end();
});

app.post(routes.api, (req, res) => {
    const { body } = req;
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json(body);
    res.end();
  });
  

  const PORT = process.env.PORT || 3003;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
