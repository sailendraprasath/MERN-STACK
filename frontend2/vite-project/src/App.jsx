import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBook from "./Pages/CreateBook";
import ShowBook from "./Pages/ShowBook";
import EditBook from "./Pages/EditBook";
import DeleteBook from "./Pages/DeleteBook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/Create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/Edit/:id" element={<EditBook />} />
          <Route path="/books/Delete/:id" element={<DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
