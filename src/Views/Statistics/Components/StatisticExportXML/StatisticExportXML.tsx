import * as React from 'react';
import Button, {ButtonAsEnum} from "../../../../Components/Button/Button";
import GetStatisticXmLink from "../../Enhancers/GetStatisticXMLink/GetStatisticXMLink";

interface IStatisticExportXmlProps {
  link: string;
  loading?: boolean;

  [prop: string]: any
}

const StatisticExportXml: React.FC<IStatisticExportXmlProps> = ({link, loading}) => {
  return (
    <Button disabled={!link} to={link || '#!'} as={ButtonAsEnum.link}>
      Экспорт в Excel
    </Button>
  );
};

export default GetStatisticXmLink(StatisticExportXml);