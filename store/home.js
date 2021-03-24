import axios from "axios";
// PREFIX
export const HOME_NAMESPACE_PREFIX = 'home/'

// MUTATIONS TYPES
export const SET_HOME_SECTION_BG_IMAGE = 'setHomeSectionBGImageMutation'
export const SET_HOME_BUTTON_1 = 'setHomeButton1Mutation'
export const SET_HOME_BUTTON_2 = 'setHomeButton2Mutation'
export const SET_HOME_TITLE = 'setHomeTitleMutation'
export const SET_HOME_SUBTITLE = 'setHomeSubtitleMutation'
export const SET_HOME_IMAGE = 'setHomeImageMutation'

// ACTIONS TYPES
export const GET_HOME_SECTION_DATA = 'getHomeSectionDataAction'

export const state = () => ({
  homeBGImage: null,
  homeButton1: null,
  homeButton2: null,
  homeTitle: null,
  homeSubTitle: null,
});

export const mutations = {
  [SET_HOME_SECTION_BG_IMAGE](state, url) {
      state.homeBGImage = url
  },
  [SET_HOME_BUTTON_1](state, text) {
      state.homeButton1 = text
  },
  [SET_HOME_BUTTON_2](state, text) {
      state.homeButton2 = text
  },
  [SET_HOME_TITLE](state, title) {
      state.homeTitle = title
  },
  [SET_HOME_SUBTITLE](state, subtitle) {
      state.homeSubtitle = subtitle
  },
  [SET_HOME_IMAGE](state, url) {
      state.homeImage = url
  }
};

export const actions = {
  async [GET_HOME_SECTION_DATA]({ commit }) {

    const responseHome = await axios.get("http://localhost:5000/fake/home")

    commit(SET_HOME_SECTION_BG_IMAGE, responseHome.data.data.background_image.url)
    commit(SET_HOME_BUTTON_1, responseHome.data.data.button_1)
    commit(SET_HOME_BUTTON_2, responseHome.data.data.button_2)
    commit(SET_HOME_TITLE, responseHome.data.data.title)
    commit(SET_HOME_SUBTITLE, responseHome.data.data.subtitle)
    commit(SET_HOME_IMAGE, responseHome.data.data.image.url)

  }
};
