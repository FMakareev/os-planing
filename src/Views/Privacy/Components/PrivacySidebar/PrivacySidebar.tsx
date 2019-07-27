import * as React from 'react';
import {SectionsSpy} from "react-smart-sections";
import classNames from 'classnames';
import {StickyContainer, Sticky} from 'react-sticky';
import {IPrivacyBlock} from "../../../../Apollo/schema";
import Scrollbars from 'react-custom-scrollbars';
import {RefObject} from "react";
// @ts-ignore
import scrollIntoView from 'scroll-into-view';
import {easeOutCuaic} from "../../../../Helpers/ScrollTo";

interface IPrivacySidebarProps {
  privacyBlockList: IPrivacyBlock[];

  [prop: string]: any
}

interface PrivacySidebarLinkProps {
  index: number;
  section: {
    yScrollPoint: any;
    name: any;
    active: boolean;
  };
  privacyBlock: IPrivacyBlock;
}


class PrivacySidebarLink extends React.Component<PrivacySidebarLinkProps, any> {

  itemRef: RefObject<any>;

  contentElem: any;

  constructor(props: any) {
    super(props);
    this.itemRef = React.createRef();
  }

  componentDidUpdate(prevProps: any) {
    const {section} = this.props;

    if (section.active) {
      this.itemRef.current.scrollIntoView({
        block: "center",
        inline: "nearest",
      });
    }
  }

  render() {

    const {privacyBlock, section} = this.props;
    return (
      <a
        ref={this.itemRef}
        onClick={(e) => {
          e.preventDefault();
          if (!this.contentElem) {
            this.contentElem = document.getElementsByName(section.name)[0];
          }
          if (this.contentElem) {
            scrollIntoView(this.contentElem, {
              ease: easeOutCuaic,
              time: 200,
              align:{
                top: 0.3
              }
            });
          }
        }}

        className={classNames("privacy-menu__link", {
          'active': section.active,
        })}
        href={'!#'}
      >
        {privacyBlock && privacyBlock.title || section.name}
      </a>
    )
  }
}


export const PrivacySidebar: React.FC<IPrivacySidebarProps > = ({privacyBlockList}) => (
  <div
    className="inner-info"
    style={{
      maxHeight: 'calc(100vh - 40px)'
    }}>
    <SectionsSpy
      render={(sections: any) => (

        <div className="privacy-menu">
          <Scrollbars
            autoHeight
            autoHeightMin={178}
            autoHeightMax={window.innerHeight - 140}

            hideTracksWhenNotNeeded={true}
          >
            {
              sections.map((section: any, index: number) => {

                return (
                  <PrivacySidebarLink
                    key={`SectionsSpy-${index}`}
                    index={index}
                    section={section}
                    privacyBlock={privacyBlockList && privacyBlockList[index]}
                  />
                );
              })
            }
          </Scrollbars>
        </div>
      )}
    />
  </div>
);

export default PrivacySidebar;
