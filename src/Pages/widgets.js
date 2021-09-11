import "../styles/widgets.css";

const Widgets = () => {
  return (
    <div className="widgets-main">
      <div className="newly-listed">
        <div className="widget-title">Newly listed daos</div>
        {[1, 2, 3].map((widget) => {
          return (
            <div>
              <div className="widget">
                <div className="first">
                  <div className="widget-profile">
                    <div></div>
                  </div>
                  <div className="widget-description">
                    <div>PartyDAO</div>
                    <div>$267,000,000</div>
                  </div>
                </div>
                <div className="widget-footer">Added 1 day ago</div>
              </div>
            </div>
          );
        })}
        <div className="widget-button-container">
          <button className="widget-button">Add Dao <i className="fas fa-plus" /></button>
        </div>
      </div>
      <div className="resources">
        <div className="widget-title">Resources</div>
        {[1, 2, 3].map((widget) => {
          return (
            <div className="widget">
              <div className="first resource">
                <div>
                  <div className="widget-name">Gamefied DAOs</div>
                  <div className="widget-box">NFTS</div>
                </div>
                <div>
                  <div className="widget-icon">
                    <i className="fas fa-book" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Widgets;
