import { createStore } from 'vuex'

export default createStore({
  state: {
    order: [], // товары в корзине
    totalSum: 0,
    count: 0,
    numberRow:[],

    users: [
      {email: 'email@email.com', password: "12345678"}
    ],

    devices: [
      {
        id: 1,
        name: "Apple iPhone 12 Pro Max",
        type: "phone",
        price: 128799,
        memory: 512,
        color: "gray",
        os: "iOS",
        img: "Phones/iPhone/img.png",
        imgs: [
          {img: "Phones/iPhone/img_1.png", id: 1},
          {img: "Phones/iPhone/img_2.png", id: 2},
          {img: "Phones/iPhone/img_3.png", id: 3}
            ],
      },
      {
        id: 2,
        name: "Samsung Galaxy S21 Ultra",
        type: "phone",
        price: 118999,
        memory: 512,
        color: "silver",
        os: "Android",
        img: "Phones/Samsung/img.png",
        imgs: [
          {img: "Phones/Samsung/img_1.png", id: 1},
          {img: "Phones/Samsung/img_2.png", id: 2},
          {img: "Phones/Samsung/img_3.png", id: 3}
        ],
      },
      {
        id: 3,
        name: "ASUS Zenfone 8",
        type: "phone",
        price: 70699,
        memory: 256,
        color: "black",
        os: "Android",
        img: "Phones/ASUS/img.png",
        imgs: [
          {img: "Phones/ASUS/img_1.png", id: 1},
          {img: "Phones/ASUS/img_2.png", id: 2},
          {img: "Phones/ASUS/img_3.png", id: 3}
        ],
      },
      {
        id: 4,
        name: "Xiaomi Mi 11 lite 5G",
        type: "phone",
        price: 37999,
        memory: 128,
        color: "black",
        os: "Android",
        img: "Phones/Xiaomi/img.png",
        imgs: [
          {img: "Phones/Xiaomi/img_1.png", id: 1},
          {img: "Phones/Xiaomi/img_2.png", id: 2},
          {img: "Phones/Xiaomi/img_3.png", id: 3}
        ],
      },
      {
        id: 5,
        name: "OLED LG OLED77W9",
        type: "tv",
        price: 999999,
        diagonal: 77,
        color: "black",
        os: "WEB OS",
        img: "TV/LG/img.png",
        imgs: [
          {img: "TV/LG/img_1.png", id: 1},
          {img: "TV/LG/img_2.png", id: 2},
          {img: "TV/LG/img_3.png", id: 3}
        ],
      },
      {
        id: 6,
        name: "LED Samsung QE75QN900AUXRU",
        type: "tv",
        price: 999999,
        diagonal: 75,
        color: "grey",
        os: "Tizen",
        img: "TV/Samsung/img.png",
        imgs: [
          {img: "TV/Samsung/img_1.png", id: 1},
          {img: "TV/Samsung/img_2.png", id: 2},
          {img: "TV/Samsung/img_3.png", id: 3}
        ],
      },
      {
        id: 7,
        name: "LED Sony KD-75ZH8",
        type: "tv",
        price: 532999,
        diagonal: 74.5 ,
        color: "grey",
        os: "Android TV",
        img: "TV/Sony/img.png",
        imgs: [
          {img: "TV/Sony/img_1.png", id: 1},
          {img: "TV/Sony/img_2.png", id: 2},
          {img: "TV/Sony/img_3.png", id: 3}
        ],
      },
      {
        id: 8,
        name: "LED Xiaomi Mi TV 4S",
        type: "tv",
        price: 49699,
        diagonal: 65 ,
        color: "black",
        os: "Android TV",
        img: "TV/Xiaomi/img.png",
        imgs: [
          {img: "TV/Xiaomi/img_1.png", id: 1},
          {img: "TV/Xiaomi/img_2.png", id: 2},
          {img: "TV/Xiaomi/img_3.png", id: 3}
        ],
      },
      {
        id: 9,
        name: "Gigabyte Aero 15",
        type: "notebook",
        price: 305999,
        diagonal: 15.6 ,
        color: "black",
        os: "Windows 10",
        chip: "Intel",
        img: "Notebooks/Gigabyte/img.png",
        imgs: [
          {img: "Notebooks/Gigabyte/img_1.png", id: 1},
          {img: "Notebooks/Gigabyte/img_2.png", id: 2},
          {img: "Notebooks/Gigabyte/img_3.png", id: 3}
        ],
      },
      {
        id: 10,
        name: "MSI GS66 11UH-263RU",
        type: "notebook",
        price: 299999,
        diagonal: 15.6 ,
        color: "black",
        os: "Windows 10 Home",
        chip: "Intel i7",
        img: "Notebooks/MSI/img.png",
        imgs: [
          {img: "Notebooks/MSI/img_1.png", id: 1},
          {img: "Notebooks/MSI/img_2.png", id: 2},
          {img: "Notebooks/MSI/img_3.png", id: 3}
        ],
      },
      {
        id: 11,
        name: "Apple MacBook Pro",
        type: "notebook",
        price: 254999,
        diagonal: 16 ,
        color: "grey",
        os: "Mac OS",
        chip: 'M1',
        img: "Notebooks/Apple/img.png",
        imgs: [
          {img: "Notebooks/Apple/img_1.png", id: 1},
          {img: "Notebooks/Apple/img_2.png", id: 2},
          {img: "Notebooks/Apple/img_3.png", id: 3}
        ],
      },
      {
        id: 12,
        name: "Dell XPS 9700-7298",
        type: "notebook",
        price: 254999,
        diagonal: 17,
        color: "silver",
        os: "Windows 10",
        chip: 'Intel i7',
        img: "Notebooks/Dell/img.png",
        imgs: [
          {img: "Notebooks/Dell/img_1.png", id: 1},
          {img: "Notebooks/Dell/img_2.png", id: 2},
          {img: "Notebooks/Dell/img_3.png", id: 3}
        ],
      }
    ]
},
  getters: {
    allPhones(state){
      return state.devices.filter(device => device.type == 'phone')
    },
    allNotebooks(state){
      return state.devices.filter(device => device.type == 'notebook')
    },
    allTV(state){
      return state.devices.filter(device => device.type == 'tv')
    },
    allItems(state){
      return state.devices.filter(device => device)
    },
    getDeviceById: state => (id) => {
      return state.devices.filter(device => device.id == id)[0];
    },
    getUsers(state){
      return state.users;
    }
  },
  mutations: {

    addToOrder(state, {device}){
      if(state.order.find(item => item.id === device.id)){
        device.quantity ++;
        device.totalprice = device.price * device.quantity;
      }else{
        state.order.push(device);
        device.quantity = 1;
        device.totalprice = device.price;
      }
      state.count ++;
      state.totalSum = state.totalSum + device.price;
    },

    getLess(state, {device}){
      let index = state.order.indexOf(device);
      if(index>-1){
        if(state.order[index].quantity == 0){
          state.order.splice(index, 1);
          state.count -= 1;
        } else{
          state.order[index].quantity -= 1;
          state.order[index].totalprice = state.order[index].price * state.order[index].quantity;
          state.totalSum -= state.order[index].price;
          state.count -= 1;
        }
      }
    },

    getMore(state, {device}){
      let index = state.order.indexOf(device);
      if(index>-1){
        state.order[index].quantity += 1;
        state.totalSum -= state.order[index].totalprice;
        state.order[index].totalprice = state.order[index].price * state.order[index].quantity;
        state.totalSum += state.order[index].totalprice;
        state.count += 1;
      }
    },

    removeFromOrder(state, {device}) {
      let index = state.order.indexOf(device);
      if (index > -1) {
        state.count -= state.order[index].quantity;
        state.totalSum -= state.order[index].totalprice;
        state.order.splice(index, 1);
      }
    },

    clearOrder(state){

      state.count = 0;
      state.totalSum = 0;
      while(state.order.length){
        state.order.pop();
      }
    },

    getTotalSum(state){
      for(let item of state.order){
        state.totalSum += item.totalprie;
      }
      return state.totalSum;
    },
  }
})
