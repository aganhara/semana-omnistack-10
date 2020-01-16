const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
  
    try {
      let dev = await Dev.findOne({ github_username });

      if (dev) {
        return res.json(dev);
      }

      const response = await axios.get(`https://api.github.com/users/${github_username}`);
      
      const { name = login, bio, avatar_url } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };
  
      dev = await Dev.create({
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location,
      });
  
      return res.json(dev);
    } catch(error) {
      const { status, statusText } = error.response;
  
      return res.status(status).json({ error: statusText});
    }
  },

  async update(req, res) {
    // TODO update name, avatar, techs, localização
  },

  async destroy(req, res) {
    // TODO remover usuário
  }
};