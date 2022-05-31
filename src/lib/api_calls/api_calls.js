import axios from "axios";

export function PostProduct(productObj) {
  axios
    .post(`http://localhost:4000/products/new`, productObj)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function PutProduct(productObj, productId) {
  axios
    .put(`http://localhost:4000/products/update/${productId}`, productObj)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function DeleteProduct(productId) {
  axios
    .delete(`http://localhost:4000/products/delete/${productId}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function GetPorducts() {
  let answer = axios
    .get(`http://localhost:4000/products/get`)
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
    .post(`http://localhost:4000/transactions/purchase`, purchaseArray)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function GetTransactions() {
  let answer = axios
    .get(`http://localhost:4000/transactions/fivedays`)
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
    .get(`http://localhost:4000/stats/gettopunique`)
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
    .get(`http://localhost:4000/stats/gettoptotal`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return answer;
}
