const articleconstroller = require('./../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
  router.route('/articles')
  .get(articleconstroller.getAll)

  router.route('/article')
  .post(multipartWare, articleconstroller.addArticle)

  router.route('/article/clap')
  .post(articleconstroller.clapArticle)

  router.route('/article/comment')
  .post(articleconstroller.commentArticle)

  router.route('/article/:id')
  .get(articleconstroller.getArticle)
}