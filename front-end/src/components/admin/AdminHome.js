import React from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { Layout, Typography, Button } from "antd";

const AdminHome = () => {
  const history = useHistory();
  const showToast = () => {
    toast.success("Thanh cong ");
  };
  return (
    <Layout.Content>
      <Typography.Title level={3}>Admin Home</Typography.Title>
      <Button type="primary" onClick={showToast}>
        Click me
      </Button>
    </Layout.Content>
  );
};

export default AdminHome;
