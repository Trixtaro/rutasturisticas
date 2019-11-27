-- Tiempo de generación de este archivo: 27-11-2019 a las 00:12:59
-- 
-- Proyecto
-- Ingeniería de Interfaces A

CREATE DATABASE RutasTuristicas;

USE RutasTuristicas;

-- --------------------------------------------------------

--
-- Definición de la tabla Persona
--

DROP TABLE IF EXISTS Persona;

CREATE TABLE Persona (
	ID_persona INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
	nombres VARCHAR(50) NOT NULL,
	apellido_paterno VARCHAR(15) NOT NULL,
	apellido_materno VARCHAR(15) NOT NULL,
	cedula VARCHAR(10) NOT NULL,
	pasaporte VARCHAR(15) NULL,
	f_nacimiento DATE NULL,
	

);

-- --------------------------------------------------------

--
-- Definición de la tabla Turista
--

DROP TABLE IF EXISTS Turista;

CREATE TABLE Turista (
	ID_turista INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Usuario
--

DROP TABLE IF EXISTS Usuario;

CREATE TABLE Usuario (
	ID_usuario INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Guia
--

DROP TABLE IF EXISTS Guia;

CREATE TABLE Guia (
	ID_guia INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Ruta
--

DROP TABLE IF EXISTS Ruta;

CREATE TABLE Ruta (
	ID_ruta INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Recorrido
--

DROP TABLE IF EXISTS Recorrido;

CREATE TABLE Recorrido (
	ID_recorrido INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Lugar
--

DROP TABLE IF EXISTS Lugar;

CREATE TABLE Lugar (
	ID_lugar INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL
);