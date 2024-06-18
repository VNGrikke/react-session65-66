import { useSelector } from 'react-redux';

export default function ListUser() {
    const users = useSelector((state: any) => state.users);

    return (
        <div className="list-user">
            <h2>Danh sách người dùng</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Địa chỉ</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.gender}</td>
                            <td>{user.dateBirth}</td>
                            <td>{user.address}</td>
                            <td>
                                <button>Xóa</button>
                                <button>Sửa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};