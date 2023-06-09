import Cookie from 'js-cookie';

const TIMESTAMP_KEY = 'timestamp_app_key';

function main() {
  const lastLoadDate = Cookie.get(TIMESTAMP_KEY);

  if (lastLoadDate) {
    console.log('Last load date is:', new Date(lastLoadDate));
  }

  Cookie.set(TIMESTAMP_KEY, new Date());
  console.log('Dom content loaded');
}

document.addEventListener('DOMContentLoaded', main);
