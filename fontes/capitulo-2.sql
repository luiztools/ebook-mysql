--2.1
mysqld -u root

--2.2
mysql -u root -p

--2.3
SELECT * FROM clientes;

--2.4
INSERT INTO clientes (nome, idade, uf) VALUES ('Luiz', 32, 'RS');

--2.5
SELECT * FROM clientes WHERE uf='RS';

--2.6
SELECT * FROM clientes WHERE uf='RS' OR uf='SC';

--2.7
SELECT * FROM clientes WHERE uf IN ('RS', 'SC');

--2.8
SELECT * FROM clientes WHERE idade >= 18;

--2.9
SELECT * FROM clientes WHERE nome LIKE 'L%';

--2.10
SELECT * FROM clientes WHERE nome LIKE 'L%' AND idade > 18;

--2.11
SELECT * FROM clientes WHERE idade > 18 LIMIT 10;

--2.12
SELECT * FROM clientes WHERE idade > 18 ORDER BY nome LIMIT 10;

--2.13
UPDATE clientes SET nome='Luiz Fernando', uf = 'RS' WHERE id=1;

--2.14
DELETE FROM clientes WHERE id=2;