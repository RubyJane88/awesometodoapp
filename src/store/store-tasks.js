const state = {
  tasks: [
    {
      id: 1,
      name: "Go to shop",
      completed: false,
      dueDate: "2020/03/25",
      dueTime: "16:00",
    },

    {
      id: 2,
      name: "Gone bananas",
      completed: true,
      dueDate: "2020/03/26",
      dueTime: "18:00",
    },

    {
      id: 3,
      name: "Get going",
      completed: false,
      dueDate: "2020/04/23",
      dueTime: "16:00",
    },
  ],
};

const mutations = {};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
