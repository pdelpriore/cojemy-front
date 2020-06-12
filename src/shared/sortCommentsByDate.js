export const sortCommentsByDate = (data) => {
  return data.comments.sort((a, b) => {
    return a.comment.date > b.comment.date ? -1 : 1;
  });
};
