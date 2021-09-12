interface RecipeState extends React.ReducerState {
  likes: number;
  dislikes: number;
}

interface RecipeAction extends React.Dispatch {
  type: string;
}
