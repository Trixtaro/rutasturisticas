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
	ID_usuario INT AUTO_INCREMENT NOT NULL,  
	f_ingreso DATETIME NOT NULL,
	clave CHAR(64) NOT NULL,
	nickname VARCHAR(25) NOT NULL,
	CONSTRAINT CP_usuario PRIMARY KEY (ID_usuario)
);

-- --------------------------------------------------------

--
-- Definición de la tabla Persona
--

DROP TABLE IF EXISTS Persona;

CREATE TABLE Persona (
	ID_persona INT AUTO_INCREMENT NOT NULL,  
	CONSTRAINT CP_persona PRIMARY KEY (ID_persona),
	f_ingreso DATETIME NOT NULL
	nombres VARCHAR(50) NOT NULL,
	apellido_paterno VARCHAR(15) NOT NULL,
	apellido_materno VARCHAR(15) NOT NULL,
	cedula VARCHAR(10) NOT NULL,
	pasaporte VARCHAR(15) NULL,
	f_nacimiento DATE NULL,
	nacionalidad VARCHAR(20) NOT NULL,
	genero ENUM('M','F') NOT NULL COMMENT='Masculino,Femenino',

	ID_usuario NOT NULL
		CONSTRAINT CF_persona_usuario
			REFERENCES Usuario (ID_usuario)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Telefono
--

DROP TABLE IF EXISTS Telefono;

CREATE TABLE Telefono (
	numero VARCHAR(10) NOT NULL,
	CONSTRAINT CP_telefono PRIMARY KEY(numero),
	operadora VARCHAR(25) NULL,

	ID_persona INT NOT NULL
		CONSTRAINT CF_telefono_persona
			REFERENCES Persona (ID_persona)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Turista
--

DROP TABLE IF EXISTS Turista;

CREATE TABLE Turista (
	ID_turista INT AUTO_INCREMENT NOT NULL,  
		CONSTRAINT CP_turista PRIMARY KEY(ID_turista),
	f_ingreso DATETIME NOT NULL,
	ID_persona NOT NULL
		CONSTRAINT CF_turista_persona
			REFERENCES Persona (ID_persona)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Guia
--

DROP TABLE IF EXISTS Guia;

CREATE TABLE Guia (
	ID_guia INT AUTO_INCREMENT NOT NULL,  
		CONSTRAINT CP_guia PRIMARY KEY(ID_guia),
	f_ingreso DATETIME NOT NULL,
	estado ENUM('H','R') NOT NULL COMMENT='Habilitado,Rechazado',
	foto_identificacion BLOB NULL,
	certificado BLOB NULL,

	ID_persona NOT NULL
		CONSTRAINT CF_guia_persona
			REFERENCES Persona (ID_persona)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Reserva
--

DROP TABLE IF EXISTS Reserva;

CREATE TABLE Reserva (
	ID_reserva INT AUTO_INCREMENT NOT NULL, 
		CONSTRAINT CP_reserva PRIMARY KEY(ID_reserva),
	ID_turista INT NOT NULL
		CONSTRAINT CF_reserva_turista
			REFERENCES Turista (ID_turista)
				ON UPDATE CASCADE ON DELETE NO ACTION,
	ID_recorrido INT NOT NULL
		CONSTRAINT CF_reserva_recorrido
			REFERENCES Recorrido (ID_recorrido)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Lugar
--

DROP TABLE IF EXISTS Lugar;

CREATE TABLE Lugar (
	ID_lugar INT AUTO_INCREMENT NOT NULL, 
		CONSTRAINT CP_lugar PRIMARY KEY(ID_lugar),
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
	ID_ruta INT AUTO_INCREMENT NOT NULL, 
		CONSTRAINT CP_ruta PRIMARY KEY(ID_ruta),
	f_ingreso DATETIME NOT NULL,
	nombre VARCHAR(25) NOT NULL,
	precio_referencial MONEY NOT NULL,
	ID_guia INT NOT NULL
		CONSTRAINT CF_ruta_guia
			REFERENCES Guia (ID_guia)
				ON UPDATE CASCADE ON DELETE NO ACTION,
	ID_lugar INT NOT NULL
		CONSTRAINT CF_ruta_lugar
			REFERENCES Lugar (ID_lugar)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Imagen
--

DROP TABLE IF EXISTS Imagen;

CREATE TABLE Imagen (
	ID_imagen INT AUTO_INCREMENT NOT NULL, 
		CONSTRAINT CP_imagen PRIMARY KEY(ID_imagen),
	ID_ruta INT NOT NULL
		CONSTRAINT CF_imagen_ruta
			REFERENCES Ruta (ID_ruta)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla PuntoGeografico
--

DROP TABLE IF EXISTS PuntoGeografico;

CREATE TABLE PuntoGeografico (
	ID_puntogeografico INT AUTO_INCREMENT NOT NULL, 
		CONSTRAINT CP_puntogeografico PRIMARY KEY(ID_puntogeografico),

	ID_ruta INT NOT NULL
		CONSTRAINT CF_puntogeografico_ruta
			REFERENCES Ruta (ID_ruta)
				ON UPDATE CASCADE ON DELETE NO ACTION
);

-- --------------------------------------------------------

--
-- Definición de la tabla Recorrido
--

DROP TABLE IF EXISTS Recorrido;

CREATE TABLE Recorrido (
	ID_recorrido INT AUTO_INCREMENT NOT NULL, 
		CONSTRAINT CP_recorrido PRIMARY KEY(ID_recorrido),
	f_ingreso DATETIME NOT NULL,
	punto_partida VARCHAR(25) NOT NULL,
	fecha DATETIME NOT NULL,
	n_cupones SMALLINT NOT NULL,
	precio MONEY NOT NULL,

	ID_ruta INT NOT NULL
		CONSTRAINT CF_recorrido_ruta
			REFERENCES Ruta (ID_ruta)
				ON UPDATE CASCADE ON DELETE NO ACTION
);