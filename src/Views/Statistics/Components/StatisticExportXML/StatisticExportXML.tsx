import * as React from 'react';
import GetStatisticXmLink from "../../Enhancers/GetStatisticXMLink/GetStatisticXMLink";

interface IStatisticExportXmlProps {
  link: string;
  loading?: boolean;

  [prop: string]: any
}

const StatisticExportXml: React.FC<IStatisticExportXmlProps> = ({link}) => {
  return (
    <a className={'button-primary'} download href={link || '#!'}>
      Экспорт в Excel
    </a>
  );
};

export default GetStatisticXmLink(StatisticExportXml);