import Router from "~/router";
import { Header } from "./components/Header";
import Modal from "./components/Modal";
import { useModalStore } from "./components/Modal/store";
import { useDashboadStore } from "./pages/Dashboard/store";
import Loading from "./components/Loading";

function App() {
  const { isModalOpened } = useModalStore()
  const { isLoadingAPI } = useDashboadStore()

  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      { isModalOpened && !isLoadingAPI && <Modal />}
      { isLoadingAPI && !isModalOpened && <Loading />}
      
      <Router />
    </>
  );
}

export default App;
