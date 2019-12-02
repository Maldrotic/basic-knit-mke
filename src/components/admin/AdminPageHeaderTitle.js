import React from 'react';


const AdminPageHeaderTitle = (props) => (
  <div className={`${props.className} admin-page-header__container--title`}>
    <h2>
      {props.children}
    </h2>
  </div>
);

export default AdminPageHeaderTitle;