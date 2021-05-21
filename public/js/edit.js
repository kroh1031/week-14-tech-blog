const postId = document.querySelector("#post-id").value;

const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input-post").value;
  const body = document.querySelector("#content-input-post").value;

  if (title && body) {
    await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    document.location.replace("/dashboard");
  }
};

document
  .querySelector("#edit-form")
  .addEventListener("submit", editFormHandler);
