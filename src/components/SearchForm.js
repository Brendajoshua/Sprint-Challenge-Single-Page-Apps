import React, { useState } from "react";
import {Form, Input, Button} from 'semantic-ui-react';

export default function SearchForm({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputchange = e => {
    setSearchTerm(e.target.value);
  };
 
  return (
    <section className="search-form">
      <Form onSubmit ={() => onSearch(searchTerm)}>
        <Input onChange={handleInputChange} placeholder="Name" value={searchTerm} name="searchTerm" />
        <Button type="submit">Search</Button>
      </Form>
    </section>
  );
}
