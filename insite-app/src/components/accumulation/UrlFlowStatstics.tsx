import styled from "styled-components";
import { useState, useEffect } from "react";
import { UserRefDtoType } from "@customtypes/dataTypes";
import { getRefData } from "@api/accumulApi";

const Border = styled.div`
  display: flex;
  overflow: auto;
  justify-content: center;
  align-items: start;
  width: 90%;
  height: 80%;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  justify-content: center;
  text-align: center;
`;

const TableHeader = styled.thead`
  font-size: 15px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.a1};
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    color: coral;
  }
`;

const TableCell = styled.td`
  padding: 4px;
`;

const TableBody = styled.tbody`
  overflow: auto;
  max-height: 200px;
`;

function UrlFlowStatstics() {
  const [data, setData] = useState<UserRefDtoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRefData();
        setData(response.referrerFlowDtos);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error); // 에러 처리
      }
    };

    fetchData();
  }, []);

  return data && data.length > 0 ? (
    <Border>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <th>순위</th>
            <th>URL</th>
            <th>명</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.referrer}</TableCell>
              <TableCell>{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Border>
  ) : (
    <div>데이터가 없습니다.</div>
  );
}

export default UrlFlowStatstics;
