var HTTPError = require('http-errors')
var router    = require('express').Router()
var models  = require('../models');

router.param('videoID', function(request, response, next) {
    return next();
});

router.route('/video')
    .get((req, res) => {
            models.Video.findAll().then(function(video) {
                res.jsonp({
                    status: 'success',
                    video: video
                })
            });
        })
    .post((req, res) => {
        models.Video.create(req.body)
            .then(function(video) {
                console.log(video)
                res.jsonp({
                    status: 'success',
                    video: video
                })
            })
            .catch(function(err) {
                console.log(err)
                res.jsonp({
                    status: 'error',
                    video: err
                })
            });
    })
router.route('/video/:videoID')
    .delete((req, res) => {
        models.Video.destroy( {
                where: {
                    id: req.params.videoID
                }
            })
            .then(function(video) {
                console.log(video)
                res.jsonp({
                    status: 'success',
                    video: video
                })
            })
            .catch(function(err) {
                console.log(err)
                res.jsonp({
                    status: 'error',
                    video: err
                })
            });
    })


module.exports = router