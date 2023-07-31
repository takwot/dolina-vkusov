import axios from "axios";

const instance = axios.create({
  // baseURL: "http://45.12.236.195:4001/api/",
  baseURL: "http://localhost:4001/api/",
});

const api = {
  createUser(email, name, password, phone) {
    console.log(email, name, password);
    return instance.post("registration", {
      email: email,
      password: password,
      name: name,
      phone: phone,
    });
  },
  getItem(category, type, mini_category) {
    return instance.get(
      `item/category?category=${category}&type=${type}&mini_category=${mini_category}`
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
  addRaiting(name, text, value, image) {
    return instance.post("raiting", {
      name,
      text,
      raiting: value,
      image: image,
    });
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
  changeItem(data) {
    return instance.patch("item", data);
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
  setCart(email, cart) {
    return instance.patch("cart", { email, cart });
  },
  setFavourity(email, favourity) {
    return instance.patch("favourity", { email, favourity });
  },
  getAllUsers() {
    return instance.get("all");
  },
  getCarucelImg() {
    return instance.get("carucel");
  },
  deleteCarucelImg(id) {
    return instance.delete(`carucel?id=${id}`);
  },
  addCarucelImg(img) {
    return instance.post("carucel", { img: img });
  },
  updateCarucelImg(id, img) {
    return instance.patch(`carucel?id=${id}`, { img: img });
  },
};

export default api;
