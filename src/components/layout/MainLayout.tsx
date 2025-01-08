import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ height: '100%' }}>
        {/* <Sidebar /> */}
        <Layout>
          <Header>
            <Button >Logout</Button>{' '}
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
};

export default MainLayout;