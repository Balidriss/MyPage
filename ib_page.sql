-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 06:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ib_page`
--

-- --------------------------------------------------------

--
-- Table structure for table `guesses`
--

CREATE TABLE `guesses` (
  `guess_id` int(11) NOT NULL,
  `answer` varchar(128) NOT NULL,
  `help_message` text NOT NULL,
  `hint_message` text NOT NULL,
  `success_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guesses`
--

INSERT INTO `guesses` (`guess_id`, `answer`, `help_message`, `hint_message`, `success_message`) VALUES
(1, 'R1', 'la reponse : R1', 'Non c\'est bien R1', 'Message de réussite 1'),
(7, 'ib', 'les initiales', 'halo ?', 'Bah voila'),
(8, 'R2', 'la reponse : R2', 'Non c\'est bien R2', 'Message de réussite 2'),
(9, 'R3', 'la reponse : R3', 'Non c\'est bien R3', 'Message de réussite 3'),
(10, 'R4', 'la reponse : R4', 'Non c\'est bien R4', 'Message de réussite 4'),
(11, 'R5', 'la reponse : R5', 'Non c\'est bien R5', 'Message de réussite 5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guesses`
--
ALTER TABLE `guesses`
  ADD PRIMARY KEY (`guess_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guesses`
--
ALTER TABLE `guesses`
  MODIFY `guess_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
