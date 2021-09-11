import { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import "../styles/daoCustomTable.css";

const customStyles = {
  rows: {
    style: {
      "&:nth-child(even)": {
        backgroundColor: " #e0edff ",
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: "#2F80ED",
      color: "white",
      fontWeight: "bold",
      fontSize: "15px",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
    },
  },
};

const data = [
  {
    rank: 1,
    name: "Kundwa",
    platform: "DAO stack",
    usdvalue: "$244K",
    totalin: "253,213",
    totalout: "746,473",
    members: "637,829",
    proposals: "627",
    voters: "738",
    voterparticipation: "834",
  },
  {
    rank: 2,
    name: "Bruno",
    platform: "DAO stack",
    usdvalue: "$244K",
    totalin: "253,213",
    totalout: "746,473",
    members: "637,829",
    proposals: "627",
    voters: "738",
    voterparticipation: "834",
  },
  {
    rank: 3,
    name: "Materne",
    platform: "DAO stack",
    usdvalue: "$244K",
    totalin: "253,213",
    totalout: "746,473",
    members: "637,829",
    proposals: "627",
    voters: "738",
    voterparticipation: "834",
  },
  {
    rank: 4,
    name: "TDE",
    platform: "DAO stack",
    usdvalue: "$244K",
    totalin: "253,213",
    totalout: "746,473",
    members: "637,829",
    proposals: "627",
    voters: "738",
    voterparticipation: "834",
  },
  {
    rank: 4,
    name: "TDE",
    platform: "DAO stack",
    usdvalue: "$244K",
    totalin: "253,213",
    totalout: "746,473",
    members: "637,829",
    proposals: "627",
    voters: "738",
    voterparticipation: "834",
  },
  
];
const columns = [
  {
    name: "Rank",
    selector: "rank",
    sortable: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Platform",
    selector: "platform",
    sortable: true,
  },
  {
    name: "USD Value",
    selector: "usdvalue",
    sortable: true,
  },
  {
    name: "Total In",
    selector: "totalin",
    sortable: true,
  },
  {
    name: "Total Out",
    selector: "totalout",
    sortable: true,
  },
  {
    name: "Members",
    selector: "members",
    sortable: true,
  },
  {
    name: "Proposals",
    selector: "proposals",
    sortable: true,
  },
  {
    name: "Voters",
    selector: "voters",
    sortable: true,
  },
  {
    name: "Voters participation",
    selector: "voterparticipation",
    sortable: true,
  },
];

const CollapseComponent = ({ data }) => {
  return (
    <div className="collapse">
      <div className="block-one">
        <div className="block-one-profile"></div>
      </div>
      <div className="block-two">
        <div className="block-two-header">
          <div>
            <i style={{ color: "skyblue" }} className="fab fa-twitter" />
            <i style={{ color: "black" }} className="fab fa-github" />
            <i style={{ color: "darkblue" }} className="fab fa-facebook" />
            <i style={{ color: "skyblue" }} className="fab fa-telegram" />
          </div>
        </div>
        <div className="block-two-header">
          <div>Uniswap Dao</div>
          <div>Founded 12th march</div>
        </div>
        <div className="block-two-description">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </div>
      </div>
      <div className="block-three">
        <div className="block-three-member-header">Proposals</div>
        <div className="block-three-members">
          {[1, 2, 3].map((el) => (
            <div className="block-three-proposal">
              <div className="block-three-proposal-text">
                I would like to invest $30K
              </div>
              <div className="block-three-proposal-profile">
                <div></div>
                <div>257X758Hja79</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterComponent = ({ onFilter, handleClear, filterText }) => {
  return (
    <input
      className="search-input"
      value={filterText}
      placeholder="Search DAOs"
      onChange={(e) => onFilter(e)}
      onClear={handleClear}
    />
  );
};

const DaoCustomTable = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div className="table-container">
      <DataTable
        columns={columns}
        data={filteredItems}
        expandableRows
        expandableRowsComponent={<CollapseComponent data={data} />}
        expandableRowsHideExpander
        expandOnRowClicked
        sortIcon={false}
        pagination
        fixedHeader
        customStyles={customStyles}
        paginationRowsPerPageOptions={[5, 10, 15]}
        highlightOnHover
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          borderRadius: "2px",
        }}
        responsive
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        subHeaderAlign="right"
      />
    </div>
  );
};

export default DaoCustomTable;
