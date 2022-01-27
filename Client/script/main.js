async function getData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const message = "Error roy berdi, va status kodi: " + response.status;
        throw new Error(message);
      }
      const data = await response.json();
      return data;
    }
     catch (error) {
      console.log(error);
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