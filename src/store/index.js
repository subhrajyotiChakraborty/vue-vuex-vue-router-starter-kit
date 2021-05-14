/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import Vue from "vue";
import Vuex from "vuex";

import { instance } from "../axios";

Vue.use(Vuex);

const state = {
  users: [
    {
      name: "Subha"
    }
  ],
  todos: [],
  details: {}
};

const mutations = {
  getTodos(state, payload) {
    const updatedState = [...state.todos, ...payload];
    state.todos = updatedState;
  },
  getTodoDetails(state, payload) {
    state.details = payload;
  },
  resetTodoDetails(state, payload) {
    state.details = {};
  }
};

const actions = {
  async getAsyncTodods({ commit, state }) {
    const response = await instance.get("/");
    commit("getTodos", response.data);
  },

  async getTodoDetailsAsync({ commit, state }, todoID) {
    const response = await instance.get(`/${todoID}`);
    commit("getTodoDetails", response.data);
  }
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions
});
