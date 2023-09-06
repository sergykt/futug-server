#!/usr/bin/env node

const Express = require('express');
const cors = require('cors');

const jsonData = [
    {
        id: 17648,
        level: 'нуб',
        currency: 42,
        total: 7834,
        tg_nick: '@random_nick_1',
        rest_name: 'Ресторан 1',
        is_active: true,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 23579,
        level: 'опытный',
        currency: 65,
        total: 6215,
        tg_nick: '@random_nick_2',
        rest_name: 'Ресторан 2',
        is_active: false,
        avatar_img: '',
    },
    {
        id: 11876,
        level: 'мастер',
        currency: 91,
        total: 5692,
        tg_nick: '@random_nick_3',
        rest_name: 'Ресторан 3',
        is_active: true,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 29651,
        level: 'нуб',
        currency: 28,
        total: 7319,
        tg_nick: '@random_nick_4',
        rest_name: 'Ресторан 4',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 14895,
        level: 'опытный',
        currency: 76,
        total: 9812,
        tg_nick: '@random_nick_5',
        rest_name: 'Ресторан 5',
        is_active: true,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 19025,
        level: 'мастер',
        currency: 86,
        total: 5975,
        tg_nick: '@random_nick_6',
        rest_name: 'Ресторан 6',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 20371,
        level: 'нуб',
        currency: 16,
        total: 6723,
        tg_nick: '@random_nick_7',
        rest_name: 'Ресторан 7',
        is_active: true,
        avatar_img: '',
    },
    {
        id: 23263,
        level: 'опытный',
        currency: 49,
        total: 7315,
        tg_nick: '@random_nick_8',
        rest_name: 'Ресторан 8',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 12687,
        level: 'мастер',
        currency: 74,
        total: 6211,
        tg_nick: '@random_nick_9',
        rest_name: 'Ресторан 9',
        is_active: true,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 12342,
        level: 'нуб',
        currency: 37,
        total: 5303,
        tg_nick: '@random_nick_10',
        rest_name: 'Ресторан 10',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 21496,
        level: 'опытный',
        currency: 61,
        total: 8156,
        tg_nick: '@random_nick_11',
        rest_name: 'Ресторан 11',
        is_active: true,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 25672,
        level: 'мастер',
        currency: 52,
        total: 9227,
        tg_nick: '@random_nick_12',
        rest_name: 'Ресторан 12',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 28214,
        level: 'нуб',
        currency: 22,
        total: 8541,
        tg_nick: '@random_nick_13',
        rest_name: 'Ресторан 13',
        is_active: true,
        avatar_img: '',
    },
    {
        id: 27435,
        level: 'опытный',
        currency: 82,
        total: 6587,
        tg_nick: '@random_nick_14',
        rest_name: 'Ресторан 14',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 14729,
        level: 'мастер',
        currency: 93,
        total: 6699,
        tg_nick: '@random_nick_15',
        rest_name: 'Ресторан 15',
        is_active: true,
        avatar_img: '',
    },
    {
        id: 10147,
        level: 'нуб',
        currency: 12,
        total: 8275,
        tg_nick: '@random_nick_16',
        rest_name: 'Ресторан 16',
        is_active: false,
        avatar_img: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
    },
    {
        id: 19364,
        level: 'опытный',
        currency: 31,
        total: 9011,
        tg_nick: '@random_nick_17',
        rest_name: 'Ресторан 17',

const app = new Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const routes = {
    api: '/api',
    item: '/api/:id',
};

app.get(routes.api, (req, res) => {
    res.json(jsonData);
    res.end();
});

app.get(routes.item, (req, res) => {
    const id = Number(req.params.id);
    res.json(jsonData.find((item) => id === item.id));
    res.end();
});


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
