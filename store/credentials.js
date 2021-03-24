import axios from "axios";

// PREFIX
export const CREDENTIALS_NAMESPACE_PREFIX = 'credentials/'

// MUTATIONS TYPES
export const SET_CREDENTIALS_TITLE = 'setCredentialsTitleMutation'
export const SET_CREDENTIALS_SUBTITLE = 'setCredentialsSubtitleMutation'
export const SET_CREDENTIALS_CARDS = 'setCredentialsCardsMutation'

// ACTIONS TYPES
export const GET_CREDENTIALS_SECTION_DATA = 'getCredentialsSectionDataAction'

export const state = () => ({
  title: null,
  subtitle: null,
  cards: []
});

export const mutations = {
  [SET_CREDENTIALS_TITLE](state, title) {
      state.title = title
  },
  [SET_CREDENTIALS_SUBTITLE](state, subtitle) {
      state.subtitle = subtitle
  },
  [SET_CREDENTIALS_CARDS](state, cards) {
      state.cards = cards
  },
};

export const actions = {
  async [GET_CREDENTIALS_SECTION_DATA]({ commit }) {
    const response = await axios.get("http://localhost:5000/fake/credentials")

    commit(SET_CREDENTIALS_TITLE, response.data.data.title)
    commit(SET_CREDENTIALS_SUBTITLE, response.data.data.subtitle)
    commit(SET_CREDENTIALS_CARDS, response.data.data.referenzen)

  }
};
