import { getDB } from '../utils/db';

type SqlValue = string | number | boolean | null | Uint8Array | Date;
type SelectCols<T> = '*' | readonly (keyof T)[];

const toDbValue = (v: SqlValue): string | number | null | ArrayBuffer => {
  if (v instanceof Date) return v.toISOString();
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (v instanceof Uint8Array) return v.buffer.slice(0) as ArrayBuffer;
  return v;
};

export class QueryManager {
  createTable = async (tableName: string, tableColumns: string[]) => {
    const db = getDB();
    return await db.executeAsync(
      `CREATE TABLE IF NOT EXISTS "${tableName}" (${tableColumns.join(',')});`,
    );
  };

  dropTable = async (tableName: string) => {
    const db = getDB();
    return await db.executeAsync(`DROP TABLE IF EXISTS "${tableName}";`);
  };

  insert = async <T extends object>(
    tableName: string,
    values: Partial<{ [K in keyof T]: SqlValue }>,
  ) => {
    const db = getDB();

    const columns = Object.keys(values) as (keyof T)[];
    if (columns.length === 0) {
      return db.executeAsync(`INSERT INTO "${tableName}" DEFAULT VALUES;`);
    }

    const placeholders = columns.map(() => '?').join(', ');
    const columnSql = columns.map(c => `"${String(c)}"`).join(', ');
    const params = columns.map(c => toDbValue(values[c] as SqlValue));

    const sql = `INSERT INTO "${tableName}" (${columnSql}) VALUES (${placeholders});`;
    return db.executeAsync(sql, params);
  };

  update = async <T extends object>(
    tableName: string,
    columnsToChange: readonly (keyof T)[],
    newValues: readonly SqlValue[],
    conditionSql: string,
    conditionParams: readonly SqlValue[] = [],
  ) => {
    const db = getDB();
    if (columnsToChange.length !== newValues.length) {
      throw new Error('columnsToChange and newValues length mismatch');
    }

    const setClause = columnsToChange
      .map(col => `"${String(col)}" = ?`)
      .join(', ');

    const sql = `UPDATE "${tableName}" SET ${setClause} WHERE ${conditionSql};`;
    const params = [
      ...newValues.map(toDbValue),
      ...conditionParams.map(toDbValue),
    ];

    return await db.executeAsync(sql, params);
  };

  delete = async (tableName: string, condition: string) => {
    const db = getDB();
    return await db.executeAsync(
      `DELETE FROM "${tableName}" WHERE ${condition};`,
    );
  };

  select = async <T extends object>({
    valuesToSelect,
    tableName,
    conditionSql,
    conditionParams = [],
  }: {
    valuesToSelect: SelectCols<T>;
    tableName: string;
    conditionSql?: string;
    conditionParams?: (string | number | boolean | null)[];
  }) => {
    const db = getDB();

    const selectClause =
      valuesToSelect === '*'
        ? '*'
        : valuesToSelect.map(c => `"${String(c)}"`).join(', ');

    const sql = conditionSql
      ? `SELECT ${selectClause} FROM "${tableName}" WHERE ${conditionSql};`
      : `SELECT ${selectClause} FROM "${tableName}";`;

    return db.executeAsync(sql, conditionParams);
  };
}

export const queryExecutor = new QueryManager();
