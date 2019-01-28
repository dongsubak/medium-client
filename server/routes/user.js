const usercontroller = require('./../controllers/user.ctrl')

module.exports = (router) => {
    router.route('/user/:id')
    .get(usercontroller.getUser)

    router.route('/user/profile/:id')
    .get(usercontroller.getUserProfile)

    router.route('/user')
    .get(usercontroller.addUser)

    router.route('/user/follower')
    .get(usercontroller.followUser)
}