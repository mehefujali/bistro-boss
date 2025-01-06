import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  const handleDeleteUser = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/users/${user?._id}`);

        if (data.deletedCount) {
          refetch();
          toast.success(`${user?.name} deleted`)
        }
      }
    });
  };

  const handleMakeAdmin = async (user) => {
    axiosSecure
      .patch(`/user/admin/${user?._id}`)

      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success(`${user.name} is admin now`);

        }
        refetch()
      });
      
  };

  return (
    <div>
      <div>
        <SectionHeading
          heading={"MANAGE ALL USERS"}
          subHeading="How many?"
        ></SectionHeading>
      </div>
      <div>
        <h1 className=" text-xl">Total users: {users.length} </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-[#D1A054] text-lg text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td className="  ">
                    {user.role === "admin" ? 'admin' :<FaUsersCog
                      onClick={() => handleMakeAdmin(user)}
                      className="cursor-pointer text-2xl"
                    />}
                  </td>
                  <td>
                    <div
                      onClick={() => handleDeleteUser(user)}
                      className=" w-fit h-fit p-2 cursor-pointer bg-red-500 rounded-full"
                    >
                      <MdDelete className="text-lg  text-white " />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
