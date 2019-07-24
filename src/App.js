// コードがトランスパイル(JavaScriptに変換)された際に必要になる。
// React.createElement ...実行時に必要
import React from 'react';

// function App() {
//   const greeting = "Hello, World!!";
//   return <h1 className="foo">{greeting}</h1>;
// }

// JavaScriptにトランスパイルされると以下のようなコードになる。
// function App() {
//   return React.createElement(
//       "h1",
//       null,
//       "Hello, World!!!!!!!!!!!!"
//     );
// }

// returnで返すタグは一つでなければならないという制約があるため、
// 複数要素を記述する場合は<React.Fragment>タグ等で囲う。
function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange = {() => {console.log("I am clicked")}} />
    </React.Fragment>
  )
}

export default App;

