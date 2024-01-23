class LocalStorageService {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getValue(key, defaultValue = null) {
    const storedValue = JSON.parse(localStorage.getItem(key));

    return storedValue || defaultValue;
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }
}

export default LocalStorageService;
