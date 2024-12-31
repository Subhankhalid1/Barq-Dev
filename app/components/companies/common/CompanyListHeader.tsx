
import LogoutIcon from "../../../assets/svgs/logoutIcon";
import Table from "./table";

const CompanyListHeader: React.FC<any> = ({
  handleCreate,
 
}) => {
 
  return (
    <>
      <div className="flex text-white justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">My Companies</h1>
          <div
            onClick={handleCreate}
            className="px-2 text-md border rounded-full cursor-pointer"
          >
            +
          </div>
        </div>
        <div className="flex items-center gap-x-1" >
          <button className="text-xs text-white">Logout</button>
          <LogoutIcon />
        </div>
     
      </div>
         <Table/>
    </>
  );
};

export default CompanyListHeader;
