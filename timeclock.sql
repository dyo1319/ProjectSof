-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2023 at 11:24 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timeclock`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `other_employee_details` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `first_name`, `last_name`, `email`, `other_employee_details`) VALUES
(1, 'TheBoss', 'IsHere', 'T_H@hotmail.com', 'Master'),
(4, 'java', 'dotnet', 'dot_java@hotmail.com', 'employee'),
(5, 'jax', 'jako', 'jako_chan@hotmail.com', 'manager'),
(7, 'bob', 'marley', 'bob_jax@hotmail.com', 'newbie'),
(10, 'sasa', 'dede', 'fanta_pepsi@hotmail.com', 'Rookie'),
(11, 'snd', 'sad', 'happay_asd@hotmail', 'beginner'),
(13, 'Jax', 'Jeke', 'Jax_jake@hotmail.com', 'rambo');

-- --------------------------------------------------------

--
-- Table structure for table `timeentry`
--

CREATE TABLE `timeentry` (
  `entry_id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `employee_name` varchar(255) NOT NULL,
  `entry_type` varchar(5) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timeentry`
--

INSERT INTO `timeentry` (`entry_id`, `employee_id`, `employee_name`, `entry_type`, `timestamp`) VALUES
(38, 5, 'jax jako', 'Entry', '2023-09-24 11:46:13'),
(39, 5, 'jax jako', 'Exit', '2023-09-24 11:46:14'),
(40, 7, 'bob marley', 'Entry', '2023-09-24 11:46:16'),
(41, 7, 'bob marley', 'Exit', '2023-09-24 11:46:17'),
(42, 10, 'sasa dede', 'Entry', '2023-09-24 11:46:18'),
(43, 10, 'sasa dede', 'Exit', '2023-09-24 11:46:19'),
(44, 11, 'snd sad', 'Entry', '2023-09-24 11:46:20'),
(45, 11, 'snd sad', 'Exit', '2023-09-24 11:46:21'),
(46, 13, 'Jax Jeke', 'Entry', '2023-09-24 11:46:23'),
(47, 13, 'Jax Jeke', 'Exit', '2023-09-24 11:46:23'),
(48, 1, 'TheBoss IsHere', 'Entry', '2023-09-24 11:46:26'),
(49, 1, 'TheBoss IsHere', 'Exit', '2023-09-24 11:46:26'),
(50, 4, 'java dotnet', 'Entry', '2023-09-24 11:49:42'),
(51, 4, 'java dotnet', 'Exit', '2023-09-24 11:49:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `timeentry`
--
ALTER TABLE `timeentry`
  ADD PRIMARY KEY (`entry_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `timeentry`
--
ALTER TABLE `timeentry`
  MODIFY `entry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
