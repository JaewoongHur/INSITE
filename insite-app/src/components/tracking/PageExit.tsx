import styled from "styled-components";

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
  position: sticky;
  top: 0;
  font-size: 15px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.a1};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.b3}; /* 배경색 설정 */
  z-index: 1; /* 다른 내용 위에 나타나도록 설정 */
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

function PageExit() {
  // todo 임시데이터 넣기
  // const [data, setData] = useState<UserRefDtoType[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRefData();
  //       setData(response.referrerFlowDtos);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.error(error); // 에러 처리
  //     }
  //   };

  //   fetchData();
  // }, []);

  const data = [
    {
      id: 1,
      currentUrl: "네이버",
      excitCount: Math.floor(Math.random() * 100) + 1,
      ratio: 17,
    },
    {
      id: 2,
      referrer: "다음",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 3,
      referrer: "구글",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 4,
      referrer: "네이버",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 5,
      referrer: "다음",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 6,
      referrer: "구글",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 7,
      referrer: "네이버",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 8,
      referrer: "다음",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 9,
      referrer: "구글",
      count: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 10,
      referrer: "네이버",
      count: Math.floor(Math.random() * 100) + 1,
    },
  ];

  return data && data.length > 0 ? (
    <Border>
      <StyledTable>
        <TableHeader>
          <tr>
            <th>순위</th>
            <th>Url</th>
            <th>나간 횟수</th>
            <th>비율</th>
          </tr>
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

export default PageExit;
