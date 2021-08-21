import { Provider } from "./Context";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { Actions } from "./Actions";
function App() {
  const data = Actions();
  return (
    <Provider value={data}>
      <div className="App">
        <h1>React and PHP with MySql Crud</h1>
        <div className="wrapper">
          <section className="form-section">
            <Form />
          </section>
          <section className="table-section">
            <UserList />
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default App;