import React from "react";
import Form from "./Form";
import { History } from 'history';

type HeaderProps = {
  handleSubmit: (history: History, searchInput: string) => void,
  history: History
}

const Header = ({ history, handleSubmit }: HeaderProps) => {
  return (
    <div>
      <h1><a href="/"> ImageScraper</a></h1>
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Header;
