async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = "Error roy berdi, va status kodi: " + response.status;
      throw new Error(message);
    }
    const data = await response.json();
    // console.log(data);
    // return data;
    // console.log(data[1].title);
  } catch (error) {
    console.log(error);
  }
}

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      const message = "Error roy berdi, va status kodi: " + response.status;
      throw new Error(message);
    }
    // return response;
    return true;

  } catch (error) {
    console.log(error);
    return false;
  }
}


async function putData(url, data) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      const message = "Error roy berdi, va status kodi: " + response.status;
      throw new Error(message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteData(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      const message = "Error roy berdi, va status kodi: " + response.status;
      throw new Error(message);
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
