import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from '../api/index.js'

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK(context) {
    // return fetchAskList()
    //   .then(({ data }) => {
    //     commit('SET_ASK', data)
    //   })
    //   .catch(error => console.log(error))
    const response = await fetchAskList();
    context.commit('SET_ASK', response.data)
    return response;
  },
  async FETCH_JOBS(context) {
    // return fetchJobsList()
    //   .then(({ data }) => {
    //     commit('SET_JOBS', data)
    //   })
    //   .catch(error => console.log(error))
    try {
      const response = await fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }
  },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => console.log(error))
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => console.log(error))
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data)
    return response;
  }
}