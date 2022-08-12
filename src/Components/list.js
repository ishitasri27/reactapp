import React from "react";

const List = () => {
  return (
    <>
      <h1> This is an unordered list</h1>
      <ul>
        <li>Books</li>
        <li>Pen</li>
        <li>Pencil</li>
      </ul>
      <h1> This is an ordered list</h1>
      <ol>
        <li>Maths</li>
        <li>Physics</li>
        <li>Chemistry</li>
      </ol>
      <h1> This is a description list</h1>
      <dl>
        <dt>HTML</dt>
        <dd>Hyper Text Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
      </dl>
    </>
  );
};

export default List;
