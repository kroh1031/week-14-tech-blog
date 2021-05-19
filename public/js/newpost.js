const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input-post").value.trim();
  const body = document.querySelector("#content-input-post").value.trim();

  if (username && password) {
    const response = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post.");
    }
  }
};

document
  .querySelector("#post-form")
  .addEventListener("submit", postFormHandler);
