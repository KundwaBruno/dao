import "../styles/layout.css";

const Layout = ({ children, title, icon }) => {
    return <div className="layout-main">
         <div className="dao-heading">
          <h1>
            <i class={icon}></i>{title}
          </h1>
          <div className="line-through"></div>
        </div>
        {children}
    </div>
};

export default Layout;