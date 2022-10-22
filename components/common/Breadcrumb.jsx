import Link from "next/link";
import { Breadcrumb as BootStrapBreadcrumb } from "react-bootstrap";
import styled from "@emotion/styled";

const Breadcrumb = ({ currentPageTitle, currentPagePath }) => {
  return (
    <BootStrapBreadcrumb>
      <Link href="/" passHref>
        <BootStrapBreadcrumb.Item>홈</BootStrapBreadcrumb.Item>
      </Link>
      <Link href={currentPagePath} passHref>
        <BootStrapBreadcrumb.Item>{currentPageTitle}</BootStrapBreadcrumb.Item>
      </Link>
      <p>
        파티 참여를 위한 페이지로, 자신이 원하는 리더에게 빈 슬롯이 있다면
        비용을 지불하고 슬롯에 참여할 수 있습니다.
      </p>
    </BootStrapBreadcrumb>
  );
};

const Container = styled.div`
  display: flex;
  height: 96px;
  align-items: center;
  justify-content: space-between;
`;

export default Breadcrumb;
