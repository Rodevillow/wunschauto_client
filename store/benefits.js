import axios from "axios";

// PREFIX
export const BENEFITS_NAMESPACE_PREFIX = 'benefits/'

// MUTATIONS TYPES
export const SET_BENEFITS_TITLE = 'setBenefitsTitleMutation'
export const SET_BENEFITS_DESCRIPTION = 'setBenefitsDescriptionMutation'
export const SET_BENEFITS_LIST = 'setBenefitsListMutation'

// ACTIONS TYPES
export const GET_BENEFITS_SECTION_DATA = 'getBenefitsSectionDataAction'

export const state = () => ({
  title: null,
  description: null,
  list: []
});

export const mutations = {
  [SET_BENEFITS_TITLE](state, title) {
      state.title = title
  },
  [SET_BENEFITS_DESCRIPTION](state, description) {
      state.description = description
  },
  [SET_BENEFITS_LIST](state, benefits) {
      state.list = benefits
  }
};

export const actions = {
  async [GET_BENEFITS_SECTION_DATA]({ commit }) {
    const response = await axios.get("http://localhost:5000/fake/benefits")

    commit(SET_BENEFITS_TITLE, response.data.data.title)
    commit(SET_BENEFITS_DESCRIPTION, response.data.data.subtitle)
    commit(SET_BENEFITS_LIST, response.data.data.vorteile)
  }
};
