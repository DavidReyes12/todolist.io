export const loadFromLocalStorage = () => {
    try {
      const appState = localStorage.getItem("appSession");
      if (!appState) return null;
      return JSON.parse(appState);
    } catch (e) {
      console.log(e);
      return null;
    }
};
  
export const saveToLocalStorage = (state) => {
    try {
        const appState = JSON.stringify(state);
        localStorage.setItem("appSession", appState);
    } catch (e) {
        console.log(e);
    }
};