import { ADD_ARTICLE , CHANGE_COLOR} from "../constants/action-types";

const initialState = {
  articles: [],
  color: ['#ff0000ff', '#00ff00ff', '#0000ffff','#ff00f0ff', '#00fff0ff', '#0f00f000','#ff000fff', '#0fff00ff', '#ff00ffff' ],
  data_chart: [  ["Color", "New Color"],[0, 0],[1, 3],[2, 4],[3, 2],[4, 1]],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  else if(action.type === CHANGE_COLOR){
    return Object.assign({}, state, {
      color: state.color.concat(action.payload)
    });	
  }
  return state;
}

export default rootReducer;