module.exports = db => {

  const authService = require('./auth')(db);

  const getByEmail = async (email) => {
    const results = await db.query(`SELECT
                                      u.id as user_id,
                                      u.name as name,
                                      u.email as email,
                                      u.password_hash as password_hash,
                                      u.user_type_id as user_type_id
                                    FROM users u
                                    WHERE u.email = ?`, [email]);

    if (results.length === 1) {
      const row = results[0];
      return {
        id: row.user_id,
        name: row.name,
        email: row.email,
        passwordHash: row.password_hash,
        userTypeId: row.user_type_id
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