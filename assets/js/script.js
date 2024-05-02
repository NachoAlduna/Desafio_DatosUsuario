const userData = (() => {
  const container = document.querySelector("#user-data");
  return {
    show: async () => {
      let response = await fetch("https://randomuser.me/api/?results=10");
      let data = await response.json();
      const userInfo = data.results
        .map(
          (i) =>
            `<div class="container d-flex justify-content-center">
        <div class="gap-4 py-md-1 align-items-center" style="width: 400px;">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-1" aria-current="true">
              <img src='${i.picture.large}' alt="twbs" width="100" height="100" class="rounded-circle flex-shrink-0">
              <div class="d-flex gap-3 flex-grow-1">
                <div>
                  <h6 class="mb-0"><span class="fw-bold fs-5">${i.name.first} ${i.name.last} </span> </h6>
                  <p class="mb-0 opacity-75 fs-6"><span>${i.email} </span></p>
                  <p class="mb-0 opacity-75 fs-6"><span>${i.cell} </span></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>`
        )
        .join("");
      container.innerHTML = userInfo;
    },
  };
})();
userData.show();
