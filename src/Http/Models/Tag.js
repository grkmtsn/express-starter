module.exports = function (sequelize, DataTypes) {
    const Tag = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER(5),
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING(128),
        description: DataTypes.TEXT('tiny'),
    }, {
        underscored: true
    });

    Tag.associate = function (models) {
        Tag.belongsToMany(models.article, {as: 'Articles', through: 'article_tags', foreignKey: 'tag_id'})
    };

    return Tag;
};