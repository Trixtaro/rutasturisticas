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

-- ========================================================
-- =                                                      =
-- =  PROCEDMIENTOS ALMACENADOS                           =
-- =                                                      =
-- ========================================================

-- ========================================================

--
-- Definición del procedimiento INGRESAR_PERSONA
--

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

-- ========================================================

--
-- Definición del procedimiento INGRESAR_TELEFONO_POR_ID_PERSONA
--

DROP PROCEDURE IF EXISTS INGRESAR_TELEFONO_POR_ID_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_TELEFONO_POR_ID_PERSONA (
	IN NUMERO VARCHAR(10),
	IN OPERADORA VARCHAR(25),
	IN ID_PERSONA INT
)
BEGIN
	INSERT INTO Telefono (
		numero,
		operadora,
		f_ingreso,
		ID_persona
	) VALUES (
		NUMERO,
		OPERADORA,
		NOW(),
		ID_PERSONA
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_TELEFONO_POR_CEDULA_PERSONA
--

DROP PROCEDURE IF EXISTS INGRESAR_TELEFONO_POR_CEDULA_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_TELEFONO_POR_CEDULA_PERSONA (
	IN NUMERO VARCHAR(10),
	IN OPERADORA VARCHAR(25),
	IN CEDULA VARCHAR(10)
)
BEGIN
	IF ( GET_ID_PERSONA_POR_CEDULA(CEDULA) = 0 ) THEN
		SELECT '0' AS RESULTADO;
	ELSE
		INSERT INTO Telefono (
			numero,
			operadora,
			f_ingreso,
			ID_persona
		) VALUES (
			NUMERO,
			OPERADORA,
			NOW(),
			GET_ID_PERSONA_POR_CEDULA(CEDULA)
		);
	END IF;
END$$

DELIMITER ;

-- ========================================================
-- =                                                      =
-- =  FUNCIONES                                           =
-- =                                                      =
-- ========================================================

-- ========================================================

--
-- Definición de la función GET_ID_PERSONA_POR_CEDULA
--

DROP FUNCTION IF EXISTS GET_ID_PERSONA_POR_CEDULA;

DELIMITER $$

CREATE FUNCTION GET_ID_PERSONA_POR_CEDULA (
  CEDULA VARCHAR(10)
) RETURNS INT
BEGIN
  DECLARE ID_RESULTADO INT DEFAULT 0;
  SET ID_RESULTADO = ( SELECT ID_persona FROM Persona WHERE Persona.cedula = CEDULA );
  IF ( ID_RESULTADO IS NOT NULL ) THEN
    RETURN ID_RESULTADO;
  ELSE
    RETURN '0';
  END IF;
END$$

DELIMITER ;