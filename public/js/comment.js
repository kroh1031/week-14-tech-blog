const getComments = async () => {
  const allComments = await fetch("/api/comments/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return allComments.json();
};

const commentFormHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#post-id").value;
  const body = document.querySelector("#comment-input-post").value;

  try {
    const allComments = await getComments();
    console.log(allComments);
    if (body) {
      await fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({ postId, body }),
        headers: { "Content-Type": "application/json" },
      });

      // document.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
