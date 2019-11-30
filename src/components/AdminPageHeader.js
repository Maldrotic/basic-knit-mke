import React from 'react';


const AdminPageHeader = (props) => (
  <div className={`${props.className} admin-page-header`}>
    {props.children}
  </div>
);

export default AdminPageHeader;