-- 테이블 내의 값 전부 선택하기
SELECT * FROM table_name;

-- country를 제외한 고객들의 수
SELECT COUNT(DISTINCT country) FROM customer;

SELECT COUNT(*) AS distinct_countries
FROM (SELECT DISTINCT country FROM customers);

-- 특정 칼럼에만 값을 넣는경우
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);

-- 전체 칼럼에 모두 넣을 경우
INSERT INTO table_name
VALUES (value1, value2, value3);


-- Null 구분
SELECT *
FROM table_name
WHERE column_name IS NULL;

SELECT *
FROM table_name
WHERE column_name IS NOT NULL;

-- 제한 두기
-- SQL server, ms
SELECT TOP number 
FROM table_name
WHERE condition;

-- MySQL
SELECT *
FROM table_name
WHERE condition
LIMIT number;

-- oracle order by


-- Min & Max
SELECT MAX(column_name)
FROM table_name
WHERE condition;


-- COUNT AVG SUM
SELECT *
FROM table_name
WHERE column_name LIKE 'a%'; -- a로 시작하는 칼럼명

SELECT *
FROM table_name
WHERE column_name NOT LIKE 'a%'; -- a로 시작하지 않는 칼럼명

-- IN 구문
SELECT *
FROM table_name
WHERE column_name IN (value1, value2);

SELECT *
FROM table_name
WHERE column_name IN (SELECT statement);

-- Between
SELECT *
FROM table_name
WHERE column_name BETWEEN value1 AND value2;

-- Insert into
INSERT INTO table_name(column1, column2)
SELECT column1, column2
FROM table_name
WHERE condition;

-- CASE
CASE 
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN condition3 THEN result3
    ELSE result4
END;





