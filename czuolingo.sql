-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2024 at 03:37 PM
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
-- Database: `czuolingo`
--

-- --------------------------------------------------------

--
-- Table structure for table `proverbs`
--

CREATE TABLE `proverbs` (
  `id` int(11) NOT NULL,
  `first_part` varchar(255) NOT NULL,
  `last_part` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `proverbs`
--

INSERT INTO `proverbs` (`id`, `first_part`, `last_part`, `answer`) VALUES
(1, 'Bez práce nejsou', '', 'koláče'),
(2, 'Dvakrát měř, jednou ', '', 'řež'),
(3, 'Every cloud has a', 'silver lining.', ''),
(4, 'Fortune favors the', 'brave.', ''),
(5, 'Good things come to those who', 'wait.', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `proverbs`
--
ALTER TABLE `proverbs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `proverbs`
--
ALTER TABLE `proverbs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
