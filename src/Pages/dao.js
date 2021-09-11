import Layout from "../componets/layout";
import DaoCustomTable from "../componets/DaoCustomTable";
import "../styles/dao.css";

const Dao = () => {
  return (
    <Layout title="Dao leaderboard" icon="fas fa-medal">
      <div className="dao-main">
        <DaoCustomTable />
      </div>
    </Layout>
  );
};

export default Dao;
