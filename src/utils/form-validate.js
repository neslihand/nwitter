export const usernameValidate = {
  required: {
    value: true,
    message: "Lütfen kullanıcı adı giriniz.",
  },
  minLength: {
    value: 6,
    message: "Kullanıcı adı en az 6 karakter olmalıdır.",
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: "Kullanıcı adı alfanumerik olmalıdır.",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "Lütfen bir email adresi giriniz.",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Email addrei geçersiz.",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "Lütfen parola giriniz.",
  },
  minLength: {
    value: 6,
    message: "Parola en az 6 karakter uzunluğunda olmalıdır.",
  },
};
