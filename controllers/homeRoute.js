const router = require('express').Router();

const {  User, Challenge } = require('../models');

// const withAuth = require('../utils/auth');

router.get('/',  async (req, res) => {
    try {
        const challengeData = await Challenge.findAll({
            attributes: [
                'id',
                'title',
                'description',
                'starting_date',
                'ending_date',
                'repetitions'
            ],
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ]
        })
        const challenges = challengeData.map(challenge=> challenge.get({ plain: true }));

        // Pass challenge data and session flag into template
    // res.render('homepage', { 
    //     challenges,
    //     logged_in: 
    //     req.session.logged_in
    //   });
    res.status(200).json(challenges);
    } catch (err){
        res.status(500).json(err);  
    }
});

router.get('/challenge/:id',  async (req, res) => {
    try {
        const challengeData  = await Challenge.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'description',
                'starting_date',
                'ending_date',
                'repetitions'
            ],
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ]
        })
        const challenge = challengeData.get({ plain: true });

        // Pass challenges data and session flag into template
    // res.render('single-challenge', { 
    //     challenge,
    //     logged_in: 
    //     req.session.logged_in
    //   });
    
    res.status(200).json(challenge);
    } catch (err) {
        res.status(500).json(err);
      }

});

module.exports = router;
