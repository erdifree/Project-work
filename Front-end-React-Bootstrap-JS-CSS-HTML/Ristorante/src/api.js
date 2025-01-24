const BASE_URL_USERS = "http://localhost:8080/api1";

//////////////////Service Rest Table//////////////////////////
export const geTable = async () => {
  try {
    const response = await fetch(BASE_URL_USERS + "/tables");
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getTableById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/tables/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
//////////////////Service Rest Order//////////////////////////
export const getOrder = async (type) => {
  try {
    const response = await fetch(
      BASE_URL_USERS + "/orders/ispayed?flag=" + type
    );
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getOrderDTO = async (type) => {
  try {
    const response = await fetch(
      `${BASE_URL_USERS}/orders/orderdto/get?flag=false` 
    );
    const data = await response.json();
    if(data===[]){
      return console.log("Ciao ciao");
    }
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postOrderApi = async (order, id) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/orders/table/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const putOrderApi = async (order, id) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/orders/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const updatePaymentApi = async (order, id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/orders/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};


export const updatePaymentDTOApi = async (order, id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/orders/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const deliteOrderApi = async (orderId) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/orders/${orderId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

///////////////Foods REST SERVICE////////////////////////

export const getFoods = async () => {
  try {
    const response = await fetch(BASE_URL_USERS + "/foods");
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getFoodsByType = async (key) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/foods/category" + "?type=" + key);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deliteFoodApi = async (userId, taskId) => {
  try {
    const response = await fetch(
      `${BASE_URL_USERS}/${userId}/food/${taskId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postFoodApi = async (food) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/foods`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

///////////////Drinks REST SERVICE////////////////////////

export const getDrinks = async () => {
  try {
    const response = await fetch(BASE_URL_USERS + "/foods");
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getDrinksByType = async (key) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/drinks/category" + "?type=" + key);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deliteDrinksApi = async (drinkid) => {
  try {
    const response = await fetch(
      `${BASE_URL_USERS}/drink/${drinkid}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postDrinkApi = async (drink) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/drinks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(drink),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
