
const storage = {
  
  add(key, value){
    localStorage[key] = JSON.stringify(value);
  },

  get(key){
    const value = localStorage[key];
    return JSON.parse(value); 
  }

}

export {storage};