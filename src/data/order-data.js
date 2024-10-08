export const orderData = {
  name: {
    type: "text",
    placeholder: "Имя*",
    name: "Имя",
  },
  phone: {
    type: "number",
    placeholder: "Телефон*",
    name: "Телефон",
  },
  email: {
    type: "email",
    placeholder: "E-mail*",
    name: "E-mail",
  },
  address:{
    type: "select",
    placeholder: "Адрес*",
    name: "Адрес",
    options:[
      "Москва",
      "Санкт-Петербург",
      "Новосибирск",
      "Екатеринбург",
      "Краснодар",
      "Казань",
      "Нижний Новгород",
      "Челябинск",
      "Омск",
      "Самара",
    ]
  }
};
