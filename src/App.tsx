import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewNewTransactionModal={ handleOpenNewNewTransactionModal } />
      <Dashboard />

      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen } 
        onRequestClose={ handleCloseNewNewTransactionModal }
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}