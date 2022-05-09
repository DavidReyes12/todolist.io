import renderer from 'react-test-renderer';
import App from './App';
import { SessionContext } from "./config/State";

const session = {
  userName: "David Reyes",
  id: 1,
  welcomeMsg: ""
};

const setSession = () => {};

describe('App test', () => {
  test('App test with Snapshot', () =>{
      const tree = renderer.create(
        <SessionContext.Provider value={{session, setSession}}>
          <App />          
        </SessionContext.Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  })
})
