loadMorePhotos();
let page = 1;
async function fetchPhotos() {
  // const apiKey = "J1YP-1";
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=4&client_id=J1YP-4khM09VwTucLBkrtVAw91pojlz46ncIXIS8fcI`
    );
    const photos = await response.json(); //photos/random?client_id=ВАШ_API_КЛЮЧ
    console.log("успешно");
    return photos;
  } catch (error) {
    console.log("Не успешно");
    console.error("Ошибка при загрузке фотографии: ", error);
    return [];
  }
}

let idCount = localStorage.getItem("userId") ? parseInt(localStorage.getItem("userId")) : 1;
const updateId = () => {
  idCount++;

  localStorage.setItem("userId", idCount.toString());
  return idCount;
};

async function loadMorePhotos() {
  const photos = await fetchPhotos();
  let id;
  if (photos.length > 1) {
    photos.forEach((photo) => {
      const photoElement = document.createElement("div");
      photoElement.setAttribute("data-id", `${updateId()}`);
      photoElement.classList.add("photo");

      const img = document.createElement("img");
      img.classList.add("content-img");
      const nameAuthor = document.createElement("p");
      nameAuthor.classList.add("content-author");

      const userLike = document.createElement("p");
      userLike.classList.add("user-like");

      const btn = document.createElement("button");
      btn.setAttribute("data-card", "button");
      btn.classList.add("like-btn");

      img.src = photo.urls.small;
      img.alt = photo.alt_description;
      nameAuthor.textContent = photo.user.name;
      userLike.textContent = "0";
      btn.textContent = "лайк";

      photoElement.appendChild(img);
      photoElement.appendChild(nameAuthor);
      photoElement.appendChild(userLike);
      photoElement.appendChild(btn);
      content.appendChild(photoElement);
    });
  } else {
      const photoElement = document.createElement("div");
      photoElement.setAttribute("data-id", `${updateId()}`);
      photoElement.classList.add("photo");

      const img = document.createElement("img");
      img.classList.add("content-img");
      const nameAuthor = document.createElement("p");
      nameAuthor.classList.add("content-author");

      const userLike = document.createElement("p");
      userLike.classList.add("user-like");

      const btn = document.createElement("button");
      btn.setAttribute("data-card", "button");
      btn.classList.add("like-btn");

      img.src = photos.urls.small;
      img.alt = photos.alt_description;
      nameAuthor.textContent = photo.user.name;
      userLike.textContent = "0";
      btn.textContent = "лайк";

      photoElement.appendChild(img);
      photoElement.appendChild(nameAuthor);
      photoElement.appendChild(userLike);
      photoElement.appendChild(btn);
      content.appendChild(photoElement);
  }
}
