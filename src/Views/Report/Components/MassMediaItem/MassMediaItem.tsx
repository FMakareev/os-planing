import * as React from 'react';
import {IMassMedia} from '../../../../Apollo/schema';
import ReactHtmlParser from "react-html-parser";

interface IMassMediaItemProps extends IMassMedia {
  [prop: string]: any
}

const MassMediaItem: React.FC<IMassMediaItemProps> = ({
                                                        title,
                                                        link
                                                      }) => {
  return (
    <div className={'mass-media__wrapper'}>
      <p className={'mass-media__title text-content'}>
        {title && ReactHtmlParser(title)}
      </p>
      <a className={'mass-media__link'} href={link} target={'_blank'}>{link}</a>
    </div>
  );
};

export default MassMediaItem;