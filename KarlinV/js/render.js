const listData = document.querySelector(".collection");

export const render = (data) => {
  listData.innerHTML = "";

  const dataItem = document.createElement("li");

  dataItem.classList.add("collection-item");

  if (typeof data !== "object") {
    dataItem.textContent = data;

    dataItem.classList.add("err");
  } else {
    dataItem.textContent = `${data.name} is ${data.gender}`;
  }

  listData.append(dataItem);
};
