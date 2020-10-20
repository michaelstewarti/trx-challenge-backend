'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS "public"."users" ("id" BIGSERIAL,
                                                   "name" VARCHAR(35) NOT NULL,
                                                   "lastname" VARCHAR(35) NOT NULL,
                                                    "email" VARCHAR(255) NOT NULL UNIQUE,
                                                    "password" VARCHAR(60) NOT NULL,
                                                    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
                                                    "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL,
                                                    PRIMARY KEY ("id"));
      SELECT i.relname AS name,
             ix.indisprimary AS PRIMARY,
             ix.indisunique AS UNIQUE,
             ix.indkey AS indkey,
             array_agg(a.attnum) AS column_indexes,
             array_agg(a.attname) AS column_names,
             pg_get_indexdef(ix.indexrelid) AS definition
      FROM pg_class t,
           pg_class i,
           pg_index ix,
           pg_attribute a,
           pg_namespace s
      WHERE t.oid = ix.indrelid
        AND i.oid = ix.indexrelid
        AND a.attrelid = t.oid
        AND t.relkind = 'r'
        AND t.relname = 'users'
        AND s.oid = t.relnamespace
        AND s.nspname = 'public'
      GROUP BY i.relname,
               ix.indexrelid,
               ix.indisprimary,
               ix.indisunique,
               ix.indkey
      ORDER BY i.relname;`;

    return queryInterface.sequelize.query(sql, {
      type: Sequelize.QueryTypes.RAW,
    });
  },

  down: async (queryInterface, Sequelize) => {
    const sql = `DROP SCHEMA public CASCADE;`;
    return queryInterface.sequelize.query(sql, {
      type: Sequelize.QueryTypes.RAW,
    });
  },
};
