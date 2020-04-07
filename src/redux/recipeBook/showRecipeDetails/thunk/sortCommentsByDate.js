export const sortCommentsByDate = (data) => {
  let commentsSorted = data.comments.sort((a, b) => {
    return a.comment.date > b.comment.date ? -1 : 1;
  });
  return commentsSorted;
};
