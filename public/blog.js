$(document).ready(function () {
  const getPosts = async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (response.ok) {
      let json = await response.json();
      displayPosts(json);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  const getUserName = async function (userId) {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    let response = await fetch(url);

    if (response.ok) {
      let json = await response.json();
      return json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  const displayPosts = async function (posts) {
    for (let post = 0; post < 30; post++) {
      let userName = await getUserName(posts[post].userId);
      posts[post].userName = userName.name;
      posts[post].email = userName.email;
      renderPost(posts[post]);
    }
  };

  getPosts();

  const renderPost = function (post) {
    $(".posts-list .row").append(
      '<div class="post col-6">' +
        "<h2>" +
        post.title +
        "</h2>" +
        "<small>By " +
        "<a href='mailto:" +
        post.email +
        "'>" +
        post.userName +
        "</a>" +
        "</small>" +
        "<p>" +
        post.body +
        "</p>" +
        "</div>"
    );
  };
});
