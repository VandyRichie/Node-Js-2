const form = document.querySelector("#UserInfo");

form.addEventListener("submit",  async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch("https://4000-vandyrichie-nodejs2-3qkxmfznq2h.ws-eu114.gitpod.io/post",  {
            method:  "POST", 
            body:  formData, 
        });
        console.log(await response.json());
    } catch (e) {
        console.error(e);
    }
});
