-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Ноя 26 2023 г., 16:13
-- Версия сервера: 8.0.35-0ubuntu0.22.04.1
-- Версия PHP: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `housing_and_communal_services`
--

-- --------------------------------------------------------

--
-- Структура таблицы `municipal_services`
--

CREATE TABLE `municipal_services` (
  `id` int NOT NULL,
  `cod` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `specification` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `work_area` text COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '3',
  `reg_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `municipal_services`
--

INSERT INTO `municipal_services` (`id`, `cod`, `password`, `name`, `specification`, `work_area`, `email`, `role`, `reg_time`) VALUES
(5, '1111111d1111', '$2b$04$YutDoL7qC/CoEeCA6KbVqeIV/ddJNhILKrji.4yGBV6R5qaV5iUry', 'qwerty', 'вода', 'Южный', 'vodfa@mail.ru', 3, '2023-11-24 22:15:08'),
(6, '111111v1d1111', '$2b$04$9v9FfcbfDYnaympxpeZ9K..JEpwNHsLAEqU4oRmZt1tIDeQk3duiC', 'qwerty', 'вода', 'Южный', 'vovdfa@mail.ru', 3, '2023-11-24 22:22:32'),
(7, '11111d1v1d1111', '$2b$04$r8LR5cs81TAVp5uIKgBCdu8BC8w48SEYd7Vtfu2HsFLWrz/RFOdba', 'qwerty', 'вода', 'Южный', 'vodvdfa@mail.ru', 3, '2023-11-24 22:24:31');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `img` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '/static/news.jpeg',
  `heading` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `text` longtext COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `img`, `heading`, `text`) VALUES
(1, '/static/news.jpeg', 'Новая схема оплаты трат на общедомовое имущество', 'В сентябре 2022 года начал действовать \nзакон о новой схеме оплаты коммунальных услуг, \nкоторые пошли на общедомовые нужды. \n'),
(2, '/static/news.jpeg', 'Аномальный снег', ' В Оренбурге на уборку дворов после ночного снегопада вышли 785 дворников. Такие данные привели в администрации города.\r\n'),
(3, '/static/news.jpeg', 'Аномальный снег', ' В Оренбурге на уборку дворов после ночного снегопада вышли 785 дворников. Такие данные привели в администрации города.\r\n');

-- --------------------------------------------------------

--
-- Структура таблицы `refresh`
--

CREATE TABLE `refresh` (
  `id` int NOT NULL,
  `user` int DEFAULT NULL,
  `municipal_id` int DEFAULT NULL,
  `refreshToken` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `fio` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(11) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `reg_time` datetime NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fio`, `phone_number`, `address`, `reg_time`, `role`) VALUES
(1, 'qweqeqwe@mail.ru', '$2b$04$pKUxdSsRsSUXpHAKliH3.e7WkKVJ9JW/eBNIBVy9J7ppG6OImymES', 'qwwqeqw', '11111111111', 'wqdqw', '2023-11-26 13:47:00', 0),
(2, 'qqwewgebe@mail.ru', '$2b$04$TmD0VBkmJ2TGgKbR9dCGB.f9j5tAWF5ce8UcTFI8i.91F790hhfuy', 'dwwqd', '1111111111', 'wdqwqwd', '2023-11-26 13:49:20', 0),
(3, 'admin@mail.ru', '$2b$04$cI5YopKPOomxt6DGI2.HWeERZTXbXa/CW2HuIjmTvDS6aa4FkPNwe', 'admin', 'admin', 'admin', '2023-11-26 15:25:39', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `municipal_services`
--
ALTER TABLE `municipal_services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cod` (`cod`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `refresh`
--
ALTER TABLE `refresh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `refresh_ibfk_1` (`municipal_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `municipal_services`
--
ALTER TABLE `municipal_services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `refresh`
--
ALTER TABLE `refresh`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `refresh`
--
ALTER TABLE `refresh`
  ADD CONSTRAINT `refresh_ibfk_1` FOREIGN KEY (`municipal_id`) REFERENCES `municipal_services` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
