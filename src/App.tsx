// /src/App.tsx
import * as React from 'react';
import { DatePicker } from 'antd';
import './App.scss';

type Props = {
  toWhat: string;
};
type State = {

};

class App extends React.Component<Props, State>  {
  render(): JSX.Element {
    return <div className="app">
      Hello {this.props.toWhat}
      <div className="text">fads</div>
      <div>
        <DatePicker></DatePicker>
      </div>
    </div>;
  }
}

export default App;
