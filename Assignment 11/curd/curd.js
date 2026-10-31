
const postsContainer = document.getElementById("posts");
const reloadBtn = document.getElementById("reloadBtn");
const postForm = document.getElementById("postForm");
const message = document.getElementById("message");
const loading = document.getElementById("loading");

let posts = [];

// GET: Load first 6 posts
async function loadPosts() {
  loading.textContent = "Loading posts...";
  message.textContent = "";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );

    console.log("GET Status:", response.status);

    if (!response.ok) {
      throw new Error(`GET failed: ${response.status}`);
    }

    posts = await response.json();
    renderPosts();

    message.textContent = "Posts loaded successfully!";
  } catch (error) {
    message.textContent = "Error: " + error.message;
    console.error("GET Error:", error);
  } finally {
    loading.textContent = "";
  }
}

// Display all posts
function renderPosts() {
  postsContainer.innerHTML = "";

  posts.forEach(post => {
    const card = document.createElement("div");
    card.style.border = "1px solid gray";
    card.style.padding = "12px";
    card.style.margin = "10px 0";
    card.style.borderRadius = "8px";

    const title = document.createElement("h3");
    title.textContent = post.title;

    const postId = document.createElement("p");
    postId.textContent = `Post ID: ${post.id}`;

    const userId = document.createElement("p");
    userId.textContent = `User ID: ${post.userId}`;

    const body = document.createElement("p");
    body.textContent = post.body;

    card.append(title, postId, userId, body);

    // PUT button
    const putBtn = document.createElement("button");
    putBtn.textContent = "PUT Full Post";
    putBtn.classList.add("putBtn");

    putBtn.addEventListener("click", async () => {
      const newTitle = prompt("Enter new title:", post.title);
      if (newTitle === null) return;

      const newBody = prompt("Enter new content:", post.body);
      if (newBody === null) return;

      const newUserId = prompt("Enter user ID:", post.userId);
      if (newUserId === null || !newUserId.trim()) return;

      await updatePost(post, {
        title: newTitle,
        body: newBody,
        userId: Number(newUserId)
      }, "PUT");
    });

    // PATCH title button
    const patchTitleBtn = document.createElement("button");
    patchTitleBtn.textContent = "PATCH Title";
patchTitleBtn.classList.add('patchTitleBtn')
    patchTitleBtn.addEventListener("click", async () => {
      const newTitle = prompt("Enter new title:", post.title);
      if (newTitle === null) return;

      await updatePost(post, { title: newTitle }, "PATCH");
    });

    // PATCH body button
    const patchBodyBtn = document.createElement("button");
    patchBodyBtn.textContent = "PATCH Body";
    patchBodyBtn.classList.add('patchBodyBtn')

    patchBodyBtn.addEventListener("click", async () => {
      const newBody = prompt("Enter new content:", post.body);
      if (newBody === null) return;

      await updatePost(post, { body: newBody }, "PATCH");
    });

    // DELETE button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE Post";
deleteBtn.classList.add('deleteBtn')
    deleteBtn.addEventListener("click", async () => {
      if (!confirm(`Delete post ${post.id}?`)) return;

      await deletePost(post);
    });

    card.append(
      putBtn,
      document.createTextNode(" "),
      patchTitleBtn,
      document.createTextNode(" "),
      patchBodyBtn,
      document.createTextNode(" "),
      deleteBtn
    );

    postsContainer.appendChild(card);
  });
}

// POST: Add a new post
postForm.addEventListener("submit", async event => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const userId = Number(document.getElementById("userId").value);
  const body = document.getElementById("body").value.trim();

  if (!title || !body || !Number.isInteger(userId) || userId < 1) {
    message.textContent = "Please enter valid post details.";
    return;
  }

  message.textContent = "Adding post...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, userId, body })
      }
    );

    console.log("POST Status:", response.status);

    if (!response.ok) {
      throw new Error(`POST failed: ${response.status}`);
    }

    const newPost = await response.json();

    // Add to local page state
    posts.unshift(newPost);
    renderPosts();

    postForm.reset();
    message.textContent = "Post added successfully!";
  } catch (error) {
    message.textContent = "Error: " + error.message;
    console.error("POST Error:", error);
  }
});

// PUT / PATCH: Update a post
async function updatePost(post, changes, method) {
  message.textContent = `${method}: Updating post...`;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(changes)
      }
    );

    console.log(`${method} Status:`, response.status);

    if (!response.ok) {
      throw new Error(`${method} failed: ${response.status}`);
    }

    const result = await response.json();

    // Merge API response into local state
    Object.assign(post, result, changes);
    renderPosts();

    message.textContent = `${method} successful!`;
  } catch (error) {
    message.textContent = "Error: " + error.message;
    console.error(`${method} Error:`, error);
  }
}

// DELETE: Remove a post
async function deletePost(post) {
  message.textContent = "Deleting post...";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      { method: "DELETE" }
    );

    console.log("DELETE Status:", response.status);

    if (!response.ok) {
      throw new Error(`DELETE failed: ${response.status}`);
    }

    posts = posts.filter(item => item !== post);
    renderPosts();

    message.textContent = `Post ${post.id} deleted successfully!`;
  } catch (error) {
    message.textContent = "Error: " + error.message;
    console.error("DELETE Error:", error);
  }
}

// Reload button
reloadBtn.addEventListener("click", loadPosts);

// Load posts when the page opens
loadPosts();
