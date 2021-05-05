/*
SQL Member Count
Your table: maintable_T90KD

MySQL version: 5.5.56-log

In this MySQL challenge, your query should return the names of the people who are reported to (excluding null values), the number of members that report to them, and the average age of those members as an integer. The rows should be ordered by the names in alphabetical order. Your output should look like the following table.

Browse Resources
Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.
*/

SELECT
ReportsTo AS "ReportsTo",
COUNT(ReportsTo) AS "Members",
CAST(AVG(Age) AS DECIMAL(10,0)) As "Average Age"
FROM maintable_T90KD
WHERE ReportsTo IS NOT NULL
GROUP BY ReportsTo
ORDER BY ReportsTo;
