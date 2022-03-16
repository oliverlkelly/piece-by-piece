const router = require('express').Router();
const { Challenge, User } = require('../../models');


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

  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { name: req.body.name } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'No user with that username!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
      console.log(validPassword);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.email = newUser.email;
        req.session.logged_in = true;
  
        res.json({ userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;