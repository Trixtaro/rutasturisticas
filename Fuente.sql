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

DROP DATABASE IF EXISTS RutasTuristicas;

CREATE DATABASE IF NOT EXISTS RutasTuristicas;

USE RutasTuristicas;

-- --------------------------------------------------------

--
-- Definición de la tabla Usuario
--

DROP TABLE IF EXISTS Usuario;

CREATE TABLE Usuario (
	ID_usuario INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	clave CHAR(64) NOT NULL,
	nickname VARCHAR(25) NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Persona
--

DROP TABLE IF EXISTS Persona;

CREATE TABLE Persona (
	ID_persona INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	nombres VARCHAR(50) NOT NULL,
	apellido_paterno VARCHAR(15) NOT NULL,
	apellido_materno VARCHAR(15) NOT NULL,
	cedula VARCHAR(10) NOT NULL,
	pasaporte VARCHAR(15) NULL,
	f_nacimiento DATE NULL,
	nacionalidad VARCHAR(20) NOT NULL,
	genero ENUM('M','F') NOT NULL COMMENT 'Masculino,Femenino',

	ID_usuario INT, 
	FOREIGN KEY (ID_usuario) REFERENCES Usuario(ID_usuario)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Telefono
--

DROP TABLE IF EXISTS Telefono;

CREATE TABLE Telefono (
	numero VARCHAR(10) NOT NULL PRIMARY KEY,
	operadora VARCHAR(25) NULL,

	ID_persona INT, 
	FOREIGN KEY (ID_persona) REFERENCES Persona (ID_persona)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Turista
--

DROP TABLE IF EXISTS Turista;

CREATE TABLE Turista (
	ID_turista INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	ID_persona INT, 
	FOREIGN KEY (ID_persona) REFERENCES Persona(ID_persona)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Guia
--

DROP TABLE IF EXISTS Guia;

CREATE TABLE Guia (
	ID_guia INT AUTO_INCREMENT NOT NULL	PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	estado ENUM('H','R') NOT NULL COMMENT 'Habilitado,Rechazado',
	foto_identificacion BLOB NULL,
	certificado BLOB NULL,

	ID_persona INT, 
	FOREIGN KEY (ID_persona) REFERENCES Persona(ID_persona)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Lugar
--

DROP TABLE IF EXISTS Lugar;

CREATE TABLE Lugar (
	ID_lugar INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	codigo VARCHAR(3) NOT NULL,
	latitud VARCHAR(10) NOT NULL,
	longitud VARCHAR(10) NOT NULL,
	provincia VARCHAR(25) NOT NULL,
	pais VARCHAR(25) NOT NULL
);

-- --------------------------------------------------------

--
-- Definición de la tabla Ruta
--

DROP TABLE IF EXISTS Ruta;

CREATE TABLE Ruta (
	ID_ruta INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	nombre VARCHAR(25) NOT NULL,
	precio_referencial FLOAT NOT NULL,
	ID_guia INT, 
	FOREIGN KEY (ID_guia) REFERENCES Guia(ID_guia),
	ID_lugar INT, 
	FOREIGN KEY (ID_lugar) REFERENCES Lugar(ID_lugar)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Recorrido
--

DROP TABLE IF EXISTS Recorrido;

CREATE TABLE Recorrido (
	ID_recorrido INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	f_ingreso DATETIME NOT NULL,
	punto_partida VARCHAR(25) NOT NULL,
	fecha DATETIME NOT NULL,
	n_cupones SMALLINT NOT NULL,
	precio FLOAT NOT NULL,
	ID_ruta INT, 
	FOREIGN KEY (ID_ruta) REFERENCES Ruta(ID_ruta)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Reserva
--

DROP TABLE IF EXISTS Reserva;

CREATE TABLE Reserva (
	ID_reserva INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	ID_turista INT, 
	FOREIGN KEY (ID_turista) REFERENCES Turista(ID_turista),
	ID_recorrido INT, 
	FOREIGN KEY (ID_recorrido) REFERENCES Recorrido(ID_recorrido)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Imagen
--

DROP TABLE IF EXISTS Imagen;

CREATE TABLE Imagen (
	ID_imagen INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	ID_ruta INT, 
	FOREIGN KEY (ID_ruta) REFERENCES Ruta(ID_ruta)
);

-- --------------------------------------------------------

--
-- Definición de la tabla PuntoGeografico
--

DROP TABLE IF EXISTS PuntoGeografico;

CREATE TABLE PuntoGeografico (
	ID_puntogeografico INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	ID_ruta INT, 
	FOREIGN KEY (ID_ruta) REFERENCES Ruta(ID_ruta)
);