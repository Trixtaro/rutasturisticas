-- Tiempo de generación de este archivo: 29-11-2019 a las 07:29:20
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

-- ========================================================

--
-- Definición del disparador VERIFICAR_CAMPOS_PERSONA;
--

DROP TRIGGER IF EXISTS VERIFICAR_CAMPOS_PERSONA;

DELIMITER $$

CREATE TRIGGER VERIFICAR_CAMPOS_PERSONA BEFORE INSERT ON persona
-- Verifica, cuando se ejecuta una inserción, que el campo 'pasaporte' y 'f_nacimiento'
-- no esten vacios, sino estarán en NULL
FOR EACH ROW
BEGIN
	IF NEW.pasaporte = '' THEN
		SET NEW.pasaporte = NULL;
	END IF;
	IF NEW.f_nacimiento = '' THEN
		SET NEW.f_nacimiento = NULL;
	END IF;
END$$ 

DELIMITER ;