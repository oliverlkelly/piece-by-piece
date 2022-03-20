const router = require('express').Router();
const { User } = require('../../models');

// post method for user signup
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(
      {
        f_name: req.body.fName,
        l_name: req.body.lName,
        email: req.body.email,
        password: req.body.password
      });

      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.f_name = newUser.f_name;
        req.session.l_name = newUser.l_name;
        req.session.email = newUser.email;
        req.session.loggedIn = true;
  
        res.status(200).json(newUser);
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

// login route
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'No user with that email!' });
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
        req.session.email = userData.email;
        req.session.f_name = userData.f_name;
        req.session.l_name = userData.l_name;
        req.session.loggedIn = true;
  
        res.status(200).json({ userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  // logout route
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;