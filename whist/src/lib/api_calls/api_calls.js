import axios from "axios";

export function PostProduct(productObj) {
  axios
    .post(`api/products/new`, productObj)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function PutProduct(productObj, productId) {
  axios
    .put(`api/products/update/${productId}`, productObj)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function DeleteProduct(productId) {
  axios
    .delete(`api/products/delete/${productId}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function GetPorducts() {
  let answer = axios
    .get(`api/products/get`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return answer;
}

export function PostPurchase(purchaseArray) {
  axios
    .post(`api/transactions/purchase`, purchaseArray)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function GetTransactions() {
  let answer = axios
    .get(`api/transactions/fivedays`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return answer;
}

export function GetTopUnique() {
  let answer = axios
    .get(`api/stats/gettopunique`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return answer;
}

export function GetTopTotal() {
  let answer = axios
    .get(`api/stats/gettoptotal`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return answer;
}
