const scd = require("dataform-scd");

/**
 * Create an SCD table on top of the table defined in source_data.sqlx.
 */
const { updates, view } = scd("source_data_scd", {
  // A unique identifier for rows in the table.
  uniqueKey: "user_id",
  // A field that stores a timestamp or date of when the row was last changed.
  timestamp: "updated_at",
  // The source table to build slowly changing dimensions from.
  source: {
    schema: "dataform",
    name: "fonte",
  },
  // Any tags that will be added to actions.
  tags: ["slowly-changing-dimensions"],
  // Documentation of table columns
  columns: {coluna1: "coluna1", coluna2: "coluna2", updated_at: "Timestamp for updates"},
  // Configuration parameters to apply to the incremental table that will be created.
  incrementalConfig: {
    bigquery: {
      partitionBy: "updated_at",
    },
  },
});
