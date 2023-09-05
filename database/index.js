const sqlite3 = require("sqlite3").verbose();
const { now, getDaysSince } = require("../utils");

const db = new sqlite3.Database("./database/database.db", (err) => {
  if (err) throw err;

  console.log("database connected");
});

const create_tables = () => {
  /**
   * id      |    lastUpdate
   * bokoo   |    02.Jul.2023
   * poover  |    07.Aug.2021
   */
  return new Promise((res, reject) =>
    db.run(
      `CREATE TABLE IF NOT EXISTS days_since(
        id text,
        lastUpdate text,
        count INTEGER,
        UNIQUE(id)
    )`,
      (err, result) => {
        if (err) return reject(err);
        res(result);
      }
    )
  );
};

const run_migrations = () => {
  const days_since_migration = () => {
    const projects = ["bokoo", "poover"];

    return projects.map((project) =>
      db.run(
        `INSERT OR IGNORE INTO
            days_since(
                id, lastUpdate, count
            )
            VALUES('${project}', '${now()}', 1)`
      )
    );
  };

  return Promise.all(days_since_migration());
};

const getProject = (project) =>
  new Promise((res, reject) => {
    db.each(
      `SELECT * from days_since WHERE id='${project}'`,
      async (error, row) => {
        if (error) return reject(error);

        res(row);
      }
    );
  });

const updateProject = (project) =>
  new Promise((res) => {
    db.run(
      `UPDATE days_since SET lastUpdate='${now()}' WHERE id='${project}'`,
      null,
      res
    );
  });

const get_days_since_project = async (project) => {
  const { lastUpdate, count } = await getProject(project);

  const offset = getDaysSince(lastUpdate);
  if (offset === 0) return count;

  console.log(`updating ${project}...`);

  updateProject(project);

  return count + offset;
};

db.on("open", async () => {
  console.log("running migrations...");

  await create_tables();
  await run_migrations();

  db.emit("migrated");
});

module.exports = {
  db,
  functions: {
    get_days_since_project,
  },
};
