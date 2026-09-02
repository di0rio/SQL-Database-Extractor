export interface SqlDump {
  databases: Database[]
  preamble: string      // SET statements before first database
  postamble: string     // trailing statements after last database
}

export interface Database {
  name: string
  createStatement: string   // CREATE DATABASE statement (full SQL text)
  useStatement: string      // USE statement
  tables: Table[]
}

export interface Table {
  name: string
  database: string
  createStatement: string     // Full CREATE TABLE DDL
  insertStatements: string[]  // All INSERT INTO statements
  indexes: string[]           // Separate CREATE INDEX statements if any
  lockStatement?: string      // LOCK TABLES statement
  unlockStatement?: string    // UNLOCK TABLES statement
}

export interface ExtractionOptions {
  database: string
  tables: string[] | 'all'
}

export interface ExtractionResult {
  sql: string
  database: string
  tableCount: number
}
