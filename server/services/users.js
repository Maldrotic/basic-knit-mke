module.exports = db => {

  const authService = require('./auth')(db);

  const getByEmail = async (email) => {
    const results = await db.query(`SELECT
                                      u.id as user_id,
                                      u.name,
                                      u.email,
                                      u.password_hash,
                                      ut.id as user_type_id,
                                      ut.name as user_type_name
                                    FROM users u
                                    JOIN user_types ut ON ut.id = u.user_type_id
                                    WHERE u.email = ?`, [email]);

    if (results.length === 1) {
      const row = results[0];
      return {
        id: row.id,
        name: row.name,
        email: row.email,
        passwordHash: row.password_hash,
        type: {
          id: row.user_type_id,
          name: row.user_type_name
        }
      };
    } else {
      return null;
    }
  };

  const insertUser = async ({email = '', passwordHash = '', userTypeId = 1} = {}) => {
    try {
      const result = await db.query(`INSERT INTO users (email, password_hash, user_type_id)
                                     VALUES (?, ?, ?)`, [email, passwordHash, userTypeId]);
      const userId = result.insertId;
      return {
        error: undefined,
        user: {
          id: userId,
          email: email,
          userTypeId: userTypeId
        }
      };
    } catch (err) {
      if (err.code && err.code === 'ER_DUP_ENTRY') {
        return {
          error: {
            message: 'That email has been used to create an account, try another.'
          },
          user: undefined
        };
      }
    }
  };


  return {
    insertUser,
    getByEmail
  };

};