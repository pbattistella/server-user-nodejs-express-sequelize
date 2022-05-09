module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING(50),
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            unique:true
        },
        email: {
            type: Sequelize.STRING(70),
            notNull: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING(40),
            notNull: true
        }
    },
    {
        timestamps: false,
      }
)
    return User
}