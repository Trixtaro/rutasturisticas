-- Tiempo de generación de este archivo: 29-11-2019 a las 07:19:05
-- 
-- Proyecto
-- Ingeniería de Interfaces
-- Noveno Semestre / Paralelo "A" 
-- Docente Guía
-- 		Ing. Veloz Zambrano Jorge Luis
-- Periodo Aacadémico
-- 		Octubre  2019 - Febrero 2020
-- Equipo Responsable
-- 		Briones Cedeño Cinthya Stephanie
-- 		Cedeño Mendoza Wilmer David
-- 		Giler Velásquez Gema Briggite
-- 		Marcillo Delgado Bryan Steeven
-- 		Suárez Aragundy José Luis

DROP PROCEDURE IF EXISTS INGRESAR_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_PERSONA (
	IN NOMBRES VARCHAR(50),
	IN APELLIDO_PATERNO VARCHAR(15),
	IN APELLIDO_MATERNO VARCHAR(15),
	IN CEDULA VARCHAR(10),
	IN PASAPORTE VARCHAR(15),
	IN F_NACIMIENTO DATE,
	IN NACIONALIDAD VARCHAR(20),
	IN GENERO CHAR(1)
)
BEGIN
	INSERT INTO Persona (
		f_ingreso,
		nombres,
		apellido_paterno,
		apellido_materno,
		cedula,
		pasaporte,
		f_nacimiento,
		nacionalidad,
		genero
	) VALUES (
		NOW(),
		NOMBRES,
		APELLIDO_PATERNO,
		APELLIDO_MATERNO,
		CEDULA,
		PASAPORTE,
		F_NACIMIENTO,
		NACIONALIDAD,
		GENERO
	);
END$$

DELIMITER ;