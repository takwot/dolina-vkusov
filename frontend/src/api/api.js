import axios from "axios";

const instance = axios.create({
  baseURL: "http://62.217.180.188:4001/api/",
});

const api = {
  createUser(email, name, password) {
    console.log(email, name, password);
    return instance.post("registration", {
      email: email,
      password: password,
      name: name,
    });
  },
  getItem(category, type, mini_category) {
    return instance.get(
      `/item/category?category=${category}&type=${type}&mini_category=${mini_category}`
    );
  },
  getOneItem(id) {
    return instance.get(`item/catalog?id=${id}`);
  },
  getItemWithOutAll(type) {
    return instance.get(`item/id?type=${type}`);
  },
  getItemWithCategory(category, type) {
    return instance.get(`item/type?category=${category}&type=${type}`);
  },
  allRaiting() {
    return instance.get("raiting");
  },
  addRaiting(name, text) {
    return instance.post("raiting", { name, text });
  },
  loginUser(email, password) {
    return instance.get(`login?email=${email}&password=${password}`);
  },
  getCart(email) {
    return instance.get(`cart?email=${email}`);
  },
  getSettings() {
    return instance.get("settings");
  },
  setSettings(data) {
    return instance.post("settings", data);
  },
  createItem(data) {
    console.log(data.img[0]);
    return instance.post("item", data);
  },
  getImg() {
    return instance.get("carucel");
  },
  setImg(img) {
    return instance.post("carucel", { img });
  },
  addImg(img, id) {
    return instance.patch("carucel", { img, id });
  },
  deleteImg(id) {
    console.log(id);
    return instance.delete(`carucel?id=${id}`);
  },
  allItem() {
    return instance.get("item");
  },
  deleteItem(id) {
    return instance.delete("item", { id: id });
  },
  addFaq(answer, question) {
    return instance.post("faq", { answer, question });
  },
  allFaq() {
    return instance.get("faq");
  },
  deleteFaq(id) {
    return instance.delete("faq", { id });
  },
};

export default api;
