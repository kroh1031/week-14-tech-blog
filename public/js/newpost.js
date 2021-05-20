const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input-post").value;
  const body = document.querySelector("#content-input-post").value;

  if (title && body) {
    const response = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to post.");
    }
  }
};

document
  .querySelector("#post-form")
  .addEventListener("submit", postFormHandler);
