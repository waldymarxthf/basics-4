import Cookies from 'js-cookie'

const cookies = {
  saveCode: (code) => Cookies.set('code', code, { expires: 30 }),
  getCode: () => Cookies.get('code'),
  saveEmail: (email) => Cookies.set('email', email, { expires: 30 }),
  getEmail: () => Cookies.get('email'),
}

export { cookies }

