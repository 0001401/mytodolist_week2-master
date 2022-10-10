// 투두 리스트를 만든다고 한다면, 투두리스트에 필요한 state들이 모두 모여 있을
// todos.js를 생성하게 될텐데 이 파일이 곧 하나의 모듈이 됩니다

const ADD_TODO = "ADD_TODO";
const CHECK_TODO = "CHECK_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const checkTodo = (payload) => {
  return {
    type: CHECK_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const initialState = [
  {
    id: 0,
    title: "헤어질 결심",
    body: "나는요, 완전히 붕괴됐어요",
    isDone: false,
  },
  {
    id: 1,
    title: "윤희에게",
    body: "추신. 아직도 네 꿈을 꿔",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = state[state.length - 1]?.id + 1 || 0;
      console.log(id);
      return [...state, { ...action.payload, id }];
    case CHECK_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todos, isDone: !todos.isDone };
        } else {
          return todo;
        }
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
