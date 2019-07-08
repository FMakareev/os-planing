import * as React from 'react';
// import plus from "../../Assets/img/spritesvg/plus.svg";
import PlusIcon from "../../Components/SvgIcons/PlusIcon";


interface IItemListHocOptions {
  AddComponent?: any;
  buttonLabel: string;
}

interface IItemListHocProps {
  onChange?: any;
  value: any[];

  [prop: string]: any
}

interface IItemListHocState {
  items: any[];

  [prop: string]: any
}

const ItemListHoc = (WrapperComponent: React.ElementType) => ({AddComponent, buttonLabel}: IItemListHocOptions) => {
  return class extends React.Component<IItemListHocProps, IItemListHocState> {

    constructor(props: IItemListHocProps) {
      super(props);
      this.state = this.initialState;
    }

    get initialState() {
      return {
        items: this.props.value && Array.isArray(this.props.value) ? this.props.value : []
      }
    }

    addItem = (item: any) => {
      this.setState((state: IItemListHocState) => ({
        items: [...state.items, item]
      }))
    };

    removeItem = (index: number) => {

      const {items} = this.state;

      items.splice(index, 1);

      this.setState(() => ({
        items,
      }))
    };

    render() {
      const {items} = this.state;
      return (<React.Fragment>
        <WrapperComponent
          items={items}
          {...this.props}
        />
        {
          AddComponent && <AddComponent
            {...this.props}
            addItem={this.addItem}
            removeItem={this.removeItem}

          />
        }

        {
          !AddComponent && <div className="add-category">
              <a onClick={()=>this.addItem({})} className="add-category__link" href="javascript:void(0);">
                  <PlusIcon className="icon icon-plus "/>
                  {buttonLabel}
              </a>
          </div>
        }

      </React.Fragment>);
    }
  }
};

export default ItemListHoc;