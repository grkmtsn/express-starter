const SequelizeSlugify = require('sequelize-slugify')

module.exports = function (sequelize, DataTypes) {
    const Article = sequelize.define('article', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        canonical_title: DataTypes.STRING(255),
        slug: {
            type: DataTypes.STRING(255),
            unique: true
        },
        featured_image: DataTypes.STRING(255),
        short_content: DataTypes.TEXT('tiny'),
        content: DataTypes.TEXT('long'),
        status: DataTypes.TINYINT(1),
        view: DataTypes.INTEGER(11),
        featured: DataTypes.TINYINT(1),
    }, {
        underscored: true
    });

    Article.associate = function (models) {
        Article.belongsToMany(models.tag, {as: 'Tags', through: 'article_tags', foreignKey: 'article_id'})
    };

    SequelizeSlugify.slugifyModel(Article, {
        source: ['canonical_title']
    });

    return Article;
};