const response = (success, data) => {
  return { success, data };
};

class Controller {
  navBar(req, res) {
    res.json(response(true, require("../static/mock/navBar.json")));
  }

  sectionHome(req, res) {
    res.json(response(true, require("../static/mock/home.json")));
  }

  sectionCredentials(req, res) {
    res.json(response(true, require("../static/mock/credentials.json")));
  }

  sectionBenefits(req, res) {
    res.json(response(true, require("../static/mock/benefits.json")));
  }
}

module.exports = new Controller();
