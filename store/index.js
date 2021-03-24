import axios from "axios";

// MUTATIONS TYPES
export const SET_LOGO_URL = 'setLogoUrlMutation'
export const SET_NAV_BUTTON = 'setNavButtonMutation'
export const SET_NAV_LINKS = 'setNavLinksMutation'

// ACTIONS TYPES
export const GET_HEADER_DATA = 'getHeaderDataAction'

export const state = () => ({
  logoUrl: null,
  navButton: null,
  navLinks: []
});

export const mutations = {
  [SET_LOGO_URL](state, url) {
    state.logoUrl = url
  },
  [SET_NAV_BUTTON](state, buttonName) {
    state.navButton = buttonName
  },
  [SET_NAV_LINKS](state, links) {
    state.navLinks = links
  }
};

export const actions = {
  async [GET_HEADER_DATA]({ commit }) {

    const responseNavBar = await axios.get("http://localhost:5000/fake/navbar")

    commit(SET_LOGO_URL, responseNavBar.data.data.image_url)
    commit(SET_NAV_BUTTON, responseNavBar.data.data.button)
    commit(SET_NAV_LINKS, responseNavBar.data.data.page_links)

  }
};
