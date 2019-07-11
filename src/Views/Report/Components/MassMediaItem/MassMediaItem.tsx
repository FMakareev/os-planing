import * as React from 'react';
import {IMassMedia} from '../../../../Apollo/schema';

interface IMassMediaItemProps extends IMassMedia {
  [prop: string]: any
}

const MassMediaItem: React.FC<IMassMediaItemProps> = ({
                                                        title,
                                                        link
                                                      }) => {
  return (
    <div className={'inner__content'}>
      <p style={{textTransform: 'uppercase'}}>{title}</p>
      <a className={'city-details__title'} href={link} target={'_blank'}>{link}</a>
    </div>
  );
};

export default MassMediaItem;