-- Tiempo de generación de este archivo: 27-11-2019 a las 00:12:59
-- 
-- Proyecto
-- Ingeniería de Interfaces A
-- Equipo Responsable
-- 		Briones Cinthya
-- 		Cedeño Wilmer
-- 		Giler Gema
-- 		Marcillo Bryan
-- 		Suárez Luis

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
	nacionalidad VARCHAR(20) NOT NULL,
	genero ENUM('M','F') NOT NULL COMMENT='Masculino,Femenino'
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
	f_ingreso DATETIME NOT NULL,
	clave CHAR(64) NOT NULL,
	nickname VARCHAR(25) NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Guia
--

DROP TABLE IF EXISTS Guia;

CREATE TABLE Guia (
	ID_guia INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	estado ENUM('H','R') NOT NULL COMMENT='Habilitado,Rechazado',
	foto_identificacion BLOB NULL,
	certificado BLOB NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Ruta
--

DROP TABLE IF EXISTS Ruta;

CREATE TABLE Ruta (
	ID_ruta INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	nombre VARCHAR(25) NOT NULL,
	precio_referencial MONEY NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Recorrido
--

DROP TABLE IF EXISTS Recorrido;

CREATE TABLE Recorrido (
	ID_recorrido INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	punto_partida VARCHAR(25) NOT NULL,
	fecha DATETIME NOT NULL,
	n_cupones SMALLINT NOT NULL,
	precio MONEY NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Lugar
--

DROP TABLE IF EXISTS Lugar;

CREATE TABLE Lugar (
	ID_lugar INT AUTO_INCREMENTAL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	codigo VARCHAR(3) NOT NULL,
	latitud VARCHAR(10) NOT NULL,
	longitud VARCHAR(10) NOT NULL,
	provincia VARCHAR(25) NOT NULL,
	pais VARCHAR(25) NOT NULL
);