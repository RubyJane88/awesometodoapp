import Vue from "vue";

const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2020/03/25",
      dueTime: "16:00",
    },

    ID2: {
      name: "Gone bananas",
      completed: true,
      dueDate: "2020/03/26",
      dueTime: "18:00",
    },

    ID3: {
      name: "Cancel 2020 and install 2021",
      completed: true,
      dueDate: "2020/12/31",
      dueTime: "18:00",
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    console.log("payload (from mutation): ", payload);
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    console.log("delete id", id);
    Vue.delete(state.tasks, id);
  },
};

const actions = {
  updateTask({ commit }, payload) {
    console.log("updateTask action");
    console.log("payload", payload);
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
    Vue.delete(state.tasks, id);
  },
};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
