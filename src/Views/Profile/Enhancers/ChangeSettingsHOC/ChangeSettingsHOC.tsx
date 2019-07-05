import * as React from 'react';

interface IChangeSettingsHocProps {
  [prop: string]: any
}

const ChangeSettingsHoc = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<IChangeSettingsHocProps> {

    onSubmit = (values: any) => {

    };

    render() {
      return (<WrapperComponent
        onSubmit={this.onSubmit}
        {...this.props}
      />)
    }

  }
};

export default ChangeSettingsHoc;