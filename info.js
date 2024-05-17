const form = document.querySelector("#UserInfo");
async function sendData() {
    const formData = new FormData(form);
    try {
        const response = await fetch("localhost/post", {method: "POST",
            body: formData,
        });
        console.log(await response.json());
    } catch (e) {
        console.error(e);
     }
    }
    form.addEventListener("submit",
    (event) => {
        event.preventDefault();
    sendData();
    });
