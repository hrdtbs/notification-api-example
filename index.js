const div = document.createElement("div");
div.className = "alert";

const showAlert = () => {
  window.setTimeout(() => {
    document.querySelector("main").insertAdjacentElement("beforeend", div);
  }, 200);
  document.addEventListener("click", () => {
    if (document.body.contains(div)) {
      div.remove();
    }
  });
};

const showAllowNotificationsAlert = () => {
  div.style.top = "16px";
  div.style.left = "initial";
  div.style.right = "100px";
  div.innerText =
    '通知を受け取るには、🔕マークをクリックして"このサイトの通知を許可"を押してください。';
  showAlert();
};

const showUnrestrictNotificationsAlert = () => {
  div.style.top = "16px";
  div.style.left = "100px";
  div.style.right = "initial";
  div.innerText =
    '通知を受け取るには、ここの鍵をクリックして"通知"の権限を有効化してください。';
  showAlert();
};

const generateIcon = (seed) => {
  return `https://picsum.photos/id/${(seed * 9) % 500}/100/100`;
};
