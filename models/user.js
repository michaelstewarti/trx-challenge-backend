module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      name: {
        type: DataTypes.STRING(35),
        allowNull: false,
        field: 'name',
      },
      lastname: {
        type: DataTypes.STRING(35),
        allowNull: false,
        field: 'lastname',
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'email',
        unique: true,
      },
      password: {
        type: DataTypes.STRING(60),
        allowNull: false,
        field: 'password',
      },
    },
    {
      user: true,
      underscored: true,
      timestamps: true,
      tableName: 'users',
    },
  );
};
