 const scd = require("dataform-scd");

 scd("source_data_scd", {
  uniqueKey: "coluna1",
  timestamp: "updated_at", // A field that stores a timestamp or date of when the row was last changed.
  source: {
    schema: "dataform",     // The source table to build slowly changing dimensions from.
    name: "fonte_copy",
  },
  columns: {coluna1: "coluna1", coluna1: "coluna2", updated_at: "Timestamp for updates"},
  incrementalConfig: {        // Any configuration parameters to apply to the incremental table that will be created.
    bigquery: {
      partitionBy: "updated_at",
    },
  },
});


// instalar um pacote no Dataform
// https://cloud.google.com/dataform/docs/install-package?hl=pt-br#import_a_package_to_a_repository_in