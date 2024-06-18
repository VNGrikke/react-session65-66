import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector((state: any) => state.profile);

  return (
    <div className="profile">
      <h2>Thông tin cá nhân</h2>
        <div>
          <p>Id: {user.id}</p>
          <p>Họ và tên: {user.userName}</p>
          <p>Giới tính: {user.gender}</p>
          <p>Ngày sinh: {user.dateBirth}</p>
          <p>Địa chỉ: {user.address}</p>
        </div>
    </div>
  );
};

