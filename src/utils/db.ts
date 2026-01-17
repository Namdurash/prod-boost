import { open } from 'react-native-nitro-sqlite';

let db: ReturnType<typeof open> | null = null;

export function getDB() {
  if (!db) {
    db = open({ name: 'myDb.sqlite' });
    db.execute(`PRAGMA journal_mode=WAL;`);
    db.execute(`PRAGMA synchronous=NORMAL;`);
    db.execute(`PRAGMA foreign_keys=ON;`);
  }
  return db;
}

export function closeDB() {
  if (db) {
    db.close();
    db = null;
  }
}
