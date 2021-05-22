const commentFormHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#post-id").value;
  const body = document.querySelector("#comment-input-post").value;

  if (body) {
    await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({ postId, body }),
      headers: { "Content-Type": "application/json" },
    });

    document.location.reload();
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
