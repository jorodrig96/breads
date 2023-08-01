const React = require('react');
const Default = require('./layouts/Default');

function Index ({breads, title}) {
  return (
    <Default title = {title}>
      <h2> This loads the index file in /views / index. jsx </h2>
      {/*<p>I have {breads[0].name} bread!</p> */}
          <ul>
            {
              breads.map((bread, index) => {
                return (
                <li key = {index}>
                  <a href = {`/breads/${Index}`}>
                    {bread.name}
                  </a>
                </li>)
              })
            }
          </ul>
    </Default>
  );
};

module.exports = Index;